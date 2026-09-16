---
layout: teaching-demo
permalink: /teaching/demos/feature-map-lifting/
title: "A Feature Map Makes XOR Linear"
demo_badge: "Demo 4 · Feature maps"
key_concept: "XOR cannot be separated by one line in 2D, but lifting the points with ψ(x) = (x₁, x₂, x₁x₂) makes them separable by a single plane in 3D."
demo_src: /assets/demos/nn-demo-06-lifting.html
---

The four XOR corners cannot be split into their two classes by any single straight line — the best a line can do is separate 3 of the 4 points. This demo shows the fix: add one extra, nonlinear feature, `x₁x₂`, and separate the lifted points with a plane instead of a line.

The left panel shows the original 2D square with the best possible line (3/4 correct); the right panel shows the same four points lifted into 3D `(x₁, x₂, x₁x₂)` space, orbitable by drag, with a separating plane that gets all 4 correct. Press **Lift** to animate the points rising and the plane fading in, and watch the boundary in the left panel morph from a single line into a cross (`x₁ = ½` and `x₂ = ½`) — exactly the shape one line can never draw.

**What to look for:** the score badge flips from `3/4` to `4/4` the moment the extra feature becomes available — one new coordinate is enough to make an "impossible" classification problem solvable by a flat plane.
