---
layout: teaching-demo
permalink: /teaching/demos/forward-backward-update/
title: "Forward, Backward, Update"
demo_badge: "Demo 7 · Training a network with backpropagation"
key_concept: "One training step is three phases: run the network forward, propagate gradients backward, then update every parameter with θ ← θ − η∇θ."
demo_src: /assets/demos/nn-demo-07-backprop.html
---

This demo runs the full training loop on a small 2→3→3→2 multilayer network (ReLU, 29 parameters) learning to classify the four XOR corners — the same problem Demos 4 and 6 introduce. One click advances exactly one phase.

**Forward** lights up the activation values layer by layer with a travelling dot. **Backward** draws the gradient bands `∂ℒ/∂H², ∂ℒ/∂H¹, ∂ℒ/∂X` flowing the opposite way, with a bar under each parameter block showing the size of its gradient. **Update** applies `θ ← θ − η∇θ` and adds a new point to the loss curve. Click through repeatedly (or let it auto-run) and the network reaches 4/4 correct in about 60 steps.

**What to look for:** watch the hidden-layer columns `H¹` and `H²` — early on they mix the two classes together, but after enough update steps they separate cleanly into red and blue columns. That separation is the network *discovering* a feature map like the one Demo 6 hands over by hand.
