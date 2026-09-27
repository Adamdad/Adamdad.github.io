---
layout: single
permalink: /teaching/dsai4207/
title: "DSAI4207 · Introduction to Large Language Model"
excerpt: "Interactive visualizations of the core ideas behind large language models."
author_profile: false
hide_title: true
---

<div class="teaching-page">

  <p class="demo-page__back"><a href="{{ '/teaching/' | relative_url }}">&larr; All courses</a></p>

  <header class="page-header">
    <h1>DSAI4207 · Introduction to Large Language Model</h1>
    <p>Explore the ideas and techniques behind large language models through interactive visualizations.</p>
  </header>

  <h2 id="lecture-3">Lecture 3 · Neural Network Foundations</h2>

  <div class="demo-gallery">

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/teaching/demos/scalar-accumulation/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-3/demo-1.png' | relative_url }}" alt="Scalar accumulation demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 1</span>
        <h3 class="demo-card__title">Scalar Accumulation</h3>
        <p class="demo-card__desc">Build <code>a = w₁x₁ + w₂x₂ + b</code> term by term and see the same result geometrically.</p>
        <a class="demo-card__cta" href="{{ '/teaching/demos/scalar-accumulation/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/teaching/demos/activation-functions/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-3/demo-2.png' | relative_url }}" alt="Scalar activation demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 2</span>
        <h3 class="demo-card__title">Scalar Activation</h3>
        <p class="demo-card__desc">Switch activations to see how one weighted sum <code>z</code> becomes different outputs <code>φ(z)</code>.</p>
        <a class="demo-card__cta" href="{{ '/teaching/demos/activation-functions/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/teaching/demos/linear-map-geometry/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-3/demo-3.png' | relative_url }}" alt="Linear map geometry demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 3</span>
        <h3 class="demo-card__title">What a Linear Map Changes</h3>
        <p class="demo-card__desc">Watch <code>W</code> reshape a grid and point cloud; singular axes show where it stretches most.</p>
        <a class="demo-card__cta" href="{{ '/teaching/demos/linear-map-geometry/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/teaching/demos/feature-map-lifting/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-3/demo-4.png' | relative_url }}" alt="Feature map lifting demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 4</span>
        <h3 class="demo-card__title">A Feature Map Makes XOR Linear</h3>
        <p class="demo-card__desc">Add the feature <code>x₁x₂</code> to lift XOR into 3D, where a plane separates all four points.</p>
        <a class="demo-card__cta" href="{{ '/teaching/demos/feature-map-lifting/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/teaching/demos/computation-graph/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-3/demo-5.png' | relative_url }}" alt="Scalar computation graph demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 5</span>
        <h3 class="demo-card__title">Scalar Computation Graph</h3>
        <p class="demo-card__desc">Build a scalar graph and trace values forward, then gradients backward through the chain rule.</p>
        <a class="demo-card__cta" href="{{ '/teaching/demos/computation-graph/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/teaching/demos/forward-backward-update/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-3/demo-6.png' | relative_url }}" alt="Forward backward update demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 6</span>
        <h3 class="demo-card__title">Forward, Backward, Update</h3>
        <p class="demo-card__desc">Train an XOR network one phase at a time: forward values, backward gradients, parameter update.</p>
        <a class="demo-card__cta" href="{{ '/teaching/demos/forward-backward-update/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

  </div>

  <h2 id="lecture-4">Lecture 4 · Self-Attention</h2>

  <div class="demo-gallery">

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/teaching/demos/sequence-convolution/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-4/demo-1.png' | relative_url }}" alt="Sliding-window sequence convolution demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 1</span>
        <h3 class="demo-card__title">Sequence Convolution</h3>
        <p class="demo-card__desc">Slide one kernel across a sequence to see local context and shared weights build each output.</p>
        <a class="demo-card__cta" href="{{ '/teaching/demos/sequence-convolution/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/teaching/demos/backpropagation-through-time/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-4/demo-3.png' | relative_url }}" alt="Backpropagation through time demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 3</span>
        <h3 class="demo-card__title">Backpropagation Through Time</h3>
        <p class="demo-card__desc">Unroll an RNN to trace states forward and gradients back to shared parameters.</p>
        <a class="demo-card__cta" href="{{ '/teaching/demos/backpropagation-through-time/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/teaching/demos/self-attention-matrix/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-4/demo-5.png' | relative_url }}" alt="Self-attention matrix demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 5</span>
        <h3 class="demo-card__title">Self-Attention Matrix</h3>
        <p class="demo-card__desc">See each token's scores become a normalized row of weights that mixes source values.</p>
        <a class="demo-card__cta" href="{{ '/teaching/demos/self-attention-matrix/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/teaching/demos/multi-head-attention/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-4/demo-7.png' | relative_url }}" alt="Multi-head attention demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 7</span>
        <h3 class="demo-card__title">Multi-Head Attention</h3>
        <p class="demo-card__desc">Compare parallel attention heads and see how their different outputs combine.</p>
        <a class="demo-card__cta" href="{{ '/teaching/demos/multi-head-attention/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

  </div>

  <h2 id="lecture-5">Lecture 5 · LLM Architecture</h2>

  <div class="demo-gallery">

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/assets/demos/lecture-5/demo-0/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-5/demo-0.png' | relative_url }}" alt="Absolute position encoding demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 0</span>
        <h3 class="demo-card__title">Absolute Position Encoding</h3>
        <p class="demo-card__desc">Explore how sinusoidal signals add position to token representations.</p>
        <a class="demo-card__cta" href="{{ '/assets/demos/lecture-5/demo-0/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/assets/demos/lecture-5/demo-1/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-5/demo-1.png' | relative_url }}" alt="Rotary position embedding demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 1</span>
        <h3 class="demo-card__title">Rotary Position Embedding</h3>
        <p class="demo-card__desc">Rotate query and key vectors to encode relative position.</p>
        <a class="demo-card__cta" href="{{ '/assets/demos/lecture-5/demo-1/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/assets/demos/lecture-5/demo-2/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-5/demo-2.png' | relative_url }}" alt="Pre-Norm and Post-Norm demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 2</span>
        <h3 class="demo-card__title">Pre-Norm vs Post-Norm</h3>
        <p class="demo-card__desc">Move LayerNorm to compare the two residual-block layouts.</p>
        <a class="demo-card__cta" href="{{ '/assets/demos/lecture-5/demo-2/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

    <article class="demo-card">
      <a class="demo-card__thumb" href="{{ '/assets/demos/lecture-5/demo-3/' | relative_url }}">
        <img src="{{ '/images/teaching/lecture-5/demo-3.png' | relative_url }}" alt="Normalization methods demo preview" loading="lazy">
        <span class="demo-card__play">▶ Interactive</span>
      </a>
      <div class="demo-card__body">
        <span class="demo-card__badge">Demo 3</span>
        <h3 class="demo-card__title">LayerNorm, BatchNorm &amp; GroupNorm</h3>
        <p class="demo-card__desc">Compare which values each normalization method groups together.</p>
        <a class="demo-card__cta" href="{{ '/assets/demos/lecture-5/demo-3/' | relative_url }}">Open Demo →</a>
      </div>
    </article>

  </div>

</div>
