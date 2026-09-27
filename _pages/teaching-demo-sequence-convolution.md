---
layout: teaching-demo
course: DSAI4207
course_url: /teaching/dsai4207/#lecture-4
permalink: /teaching/demos/sequence-convolution/
title: "Sequence Convolution"
demo_badge: "Lecture 4 · Demo 1"
key_concept: "One local kernel is reused across sequence positions: sₜ = b + Σₗ K⁽ˡ⁾xₜ₋ₗ, then hₜ = φ(sₜ)."
demo_src: /assets/demos/seq-demo-01-convolution.html
demo_height: 650
---

Move the three-value window across six inputs. **Next term** reveals each product and the output; toggle **apply activation** to compare the raw sum with `tanh`.

**What to look for:** the window moves, but the kernel weights stay fixed. The same local rule creates each output.
