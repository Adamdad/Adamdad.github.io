/*
 * DSAI4207 · shared numerical core for the neural-network widgets
 *
 * One implementation of the maths, used by every page that touches an MLP, so
 * the activation lab, the backprop lab and the training pages cannot drift
 * apart. Two pages teaching slightly different formulas is the failure mode
 * this file exists to prevent.
 *
 * No DOM, no dependencies. Loads as a plain <script> (attaches to window) and
 * as a CommonJS module, so the Node checkers can exercise the exact same code
 * the browser runs.
 *
 * Conventions
 *   A matrix is a nested array, row-major: W[i][j] is row i, column j.
 *   A vector is a plain array.
 *   A batch is a matrix with one example per COLUMN: X is (features x batch).
 *   That is the layout that makes  dW = dA * H^T  a plain matrix product and
 *   the batch sum a plain accumulation, i.e. the layout the derivation in the
 *   lecture is written in.
 *   Layer l maps sizes[l] -> sizes[l+1]; net.layers has sizes.length - 1
 *   entries. The activation applies to every layer except the last, which is a
 *   linear readout followed by softmax.
 */

(function (global) {
  "use strict";

  /* ------------------------------------------------------------ shapes */

  function zeros(n) {
    var v = new Array(n), i;
    for (i = 0; i < n; i += 1) v[i] = 0;
    return v;
  }

  function zerosMat(rows, cols) {
    var m = new Array(rows), i, j, row;
    for (i = 0; i < rows; i += 1) {
      row = new Array(cols);
      for (j = 0; j < cols; j += 1) row[j] = 0;
      m[i] = row;
    }
    return m;
  }

  function copyMat(A) {
    return A.map(function (row) { return row.slice(); });
  }

  function copyVec(v) { return v.slice(); }

  /* ------------------------------------------------- linear algebra */

  function matmul(A, B) {
    var n = A.length, k = B.length, m = B[0].length;
    var C = zerosMat(n, m), i, j, t, s;
    for (i = 0; i < n; i += 1) {
      for (j = 0; j < m; j += 1) {
        s = 0;
        for (t = 0; t < k; t += 1) s += A[i][t] * B[t][j];
        C[i][j] = s;
      }
    }
    return C;
  }

  function transpose(A) {
    var rows = A.length, cols = A[0].length;
    var T = zerosMat(cols, rows), i, j;
    for (i = 0; i < rows; i += 1) {
      for (j = 0; j < cols; j += 1) T[j][i] = A[i][j];
    }
    return T;
  }

  /* W (m x n) times x (n) -> (m) */
  function matvec(W, x) {
    var m = W.length, n = x.length;
    var y = zeros(m), i, t, s;
    for (i = 0; i < m; i += 1) {
      s = 0;
      for (t = 0; t < n; t += 1) s += W[i][t] * x[t];
      y[i] = s;
    }
    return y;
  }

  function addVec(u, v) {
    var out = new Array(u.length), i;
    for (i = 0; i < u.length; i += 1) out[i] = u[i] + v[i];
    return out;
  }

  function subVec(u, v) {
    var out = new Array(u.length), i;
    for (i = 0; i < u.length; i += 1) out[i] = u[i] - v[i];
    return out;
  }

  function scaleVec(a, v) {
    var out = new Array(v.length), i;
    for (i = 0; i < v.length; i += 1) out[i] = a * v[i];
    return out;
  }

  function dot(u, v) {
    var s = 0, i;
    for (i = 0; i < u.length; i += 1) s += u[i] * v[i];
    return s;
  }

  /* u (m) and v (n) -> m x n. This is the shape of a weight gradient. */
  function outer(u, v) {
    var m = u.length, n = v.length;
    var M = zerosMat(m, n), i, j;
    for (i = 0; i < m; i += 1) {
      for (j = 0; j < n; j += 1) M[i][j] = u[i] * v[j];
    }
    return M;
  }

  function addMat(A, B) {
    var n = A.length, m = A[0].length;
    var C = zerosMat(n, m), i, j;
    for (i = 0; i < n; i += 1) {
      for (j = 0; j < m; j += 1) C[i][j] = A[i][j] + B[i][j];
    }
    return C;
  }

  function scaleMat(a, A) {
    var n = A.length, m = A[0].length;
    var C = zerosMat(n, m), i, j;
    for (i = 0; i < n; i += 1) {
      for (j = 0; j < m; j += 1) C[i][j] = a * A[i][j];
    }
    return C;
  }

  function mapMat(f, A) {
    return A.map(function (row) { return row.map(f); });
  }

  function mapVec(f, v) { return v.map(f); }

  /* Frobenius norm. Used by the pages as "how big is this gradient", and by
   * the checkers as the scalar to compare against finite differences. */
  function matNorm(A) {
    var s = 0, i, j;
    for (i = 0; i < A.length; i += 1) {
      for (j = 0; j < A[i].length; j += 1) s += A[i][j] * A[i][j];
    }
    return Math.sqrt(s);
  }

  function vecNorm(v) { return Math.sqrt(dot(v, v)); }

  function maxAbsMat(A) {
    var m = 0, i, j;
    for (i = 0; i < A.length; i += 1) {
      for (j = 0; j < A[i].length; j += 1) m = Math.max(m, Math.abs(A[i][j]));
    }
    return m;
  }

  /* -------------------------------------------------------- activations */

  /* GELU uses the tanh approximation, which is what PyTorch ships as the
   * default and what the derivative below is taken of. The exact erf form
   * would need an erf implementation JS does not have; the two agree to about
   * 1e-3 in absolute terms, which is far below anything the pages display. */
  var SQRT_2_OVER_PI = Math.sqrt(2 / Math.PI);
  var GELU_C = 0.044715;

  function geluU(x) {
    return SQRT_2_OVER_PI * (x + GELU_C * x * x * x);
  }

  var ACT = {
    relu: {
      name: "ReLU",
      tex: "max(0, a)",
      f: function (x) { return x > 0 ? x : 0; },
      df: function (x) { return x > 0 ? 1 : 0; },
      /* ReLU is not differentiable at 0. The pages have to say so rather than
       * quietly picking a side, so the sub-gradient is reported separately. */
      kink: true
    },
    /* The leaky variant exists so V02.5 can show that "clamped" and "merely
     * compressed" are different geometric outcomes: at a = 0 the unit is dead
     * and its local slope is 0, here it is 0.1 and still passes signal. */
    leaky: {
      name: "Leaky ReLU",
      tex: "max(0.1a, a)",
      f: function (x) { return x > 0 ? x : 0.1 * x; },
      df: function (x) { return x > 0 ? 1 : 0.1; },
      kink: true
    },
    gelu: {
      name: "GELU",
      tex: "a·Φ(a)",
      f: function (x) {
        var u = geluU(x), t = Math.tanh(u);
        return 0.5 * x * (1 + t);
      },
      df: function (x) {
        var u = geluU(x), t = Math.tanh(u);
        var du = SQRT_2_OVER_PI * (1 + 3 * GELU_C * x * x);
        return 0.5 * (1 + t) + 0.5 * x * (1 - t * t) * du;
      },
      kink: false
    },
    silu: {
      name: "SiLU",
      tex: "a·σ(a)",
      f: function (x) { return x * sigmoid(x); },
      df: function (x) {
        var s = sigmoid(x);
        return s * (1 + x * (1 - s));
      },
      kink: false
    },
    tanh: {
      name: "tanh",
      tex: "tanh(a)",
      f: function (x) { return Math.tanh(x); },
      df: function (x) {
        var t = Math.tanh(x);
        return 1 - t * t;
      },
      kink: false
    },
    identity: {
      name: "identity",
      tex: "a",
      f: function (x) { return x; },
      df: function () { return 1; },
      kink: false
    }
  };

  function sigmoid(x) {
    /* Split by sign so neither branch overflows. */
    if (x >= 0) return 1 / (1 + Math.exp(-x));
    var e = Math.exp(x);
    return e / (1 + e);
  }

  function actF(name, x) { return ACT[name].f(x); }
  function actDF(name, x) { return ACT[name].df(x); }

  /* ------------------------------------------------------------- loss */

  /* Softmax down each column, with the max subtracted first. Without that the
   * exponentials overflow for logits above about 710 and the page shows NaN. */
  function softmaxCols(Z) {
    var C = Z.length, B = Z[0].length;
    var P = zerosMat(C, B), i, j, mx, s, e;
    for (j = 0; j < B; j += 1) {
      mx = -Infinity;
      for (i = 0; i < C; i += 1) mx = Math.max(mx, Z[i][j]);
      s = 0;
      for (i = 0; i < C; i += 1) {
        e = Math.exp(Z[i][j] - mx);
        P[i][j] = e;
        s += e;
      }
      for (i = 0; i < C; i += 1) P[i][j] /= s;
    }
    return P;
  }

  /* Y is (C x B) one-hot. Returns the mean over the batch. */
  function crossEntropy(P, Y) {
    var C = P.length, B = P[0].length;
    var total = 0, i, j;
    for (j = 0; j < B; j += 1) {
      for (i = 0; i < C; i += 1) {
        if (Y[i][j] > 0) total += -Y[i][j] * Math.log(Math.max(P[i][j], 1e-300));
      }
    }
    return total / B;
  }

  /* dL/dZ for softmax followed by cross-entropy, averaged over the batch.
   * The whole Jacobian collapses to this, which is the point of the lecture. */
  function softmaxCEGrad(P, Y) {
    var C = P.length, B = P[0].length;
    var G = zerosMat(C, B), i, j;
    for (i = 0; i < C; i += 1) {
      for (j = 0; j < B; j += 1) G[i][j] = (P[i][j] - Y[i][j]) / B;
    }
    return G;
  }

  function accuracy(P, Y) {
    var C = P.length, B = P[0].length;
    var hit = 0, i, j, bi, bj, best;
    for (j = 0; j < B; j += 1) {
      bi = 0; best = -Infinity;
      for (i = 0; i < C; i += 1) if (P[i][j] > best) { best = P[i][j]; bi = i; }
      bj = 0;
      for (i = 0; i < C; i += 1) if (Y[i][j] > Y[bj][j]) bj = i;
      if (bi === bj) hit += 1;
    }
    return hit / B;
  }

  /* ------------------------------------------------------------- PRNG */

  /* A seeded xorshift32, so every page and every checker sees the same
   * network. Math.random would make the pages unreproducible and the poster
   * screenshots unrepeatable. */
  function makeRng(seed) {
    var s = seed >>> 0;
    if (s === 0) s = 0x9e3779b9;
    return function () {
      s ^= s << 13; s >>>= 0;
      s ^= s >>> 17;
      s ^= s << 5;  s >>>= 0;
      return s / 4294967296;
    };
  }

  /* --------------------------------------------------------------- MLP */

  /* He initialisation for ReLU (variance 2/fan_in), Xavier otherwise. Both
   * are uniform with the matching variance, which is all the demo needs. */
  function createMLP(sizes, actName, seed) {
    var act = actName || "relu";
    var rng = makeRng(seed === undefined ? 4207 : seed);
    var layers = [], l, fanIn, fanOut, lim, W, b, i, j;

    for (l = 0; l + 1 < sizes.length; l += 1) {
      fanIn = sizes[l];
      fanOut = sizes[l + 1];
      lim = (l + 2 === sizes.length || act === "identity")
        ? Math.sqrt(6 / (fanIn + fanOut))          // Xavier for the readout
        : Math.sqrt(6 / fanIn);                    // He for the hidden layers
      W = zerosMat(fanOut, fanIn);
      for (i = 0; i < fanOut; i += 1) {
        for (j = 0; j < fanIn; j += 1) W[i][j] = (rng() * 2 - 1) * lim;
      }
      b = zeros(fanOut);
      layers.push({ W: W, b: b });
    }

    return { sizes: sizes.slice(), act: act, layers: layers, seed: seed };
  }

  /* X is (n_in x B). Returns everything the page needs to draw the forward
   * pass, including the pre-activation A at every layer. */
  function forward(net, X) {
    var acts = [];            // acts[l] = { A: (sizes[l+1] x B), H: same }
    var H = X;
    var pre = [X];            // pre[0] = X, pre[l+1] = H of layer l
    var l, a, A, Hn, i, j;

    for (l = 0; l < net.layers.length; l += 1) {
      a = net.layers[l];
      A = zerosMat(a.W.length, X[0].length);
      for (i = 0; i < a.W.length; i += 1) {
        for (j = 0; j < X[0].length; j += 1) A[i][j] = a.b[i];
      }
      A = addMat(A, matmul(a.W, H));

      Hn = (l + 1 === net.layers.length)
        ? A                                        // readout is linear
        : mapMat(function (v) { return ACT[net.act].f(v); }, A);

      acts.push({ A: A, H: Hn });
      pre.push(Hn);
      H = Hn;
    }

    var Z = H;
    var P = softmaxCols(Z);
    return { acts: acts, pre: pre, Z: Z, P: P };
  }

  function lossAndAcc(net, X, Y) {
    var f = forward(net, X);
    return {
      loss: crossEntropy(f.P, Y),
      acc: accuracy(f.P, Y),
      P: f.P
    };
  }

  /* Backward. Returns per-layer parameter gradients plus, per layer, the
   * gradient with respect to that layer's INPUT. Those input gradients are
   * what the page draws as the signal flowing backwards.
   *
   *   dA_l = dL/dA_l                  (pre-activation of layer l)
   *   dW_l = dA_l H_{l-1}^T           db_l = dA_l * 1
   *   dH_{l-1} = W_l^T dA_l           dL/d(pre[l])
   *   dA_{l-1} = dH_{l-1} . phi'(A_{l-1})
   *
   * dA starts as p - y because the readout is linear, so dL/dA_{L-1} is just
   * dL/dZ. dIn[l] is dL/d(pre[l]), i.e. the gradient arriving at the input of
   * layer l: dIn[0] is the gradient with respect to X, dIn[L-1] is dL/dH^{L-2}.
   */
  function backward(net, cache, Y) {
    var L = net.layers.length;
    var B = cache.Z[0].length;
    var grads = [], dIn = new Array(L), l, a, dA, dW, db, Hprev, dH, i, j;

    dA = softmaxCEGrad(cache.P, Y);

    for (l = L - 1; l >= 0; l -= 1) {
      a = net.layers[l];
      Hprev = cache.pre[l];
      dW = matmul(dA, transpose(Hprev));
      db = zeros(dA.length);
      for (i = 0; i < dA.length; i += 1) {
        for (j = 0; j < B; j += 1) db[i] += dA[i][j];
      }
      grads[l] = { dW: dW, db: db };

      /* Gradient with respect to this layer's input. Computed for every layer,
       * including the first, because the page draws the signal all the way
       * back to X — that is how you see it actually arrive. */
      dH = matmul(transpose(a.W), dA);
      dIn[l] = dH;

      if (l > 0) {
        dA = zerosMat(dH.length, B);
        for (i = 0; i < dH.length; i += 1) {
          for (j = 0; j < B; j += 1) {
            dA[i][j] = dH[i][j] * ACT[net.act].df(cache.acts[l - 1].A[i][j]);
          }
        }
      }
    }

    /* dZ is the seed the whole pass starts from, kept separately so the page
     * can show "p - y" at the output without recomputing it. */
    return { grads: grads, dIn: dIn, dZ: softmaxCEGrad(cache.P, Y) };
  }

  function snapshot(net) {
    return net.layers.map(function (a) {
      return { W: copyMat(a.W), b: copyVec(a.b) };
    });
  }

  function applyUpdate(net, grads, lr) {
    var l, i, j, a, g;
    for (l = 0; l < net.layers.length; l += 1) {
      a = net.layers[l];
      g = grads[l];
      for (i = 0; i < a.W.length; i += 1) {
        a.b[i] -= lr * g.db[i];
        for (j = 0; j < a.W[i].length; j += 1) a.W[i][j] -= lr * g.dW[i][j];
      }
    }
  }

  /* ------------------------------------------------- finite differences
   *
   * The independent route. This touches only forward(), so it validates
   * backward() rather than agreeing with it by construction. Every page that
   * reports a gradient is checked against this.
   */
  function finiteDiffGrad(net, X, Y, eps) {
    var h = eps === undefined ? 1e-5 : eps;
    var grads = [], l, i, j, orig, plus, minus;

    for (l = 0; l < net.layers.length; l += 1) {
      grads[l] = { dW: zerosMat(net.layers[l].W.length, net.layers[l].W[0].length),
                   db: zeros(net.layers[l].b.length) };
    }

    for (l = 0; l < net.layers.length; l += 1) {
      for (i = 0; i < net.layers[l].W.length; i += 1) {
        for (j = 0; j < net.layers[l].W[i].length; j += 1) {
          orig = net.layers[l].W[i][j];
          net.layers[l].W[i][j] = orig + h;
          plus = lossAndAcc(net, X, Y).loss;
          net.layers[l].W[i][j] = orig - h;
          minus = lossAndAcc(net, X, Y).loss;
          net.layers[l].W[i][j] = orig;
          grads[l].dW[i][j] = (plus - minus) / (2 * h);
        }
      }
      for (i = 0; i < net.layers[l].b.length; i += 1) {
        orig = net.layers[l].b[i];
        net.layers[l].b[i] = orig + h;
        plus = lossAndAcc(net, X, Y).loss;
        net.layers[l].b[i] = orig - h;
        minus = lossAndAcc(net, X, Y).loss;
        net.layers[l].b[i] = orig;
        grads[l].db[i] = (plus - minus) / (2 * h);
      }
    }
    return grads;
  }

  /* Gradient-check metrics.
   *
   * Two of them, because neither alone is honest. A pure relative error blows
   * up on entries whose true gradient is ~0: 0 versus 1e-9 reports as 100%
   * while being meaningless. A pure absolute error hides a wrong value on a
   * large entry. So report the absolute difference over everything, and the
   * relative difference restricted to entries that actually carry signal.
   */
  function gradDiff(A, B) {
    var worst = 0, l, i, j, d;
    for (l = 0; l < A.length; l += 1) {
      for (i = 0; i < A[l].dW.length; i += 1) {
        for (j = 0; j < A[l].dW[i].length; j += 1) {
          d = Math.abs(A[l].dW[i][j] - B[l].dW[i][j]);
          if (d > worst) worst = d;
        }
      }
      for (i = 0; i < A[l].db.length; i += 1) {
        d = Math.abs(A[l].db[i] - B[l].db[i]);
        if (d > worst) worst = d;
      }
    }
    return worst;
  }

  /* Relative difference, but only over entries where at least one side is
   * above the noise floor. The floor is a fraction of the largest gradient in
   * the set, so it scales with the problem instead of being a magic number. */
  function gradDiffRel(A, B) {
    var peak = 0, l, i, j;
    for (l = 0; l < A.length; l += 1) {
      peak = Math.max(peak, maxAbsMat(A[l].dW), vecNorm(A[l].db));
      peak = Math.max(peak, maxAbsMat(B[l].dW), vecNorm(B[l].db));
    }
    var floor = Math.max(1e-9, 1e-6 * peak);
    var worst = 0, d, m, a, b;
    for (l = 0; l < A.length; l += 1) {
      for (i = 0; i < A[l].dW.length; i += 1) {
        for (j = 0; j < A[l].dW[i].length; j += 1) {
          a = A[l].dW[i][j]; b = B[l].dW[i][j];
          m = Math.max(Math.abs(a), Math.abs(b));
          if (m < floor) continue;
          d = Math.abs(a - b) / m;
          if (d > worst) worst = d;
        }
      }
      for (i = 0; i < A[l].db.length; i += 1) {
        a = A[l].db[i]; b = B[l].db[i];
        m = Math.max(Math.abs(a), Math.abs(b));
        if (m < floor) continue;
        d = Math.abs(a - b) / m;
        if (d > worst) worst = d;
      }
    }
    return worst;
  }

  function countParams(net) {
    return net.layers.reduce(function (s, a) {
      return s + a.W.length * a.W[0].length + a.b.length;
    }, 0);
  }

  /* ------------------------------------------------------------- export */

  var API = {
    zeros: zeros,
    zerosMat: zerosMat,
    copyMat: copyMat,
    copyVec: copyVec,
    matmul: matmul,
    matvec: matvec,
    transpose: transpose,
    addVec: addVec,
    subVec: subVec,
    scaleVec: scaleVec,
    dot: dot,
    outer: outer,
    addMat: addMat,
    scaleMat: scaleMat,
    mapMat: mapMat,
    mapVec: mapVec,
    matNorm: matNorm,
    vecNorm: vecNorm,
    maxAbsMat: maxAbsMat,

    ACT: ACT,
    actF: actF,
    actDF: actDF,
    sigmoid: sigmoid,
    softmaxCols: softmaxCols,
    crossEntropy: crossEntropy,
    softmaxCEGrad: softmaxCEGrad,
    accuracy: accuracy,

    makeRng: makeRng,
    createMLP: createMLP,
    forward: forward,
    lossAndAcc: lossAndAcc,
    backward: backward,
    snapshot: snapshot,
    applyUpdate: applyUpdate,
    finiteDiffGrad: finiteDiffGrad,
    gradDiff: gradDiff,
    gradDiffRel: gradDiffRel,
    countParams: countParams
  };

  global.NNMath = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
