---
layout: teaching-demo
permalink: /teaching/demos/sequence-convolution/
title: "Sequence Convolution"
demo_badge: "Lecture 4 · Demo 1 · Sequence convolution"
key_concept: "A one-dimensional convolution reuses the same local kernel at every sequence position: sₜ = b + Σₗ K⁽ˡ⁾xₜ₋ₗ, then hₜ = φ(sₜ)."
demo_src: /assets/demos/seq-demo-01-convolution.html
demo_height: 650
---

This demo follows a three-value window as it moves across a six-value sequence. The same three kernel weights multiply the values under the window at every position; their products and a bias form a sum, which can then pass through a `tanh` activation.

Drag the **window** slider or the bracket in the left panel to change the position. Click **Next term** to add one product at a time, and switch **apply activation** off to compare the raw sum with the activated output.

**What to look for:** the kernel stays fixed while the input window moves. Each output uses nearby values and the same learned rule, regardless of where the window sits.
