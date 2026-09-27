---
layout: teaching-demo
permalink: /teaching/demos/backpropagation-through-time/
title: "Backpropagation Through Time"
demo_badge: "Lecture 4 · Demo 3 · Recurrent networks"
key_concept: "Unrolling an RNN reveals one computation graph: states move forward, gradients travel backward, and each time step contributes to the gradient of shared parameters."
demo_src: /assets/demos/seq-demo-03-bptt.html
demo_height: 650
---

An RNN applies the same parameters at each time step. This demo unfolds those repeated steps into a graph so you can see how the forward states are computed and how backpropagation through time (BPTT) returns loss gradients along the same links.

Click **Next** to walk through **forward**, **backward**, and **accumulate**, or choose a phase directly. Change **sequence length** to compare short and longer chains; turn on **numbers** to see the values behind the bars.

**What to look for:** at each backward step, the gradient from later states passes through a local gate before it joins the current loss gradient. The final panel adds every time step's contribution onto the same shared parameter.
