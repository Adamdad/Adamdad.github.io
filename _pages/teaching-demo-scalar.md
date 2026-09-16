---
layout: teaching-demo
permalink: /teaching/demos/scalar-accumulation/
title: "Scalar Accumulation"
demo_badge: "Demo 1 · Neurons & the forward pass"
key_concept: "What a single neuron computes: a weighted sum plus a bias, a = w₁x₁ + w₂x₂ + b."
demo_src: /assets/demos/nn-demo-02-scalar.html
---

This demo breaks one artificial neuron's forward computation into its atomic pieces. Two sliders control the weights `w₁, w₂` and one controls the bias `b`; a fixed input `x = (2, −1)` is shown alongside them.

Click **Step through** to watch the running total build up term by term — `w₁x₁`, then `w₂x₂`, then `+ b` — with red bars pushing the total right (positive) and blue bars pushing it left (negative). The panel on the right shows the same computation geometrically, as the projection of `w` onto `x`.

**What to look for:** dragging any weight changes both a bar's length in the accumulation view *and* the length/direction of `w` in the geometric view — the two panels are two readings of the exact same number.
