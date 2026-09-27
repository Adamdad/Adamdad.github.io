---
layout: teaching-demo
course: DSAI4207
course_url: /teaching/dsai4207/#lecture-3
permalink: /teaching/demos/forward-backward-update/
title: "Forward, Backward, Update"
demo_badge: "Lecture 3 · Demo 6"
key_concept: "Training cycles through forward values, backward gradients, and a parameter update θ ← θ − η∇θ."
demo_src: /assets/demos/lecture-3/demo-6/
---

Train a 2→3→3→2 ReLU network on XOR. Each click advances **Forward**, **Backward**, or **Update**; the loss curve records each update.

**What to look for:** hidden-layer values gradually separate the two XOR classes. The network is learning a feature map.
