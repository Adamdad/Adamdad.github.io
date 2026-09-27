---
layout: teaching-demo
permalink: /teaching/demos/multi-head-attention/
title: "Multi-Head Attention"
demo_badge: "Lecture 4 · Demo 7 · Multi-head attention"
key_concept: "Multiple attention heads can assign different weights to the same tokens; their separate outputs are concatenated and recombined by Wᴼ."
demo_src: /assets/demos/seq-demo-07-multi-head.html
demo_height: 650
---

One attention head gives a reader one way to weigh the source tokens. This demo puts up to four heads side by side, shows the full weight matrix for the selected head, and combines their output vectors into a final result.

Click **Add a head** to reveal the heads one at a time, or choose a count under **Heads**. Select another **Reader** token, click a head to inspect its matrix, and trace a source token across the panels.

**What to look for:** the heads assign different weights to the same reader and produce different output vectors. The combined output changes as you add heads, because each head contributes its own view.
