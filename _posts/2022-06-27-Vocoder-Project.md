---
title: Mimicking Vocal Tracks by Implementing and Applying Vocoder Effect
categories: projects
tags: [DSP]
math: false
mermaid: false
---

*Spring 2022 GCT535 Final Project*, Yoonjin Chung, Junwon Lee

Demo page: [https://yoonjinxd.github.io/vocoder_demo](https://yoonjinxd.github.io/vocoder_demo)

***

Daftpunk, Zedd, Stevie Wonder와 같은 보컬 트랙에 등장하는 보코더 효과를 파이썬으로 재현해보자!

- band-pass 필터와 RMS 필터를 통해 클래식한 channel vocoder를 구현
- 조절 가능한 매개변수들을 구현하고 비교(e.g. F0, Number of Frequency Bands, Frequency Scale, Random Noising, Formant Shifting and Beta between modulator and carrier)
- 결과 소리를 개선하기 위해 compressor와 expander 구현

이렇게 구현한 수제(?) 보코더와 매개변수를 사용하여 타겟 아티스트들을 따라해보고, 또 다양한 유형의 carrier를 적용해보며 이것저것 흥미로운 결과들을 만들어보았다.
재밌었던 플젝이지만... ㅎㅎ 역시 보코더는 밖에서 사드세요!


<br>


<img src="{{site.url}}/images/2022-06-27-Vocoder-Project/vocoder.png">

*Figure.1 Implementation of Vocoder*

<br>


<img src="{{site.url}}/images/2022-06-27-Vocoder-Project/compare_stft.png">

*Figure.2 Comparison between original STFT and vocoded STFT*