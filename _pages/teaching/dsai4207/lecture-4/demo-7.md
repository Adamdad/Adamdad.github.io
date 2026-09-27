---
layout: teaching-demo
course: DSAI4207
course_url: /teaching/dsai4207/#lecture-4
permalink: /teaching/demos/multi-head-attention/
title: "Multi-Head Attention"
demo_badge: "Lecture 4 · Demo 7"
key_concept: "Attention heads can read the same tokens with different weights and contribute separate outputs."
demo_src: /assets/demos/lecture-4/demo-7/
demo_height: 650
---

Add heads one at a time, select a **Reader**, and inspect a head’s weight matrix. The final panel combines active outputs; this toy uses their mean in place of a learned output projection `Wᴼ`.

**What to look for:** each head follows a different pattern, so adding a head changes the combined result.
