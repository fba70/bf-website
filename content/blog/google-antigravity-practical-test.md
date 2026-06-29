---
title: "Google Antigravity Practical Test: What Worked and What Didn't"
description: "A hands-on test of Google Antigravity — a next-generation IDE combining editor, agent manager, Gemini CLI and a browser sandbox."
date: "2026-02-03"
tags: ["ai-coding", "developer-tools", "review"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/pulse/google-antigravity-practical-test-what-worked-didnt-fedotov-ph-d--nocbf).

[Google Antigravity](https://antigravity.google/) is positioned by Google as next generation IDE which combines IDE (vscode clone), Agents manager, Gemini CLI and Chrome browser sandbox for preview and tests of the UI. Potentially it could be ideal workplace for the developer whatever toolkit your prefer to work with mainly (UI IDE or CLI with possibility to easily switch when the task requires).

I decided to test how it works with the practical task. I wanted to develop new component which will allow simplified timeline and frame management for the storytelling templates which are the part of our AVICA platform.

So I defined *.agent/rules/rules.md* with the core development rules for the front-end application using the frameworks and libraries I need. I defined *.agent/workflows/workflow.md* with the steps to work on this task. Then I added *.agent/docs/prd.md* with the technical requirements, i.e. which exactly functionality I want to develop, what are the business rules and referred to data models which I want to use via example JSON file. I even added some technical details to *.agent/docs/tech.md* specifying the approach which libraries, integration interfaces and tools need to be used to develop new functionality.

Finally I put all the references and high-level task description to the agent manager prompt to kick off the process.

**What worked:**

It understood correctly the setup and framework I wanted to use.It tried to find similar setups or templates and asked to search in other local repositories (or give it a ref) where it can copy package.json file to roll out frameworks fast.It did install most part of the required libraries correctly and tested that pnpm install and pnpm dev works w/o major issues.It quite fast switched to the specific business logic development and built the components structure which made sense.It took it about 5 minutes to go thru development and test iterations before it concluded that the task is finished and ready for tests.The result was quite close to my expectations (I was reasonably skeptical ) though with multiple caveats which are described below.

**What did not work:**

I could run *pnpm install* but somehow had problems running *pnpm dev* always saying the *localhost* port is occupied and trying to use new port despite the fact that ports were free. I ended up running it on my own.I decided not to use recommended libraries in provided technical specs and used most simple but wrong approach to build core features.It missed several important pieces of the functionality which were requested like CRUD functions for the storytelling template elements. So final UI functions were incomplete.It changed data model for the storytelling template description and corresponding element despite the fact it was specified with the precision in provided json files.It tried to install Vercel AI SDK to provide integration with Gemini API but front-end part of it (chat and streaming interface) never worked due to inconsistencies in versions of the libraries and references entities and methods as well as default models which can be used via this API gateway. Antigravity went thru multiple cycles trying to change that between version running tests but never could figure out the correct combination to work. Manual control and direction from my side also did not work as well, every time it tried new approach it ended up repeating wrong configurations. So in automated mode it never worked.

**Verdict:**

Despite the fact that it made a great progress setting up the project from scratch and taking into account all the requirements it missed a lot in terms of functionality and data model and could not deliver working solution. Especially strange was that it could not figure out correct configuration for popular Vercel AI SDK to be used with its own Google Gemini API. So I'd give it 5 out of 10 altogether.

Still I believe Google Antigravity has a big future and issues it has now are mainly due to the early days of it as a product and overall domain and agentic development capacity changing on a daily basis. One would not expect things like these to run flawlessly in relatively complex development task. I'll be following the version update thru the year definitely to see the improvements.

P.S.: I also plan to try the same setup running with Gemini CLI. It's interesting to figure out the differences and advantages of using CLI version of Google agentic coding assistants.
