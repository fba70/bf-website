---
title: "Generative AI Orchestration"
description: "A follow-up to \"Video content creation prosumer platform\" on orchestrating generative AI pipelines."
date: "2024-07-01"
tags: ["generative-ai", "orchestration", "content"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/pulse/generative-ai-orchestration-boris-fedotov-ph-d--7889f).

I have written a short article ["Video content creation prosumer platform"](https://www.linkedin.com/pulse/video-content-creation-prosumer-platform-boris-fedotov-ph-d--btftf/?trackingId=k7bmJQ3CRh29l3CP1XKayA%3D%3D) about a month ago, which was inspired by the related [A16Z article](https://a16z.com/the-future-of-prosumer-the-rise-of-ai-native-workflows/) which stated: "*It’s still early days for the next generation of prosumer tools. While existing tools’ abilities to generate core assets are finally strong enough to add meaningful workflows, most products are still only focused on one type of content — and are fairly limited in terms of functionality.*" It raises the question of how generative and/or transformative AI can be made part of enterprise workflows. And I provided an example of [AVICA](https://avica.cloud/) platform which is a tool which can exactly that.

Recent news brought interesting information about new versions of popular B2C generative AI tools which confirm the trend, so I decided to reiterate this concept. The example I am talking about is [LUMA](https://lumalabs.ai/dream-machine) AI video generation tool which added the possibility to define not only the prompt and original video frame (picture) but also target one which is used to improve the quality of the result via some kind of "interpolation" which is natural for transformer architectures. Iy seems to be a small feature, but it's a game changer in terms of control possibilities and resulting content quality.

Still few question remain when one uses tools like LUMA:

They are B2C tools which are supposed to be used by humans in manually managed and controlled wayIf you need to create complex videos with frame structure which consists of multiple elements (texts, graphics, video fragments, audio tracks) you can hardly get decent quality result using single prompt technique.

And this is what in most cases is required for enterprise users - complex videos with dynamic data, with information about products and services, with personalisation elements etc. How can this be done?

Imagine you have an engine which allows full orchestration of generative AI (in our case for video content generation). Your engine is:

Fully automated,Data-driven in terms of source data and possibility to create data-driven prompts,Allows to manipulate all types of the content elements (text, graphics, video, audio) as independent blocks,These blocks can be arrange in automated way to drive storytelling using the storytelling templates,Each block (text, graphics, video, audio) can be subject of AI transformation and/or generation (AI effects) where you have full automated control about data-driven prompts, initial and final states, durations, styling etc. AI effects should be specific to the content element type (and provide the best result (quality / cost) for the customer. For example text-to-speech for text elements and generative AI for selected graphics and video blocks, but definitely not for customer and product logos and their brand specific audio tracks,Integrated with tools which can verify (to some extent) the resulting quality.

It opens completely new horizons for the automated storytelling. To my opinion generative AI orchestration tools is where the generative AI for enterprises will inevitably be driven to.

And finally I will mention again that [AVICA](https://avica.cloud/) platform does exactly this and interested users are welcome to try and build their automated pipelines for data-driven video content production. At scale and with low cost.
