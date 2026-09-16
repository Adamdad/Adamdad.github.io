---
layout: teaching-demo
permalink: /teaching/demos/computation-graph/
title: "Scalar Computation Graph"
demo_badge: "Demo 8 · Computational graphs & autodiff"
key_concept: "Backpropagation is the chain rule applied mechanically to a computation graph: every edge carries a value forward and a local gradient backward."
demo_src: /assets/demos/nn-demo-08-scalar-graph.html
---

Demo 7 shows a gradient as a matrix heatmap; this demo shows where that number actually comes from, one scalar operation at a time. You build a small graph of `+ − × ÷` nodes from dropdown menus, and every wire in the graph carries a value forward (black, pointing right) and a local derivative backward (blue, pointing left).

Two modes reveal two different lessons. **Chain rule** mode: click any node and every path from the output `e` down to it lights up, while the footer prints the symbolic chain rule, its numeric substitution, and the total — showing that a graph with branches turns the chain rule into a *sum* of path products. **Local gradient** mode: press **Step** to walk the backward pass one sub-step at a time per node — *receive* the upstream gradient, compute the *local* derivative, then *hand off* the product to each parent.

**What to look for:** try the "share" preset, where one input feeds two places — its gradient only becomes final once every path that uses it has handed off its share. This is exactly the gradient-accumulation rule that libraries like PyTorch apply automatically during `.backward()`.
