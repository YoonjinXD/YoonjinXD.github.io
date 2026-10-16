---
layout: page
title: KAD
description: A distribution-free, unbiased and efficient evaluation metric for audio generation (ICML 2025 Workshop)
importance: 2
category: research
icon: 📏
tags: [Evaluation, Metric, ICML-W 2025]
related_publications: true
---

KAD (Kernel Audio Distance) is an evaluation metric for generative audio models, built as a replacement for Fréchet Audio Distance (FAD). FAD assumes embeddings are Gaussian, is biased at small sample sizes and is slow to compute. KAD instead uses the Maximum Mean Discrepancy with a kernel, so it makes no distribution assumption, is unbiased, converges with far fewer samples and runs much faster on GPU.

The work was presented at the AI Heard That! Workshop at ICML 2025 (Chung et al., 2025).

[Paper](https://arxiv.org/abs/2502.15602) · [Code](https://github.com/YoonjinXD/kadtk)
{: .project-links}
