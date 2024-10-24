---
title: "Distribution Shift Inversion for Out-of-Distribution Generalization"
collection: publications
permalink: /publications/2023_cvpr_domain_inversion
date: 2023-4-7
citation:  Runpeng Yu, Songhua Liu, <u>Xingyi Yang</u>, Xinchao Wang
venue: 'Conference on Computer Vision and Pattern Recognition <b>(CVPR)</b>'
header:
  teaser: 'diffusioninversion.jpg'
---

Machine learning society has witnessed the emergence of a myriad of Out-of-Distribution (OoD) algorithms, which address the distribution shift between the training and the testing distribution by searching for a unified predictor or invariant feature representation. However, the task of directly mitigating the distribution shift in the unseen testing set is rarely investigated, due to the unavailability of the testing distribution during the training phase and thus the impossibility of training a distribution translator mapping between the training and testing distribution.  In this paper, we explore how to bypass the requirement of testing distribution for distribution translator training and make the distribution translation useful for OoD prediction.  We propose a portable Distribution Shift Inversion (DSI) algorithm, in which, before being fed into the prediction model, the OoD testing samples are first linearly combined with additional Gaussian noise and then transferred back towards the training distribution using a diffusion model trained only on the source distribution. Theoretical analysis reveals the feasibility of our method. Experimental results, on both multiple-domain generalization datasets and single-domain generalization datasets, show that our method provides a general performance gain when plugged into a wide range of commonly used OoD algorithms. Our code is available at https://github.com/yu-rp/Distribution-Shift-Iverson.