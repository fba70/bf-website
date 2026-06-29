---
title: "Evolution of the SaaS in the Age of Agentic AI"
description: "Falling markets for legacy SaaS and the daily advance of agents and models — an attempt to structure what's happening."
date: "2026-02-18"
tags: ["saas", "ai-agents"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/pulse/evolution-saas-age-agentic-ai-boris-fedotov-ph-d--z9ibf).

I read a lot these days about the falling markets of legacy SaaS providers and daily advantages of AI, agents, bots, models etc. And try to structure and distill it for myself what could be important for agentic B2B solutions and what is just hype / noise.

Here are some of the bullets I collected:

#### What is strategically important for B2B

To survive, developers must abandon "interface" and "workflow" as primary value propositions and focus on assets that AI cannot easily replicate.

***Abandon the Interface Moat*****:** Traditional vertical software relied on complex interfaces and trained community to lock customers in. AI agents dismantle this by allowing users to interact via natural language, making proprietary interfaces obsolete. Software should be designed to be "headless," functioning primarily as an API or supplier to an AI agent rather than a destination website.

***Secure Proprietary Data*****:** If your data can be scraped, licensed, or synthesized, your business is at risk of commoditization. The strongest strategy is to own data that does not exist elsewhere, such as proprietary pricing, credit ratings, or unique editorial content.

***Leverage Regulatory and Transactional Lock-in*****:** Focus on sectors with heavy compliance requirements or embed the software directly into money flows. These "fortresses" remain resistant to AI disruption because LLMs cannot replace legal certification or financial infrastructure.

#### Product Architecture: "Skills" and "Agentic" Design

The way business logic and information retrieval are engineered must shift from rigid code to flexible, agent-friendly structures.

***Encode Logic as AI "Skills", Not Code*****:** Instead of hardcoding business logic in Python or JavaScript, developers can define workflows in markdown files (skills.md etc.). This allows domain experts to write software without engineers and enables the system to adapt as models improve.

***Adopt the Agentic Protocols (MCP, A2A, UCP, A2P, etc.)*****:** Instead of building bespoke APIs with rigid documentation, build endpoints which agents understand. This allows AI agents to dynamically discover and utilize your software's capabilities without custom integration effort. You new users could be mainly AI agents.

***Sandboxing is Mandatory*****:** If your software allows agents to execute code or multi-step workflows, you must implement isolated execution environments (sandboxes) to prevent system damage (e.g., an agent accidentally deleting files).

#### Market Timing: Assessing AI tools

Before developing a solution, you must determine if the underlying AI tools are actually capable of performing the specific job to be done.

**Verify The Fit Before Building:** Check if current models and tools can perform the core task without significant human correction. For your specific knowledge domain and functionality you want to build.

**The "Human-in-the-Loop" Test:** If removing the human from the workflow causes the product to fail entirely, it's not yet a product. In many domains accuracy is critical and if your LLM and agentic processing provides only 80% accuracy - it might not work as a product.

**Prepare for Durable "Agentic" Workflows:** Future value lies in agents that can work autonomously for days, not just minutes. Developers should design systems that support persistence, error recovery, and long-running tasks.

#### Technical Optimization: Managing the "Tokens Tax"

Because sending data to LLMs is expensive and latency-inducing, efficient context management is a critical competitive advantage.

**Optimize Context Usage:** Implement strategies to reduce token costs. This includes putting static instructions at the start of prompts to maximize cache hits, using append-only context, and cleaning data before feeding it to the model.

**Use Subagents and Caching:** Delegate simpler tasks to cheaper models and cache responses at the application level to avoid redundant API calls.

**Right Choice of Context Storage:** Store user context data as files (YAML/Markdown) in S3-like storage rather than in complex database schemas. This makes the data easily readable and writable for AI agents.

What do you think is important? Share your ideas.
