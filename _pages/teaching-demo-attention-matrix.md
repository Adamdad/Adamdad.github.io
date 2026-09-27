---
layout: teaching-demo
permalink: /teaching/demos/self-attention-matrix/
title: "Self-Attention Matrix"
demo_badge: "Lecture 4 · Demo 5 · Self-attention"
key_concept: "Every token acts as a reader: row-wise softmax turns its scores into weights over source tokens, and those weights mix the value vectors."
demo_src: /assets/demos/seq-demo-05-attention-matrix.html
demo_height: 650
---

Self-attention repeats the same lookup for every token. The center panel places readers on rows and source tokens on columns; each row moves through **match**, **scale**, **normalize**, and **gather** to produce one output in the right panel.

Click **Next reader** or choose a token under **Reader** to focus on a different row. Click a stage to inspect the calculation, then drag a matrix cell up or down to change that reader's score.

**What to look for:** after normalization, each reader's weights add up to one. Editing a cell changes its own row's distribution and output mixture, while the other readers' rows stay independent.
