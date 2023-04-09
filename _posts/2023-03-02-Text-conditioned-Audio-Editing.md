---
title: Text-conditioned Audio Editing
categories: projects
tags: [AI, audio-text, generation]
math: false
mermaid: false
---

**"Text-conditioned Audio Editing"**, *2022 Fall AI605 Final Project*
Yoonjin Chung, Junwon Lee

[github](https://github.com/YoonjinXD/Text-conditioned-Audio-Editing)
[report](https://github.com/YoonjinXD/Text-conditioned-Audio-Editing/blob/master/AI605_Capstone_Report.pdf)

***

# Introduction
Since finding specific data that satisfy various conditions in the real world, generating new data by editing samples has been a goal to achieve and a challenging task as well. In this study, we address the text-conditioned audio editing problem for the first time, to the best of our knowledge, by fine-tuning and interpolating text embeddings of audio captions. Our task aims to generate target sounds that are slightly modified from existing audio referring to given caption conditions.

<img src="{{site.url}}/images/2023-03-02-Text-conditioned-Audio-Editing/figure_1.png" width="70%">

- We address the text-conditioned audio editing task, which has rarely been studied.
- We optimize the given text embedding and fine-tune the discrete diffusion model to generate semantically edited sound.
- We provide the qualitative analysis on caption prompts and interpolation intensity by comparing our results from various types of prompts.


# Related Works
**Diffsound(Yang et al., 2022)** is the first model that solves the text-to-audio generation task directly. The proposed a discrete-diffusion-based audio generative model conditioned on a text prompt. The model consists of a pretrained CLIP text encoder, a discrete diffusion model, a Vector Quantized Variational Autoencoder(VQ-VAE) and a vocoder. After the text prompt is encoded as a feature, the diffusion decoder transfers the text feature to a sequence of quantized tokens which is passed to the pretrained VQ-VAE decoder to reconstruct a mel-spectrogram. Finally, the vocoder generates a waveform from the transferred mel-spectrogram.

**Imagic(Kawar et al., 2022)** is the only model,  that tackles the image editing task conditioned on a text prompt. Given a single target text prompt and image pair, the model is fine-tuned in several steps. As the given prompt does not describe the original image but the change to be applied, only fine-tune the text encoder first on text-image pair while freezing others, to get optimized embedding which is distinct from the target embedding  acquired from original text encoder in Imagen.To get the edited image, they finally input the embedding which is a linear interpolation between the  target and optimized embeddings. The authors showed the interpolation is semantically valid in a qualitative manner by providing examples corresponding to several editing categories.


# Proposed Method
## Architecture
We exploit pretrained Diffsound model as our base framework as it is the only text-to-audio model which is open-source. As we finetune only some part of Diffsound initializing it with provided pretrained weights, the overall architecture is identical. See Fig 1 to see a simply summarized diagram.
Among the components, we do not fintune VQ-VAE, the decoder part that generates mel spectrogram from a sequence of quantized mel spectrogram tokens, and MelGAN, the vocoder, which is both trained on Audioset respectively. The two are not involved in processing text caption but in generating the audio sound. In this paper, we focus on CLIP which encodes the text prompt, and discrete diffusion model which generates a quantized token sequence conditioned on the text embedding. 


<img src="{{site.url}}/images/2023-03-02-Text-conditioned-Audio-Editing/figure_2.png" width="70%">


## Methods
We follow the proposed method suggested in Imagic (Kawar et al., 2022) to achieve our goal. Given the original input audio, we aim to output the edited audio through the semantics included in the text prompt. Note that the prompt is not a caption that describes the original audio but the desirable modified version of it. Let the text representation which encodes this prompt be a target embedding. As there is no way for the text-to-audio model to generate audio similar to the original one, the key idea is to find an optimized embedding that enables it when passed through the generative layers.


**The brief procedure is the following:**
1. We finetune CLIP text embedding layer to acquire an optimized embedding vector near the target text embedding. The ideal optimized text embedding, as an input of the audio generative model, may nearly reconstruct the original audio.
2. We finetune the discrete diffusion model, with optimized embedding representation as input, to generate the original audio better.
3. Compute the linear interpolation of the target embedding and the optimized embedding and input to the generation part. Proper interpolation enables to find a representation that maintains balance between audio fidelity and text prompt alignment. which is described visually in Fig 2.

# Result
We have verified that substitution in sound source (i.e. who/what is making sound, which kind of sound has occurred) is successful while preserving the structural feature of the audio.

<img src="{{site.url}}/images/2023-03-02-Text-conditioned-Audio-Editing/result.png" width="70%">

<table>
    <tr>
        <th></th>
        <th>Original</th>
        <th>Editied</th>
    </tr>
    <tr>
        <td>(Original)A car horn sounds loudly and then fades away<br><tb>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br>(Edited)A bell sounds loudly and then fades away</td>
        <td><audio src="{{site.url}}/images/2023-03-02-Text-conditioned-Audio-Editing/Y2KCoO8C8R8.wav" controls></audio></td>
        <td><audio src="2023-03-02-Text-conditioned-Audio-Editing/Y2KCoO8C8R8_G_0.6.wav" controls></audio></td>
    </tr>
    <tr>
        <td>(Original)A woman gives a speech<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br>(Edited)A man gives a speech</td>
        <td><audio src="2023-03-02-Text-conditioned-Audio-Editing/1wOcbw5Rg84.wav" controls></audio></td>
        <td><audio src="2023-03-02-Text-conditioned-Audio-Editing/1wOcbw5Rg84_G_0.5.wav" controls></audio></td>
    </tr>
</table>


As you can see from the given samples, it is able to edit  the horn to the bell sound while maintaining a structure in which the bell rings once loudly and then fades away as same as the original audio.

# Limitations
Some edits are applied very subtly, so that they do not align well with the target text. Since the audio generative diffusion model that we used is only trained with ontological tags from Audioset, it seems that cannot capture complex semantics such as temporal information(e.g. after, then) or spatial information(e.g. foreground, background) in the audio domain.

# Conclusion & Future Work
In this study, we propose the first text-conditioned audio editing method based on the pre-trained generative diffusion model. With our method, an existing audio and caption pair describing the desired editing result are optimized together to generate the edited sounds while preserving the remaining factors in the original audio. From the results analysis, we figured out that finding proper interpolation intervals and fine-tuning the diffusion model play important role in our task. We know that detailed audio captions must be trained in order to capture the temporal and spatial semantics from prompts, however, the size of the model and dataset are too large to train on time with our resources. Thus, our further work may focus on training detailed audio captions properly, so that the model can also generate the complex  prompts while enhancing the fidelity of input audio and identity preservation. 




