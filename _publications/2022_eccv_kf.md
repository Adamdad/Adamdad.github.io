---
title: "Factorizing Knowledge in Neural Networks"
collection: publications
permalink: /publications/2022_eccv_kf
date: 2022-7-11
citation:  <u>Xingyi Yang</u>, Jingwen Ye, Xinchao Wang
venue: 'European Conference on Computer Vision <b>(ECCV)</b>'
header:
  teaser: "KnowledgeFactior.png"
---

In this paper, we explore a novel and ambitious knowledge-transfer task, termed Knowledge Factorization~(KF). The core idea of KF lies in the modularization and assemblability of knowledge: given a pretrained network model as input, KF aims to decompose it into several factor networks, each of which handles only a dedicated task and maintains task-specific knowledge factorized from the source network. Such factor networks are task-wise disentangled and can be directly assembled, without any fine-tuning, to produce the more competent combined-task networks.  In other words, the factor networks serve as Lego-brick-like building blocks, allowing us to construct customized networks in a plug-and-play manner.  Specifically, each factor network comprises two modules, a common-knowledge module that is task-agnostic and shared by all factor networks, alongside with a task-specific module dedicated to the factor network itself. We introduce an information-theoretic objective, InfoMax-Bottleneck~(IMB), to carry out KF by optimizing the mutual information between the learned representations and input. Experiments across various benchmarks demonstrate that, the derived factor networks yield gratifying performances on not only the dedicated tasks but also disentanglement, while enjoying much better interpretability and modularity. Moreover, the learned common-knowledge representations give rise to impressive results on transfer learning. Our code is available at https://github.com/Adamdad/KnowledgeFactor.

[[paper](https://arxiv.org/abs/2207.03337)]  [[code](https://github.com/Adamdad/KnowledgeFactor)] [[poster](https://drive.google.com/file/d/1EhwjnlxXOuWHXbkX5OHPTl2fXGkaTREl/view)] [[video](https://drive.google.com/file/d/1pGdn1Vy0R4WvK0xSsPCrhXi3OukFXLUd/view?usp=sharing)]
