---
layout: teaching-demo
course: DSAI4207
course_url: /teaching/dsai4207/#lecture-3
permalink: /teaching/demos/computation-graph/
title: "Scalar Computation Graph"
demo_badge: "Lecture 3 · Demo 5"
key_concept: "Backpropagation applies the chain rule locally and adds gradients from shared paths."
demo_src: /assets/demos/lecture-3/demo-5/
---

Build a graph of `+ − × ÷` nodes. Values move forward; gradients move back. In **Chain rule** mode, select a node to see every path and their summed products. In **Local gradient** mode, press **Step** to receive, compute, and pass each gradient.

**What to look for:** the **share** preset shows that an input’s gradient is complete only after both uses contribute.
