---
title: "Diffusion Probabilistic Model Made Slim"
collection: publications
permalink: /publications/2023_cvpr_diffusionmadeslim
date: 2023-4-8
citation:  <u>Xingyi Yang</u>, Daquan Zhou, Jiashi Feng, Xinchao Wang
venue: 'Conference on Computer Vision and Pattern Recognition <b>(CVPR)</b>'
header:
  teaser: 'slim.jpg'
---

Despite the visually-pleasing results achieved, the massive computational cost has been a long-standing flaw for diffusion probabilistic models~(DPMs), which, in turn, greatly limits their applications on resource-limited platforms.  Prior methods towards efficient DPM, however, have largely focused on accelerating the testing yet overlooked their huge complexity and size.
In this paper, we make a dedicated attempt to lighten DPM while striving to preserve its favourable performance.  We start by training a small-sized latent diffusion model~(LDM) from scratch but observe a significant fidelity drop in the synthetic images.
Through a thorough assessment, we find that DPM is intrinsically biased against high-frequency generation, and learns to recover different frequency components at different time-steps. These properties make compact networks unable to represent frequency dynamics with accurate high-frequency estimation. Towards this end, we introduce a customized design for slim DPM, which we term as Spectral Diffusion~(SD), for lightweight image synthesis. SD incorporates wavelet gating in its architecture to enable frequency dynamic feature extraction at every reverse steps, and conducts spectrum-aware distillation to promote high-frequency recovery by inverse weighting the objective based on spectrum magnitudes . Experimental results demonstrate that, SD achieves 8-18x computational complexity reduction as compared to the latent diffusion models on a series of conditional and unconditional image generation tasks while retaining competitive image fidelity. 

[[arxiv](https://arxiv.org/abs/2211.17106)] 
