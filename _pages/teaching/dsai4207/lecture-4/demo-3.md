---
layout: teaching-demo
course: DSAI4207
course_url: /teaching/dsai4207/#lecture-4
permalink: /teaching/demos/backpropagation-through-time/
title: "Backpropagation Through Time"
demo_badge: "Lecture 4 · Demo 3"
key_concept: "Unrolled RNN states flow forward; gradients flow back and add at shared parameters."
demo_src: /assets/demos/lecture-4/demo-3/
demo_height: 650
---

Use **Next** to step through **forward**, **backward**, and **accumulate**. Change **sequence length** or turn on **numbers** to inspect the chain.

**What to look for:** each state combines a local loss gradient with a gated gradient from later steps. The final panel sums contributions to shared `θ`.
