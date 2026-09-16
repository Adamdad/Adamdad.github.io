---
layout: teaching-demo
permalink: /teaching/demos/activation-functions/
title: "Scalar Activation"
demo_badge: "Demo 2 · Activation functions"
key_concept: "A neuron's output is not the raw sum z — it is a = φ(z), the sum passed through a nonlinear activation φ."
demo_src: /assets/demos/nn-demo-02.5-activation.html
---

This demo extends the scalar-accumulation walk (Demo 1) with one more row: the pre-activation `z = w₁x₁ + w₂x₂ + b` is passed through a switchable activation function `φ` to produce the neuron's actual output `a = φ(z)`.

A selector in the header lets you flip between six activations (e.g. identity, sigmoid, tanh, ReLU, and others); the activation-map panel plots `φ` as a curve and marks exactly where the current `z` sits on it, while a grey hairline shows the displacement `φ` produces — how far `a` ends up from `z`.

**What to look for:** drag the weight sliders to change `z`, then switch activations to see how the same `z` can map to very different outputs `a` — this is the difference between a linear unit and a nonlinear one.
