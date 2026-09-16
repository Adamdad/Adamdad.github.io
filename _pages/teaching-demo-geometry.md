---
layout: teaching-demo
permalink: /teaching/demos/linear-map-geometry/
title: "What a Linear Map Changes"
demo_badge: "Demo 3 · Linear algebra as geometry"
key_concept: "A weight matrix W is a geometric transformation — it stretches, rotates, and reshapes the space the data lives in."
demo_src: /assets/demos/nn-demo-04-geometry.html
---

Where Demos 2 and 2.5 ask "what is the number?", this demo asks "what does the map do to the *space*?" A 2×2 matrix `W` is applied to a grid, a unit circle, and a two-class point cloud, and the input and output spaces are shown side by side.

The output panel keeps a faded "ghost" of the untouched grid and draws a hairline from each point's original position to where it lands after `W`, so the displacement is something you can see rather than infer. A separate panel draws the singular axes `σ₁u₁` and `σ₂u₂` at their true lengths, and histograms show how the data's spread along the dominant axis changes before and after.

**What to look for:** switch on the animated morph to watch the grid shear and the circle stretch into an ellipse continuously — the growing length of the displacement hairlines *is* the linear map, and it grows fastest along the direction `W` stretches most.
