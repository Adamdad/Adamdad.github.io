/*
 * DSAI4207 · shared widget behaviour
 *
 * Formatting, sign conventions and the step player live here so every page
 * animates and reads identically. A page supplies its own data and layout;
 * it should not reimplement these.
 */

(function (global) {
  "use strict";

  /* Full-scale value for the signed bars. Kept global so a bar of a given
   * magnitude looks the same on every page — comparability is part of the
   * design language, not a per-page choice. */
  var VMAX = 6;

  var MINUS = "\u2212"; // U+2212, never a hyphen

  /* 1.5 -> "1.5"   -1.5 -> "−1.5" */
  function fmt(value, digits) {
    var d = digits === undefined ? 1 : digits;
    return value.toFixed(d).replace("-", MINUS);
  }

  function signClass(value) {
    if (value > 1e-4) return "pos";
    if (value < -1e-4) return "neg";
    return "zero";
  }

  function paintBar(fill, value, max) {
    var scale = max === undefined ? VMAX : max;
    var frac = Math.min(Math.abs(value) / scale, 1) * 50;
    if (value >= 0) {
      fill.style.left = "50%";
      fill.style.width = frac + "%";
    } else {
      fill.style.left = (50 - frac) + "%";
      fill.style.width = frac + "%";
    }
    fill.classList.toggle("neg", value < 0);
  }

  function paintValue(el, value, digits) {
    el.textContent = fmt(value, digits);
    el.classList.remove("pos", "neg", "zero");
    el.classList.add(signClass(value));
  }

  function paintBig(el, value, digits) {
    paintValue(el, value, digits);
  }

  function setHidden(el, hidden) {
    el.classList.toggle("is-hidden", Boolean(hidden));
  }

  function pulse(el) {
    el.classList.remove("is-pulsing");
    void el.offsetWidth; // force reflow so the animation can replay
    el.classList.add("is-pulsing");
  }

  /* ------------------------------------------------------------- stepper
   *
   * A single ordered sequence of reveal steps, shared by every page.
   *   steps      array of step indices handed to onStep, in order
   *   stepMs     dwell time per step
   *   startDelay delay before the first step
   *   onStep(i)  apply state i (1-based, matching the steps array)
   *   onDone()   called once the sequence finishes
   *
   * play() restarts from step 0; stop() cancels.
   */
  function createStepper(options) {
    var steps = options.steps || [];
    var stepMs = options.stepMs || 620;
    var startDelay = options.startDelay === undefined ? 260 : options.startDelay;
    var timer = null;

    function stop() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }

    function play() {
      stop();
      if (options.onStep) options.onStep(0);
      var i = 0;
      function tick() {
        if (i >= steps.length) {
          timer = null;
          if (options.onDone) options.onDone();
          return;
        }
        if (options.onStep) options.onStep(steps[i]);
        i += 1;
        timer = setTimeout(tick, stepMs);
      }
      timer = setTimeout(tick, startDelay);
    }

    return {
      play: play,
      stop: stop,
      isPlaying: function () { return timer !== null; }
    };
  }

  global.WidgetBase = {
    VMAX: VMAX,
    MINUS: MINUS,
    fmt: fmt,
    signClass: signClass,
    paintBar: paintBar,
    paintValue: paintValue,
    paintBig: paintBig,
    setHidden: setHidden,
    pulse: pulse,
    createStepper: createStepper
  };
})(window);
