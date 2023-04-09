---
title: Audio-based Album Cover Generator
categories: projects
tags: [AI, music-image, generation]
math: false
mermaid: false
---

This project is based on 2021 Fall GCT634 at KAIST

github repository: https://github.com/YoonjinXD/Audio_Based_Album_Cover_Generator

***


Making album cover images is a difficult task for many amateur musicians who want to share their own works online. Random image generation could create certain images; however, it is not enough to represent the artists’ music. Our goal is to generate a plausible image that represents the feature of an album’s music. In this paper, we proposed an album cover image generation model considering the belonging tracks’ audio features. Our model is consisting of three different modules, VQ-VAE which learn album cover image distribution, pre-trained ShortChunkCNN which extracts track audio’s features embedding and the mapping layers the audio embedding to the latent space of album images, Audio2ImageNet, we named as. We obtained generated images by training the whole model except for the pre-trained audio feature extractor. Then the result samples and dataset are analyzed in detail, figuring out the relation between album images and audio tracks.


![img]({{site.url}}/images/2021-01-24-Audio-Based-Album-Cover-Generator/model_figure.png)

