---
title: "What is AI-agent (and what it is not)?"
description: "The agent isn't the model, the memory, or the tools. It's the rules and context — everything else is replaceable infrastructure."
date: "2026-06-25"
tags: ["ai", "ai-agents", "enterprise"]
---

The agent isn't the model.
Agent isn't the memory or the tools.
The agent is the rules and context.

Everything else is infrastructure — and infrastructure is replaceable.

Look at how an agent is actually composed:

- The LLM is swappable. Any model that can reason will do.
- The execution harness is swappable.
- Memory — run-time and persistent — lives in swappable storage: DB, graph DB, plain files.
- Tools are swappable, wired in over something as boring as a unix CLI.

The only part that's specific — the only thing that makes this agent this agent — is its rules and skills files.

But rules alone don't reason. To reason well, an agent needs high-quality, dynamic context — the right information, pulled at the right moment, shaped for the decision in front of it. The rules define how the agent thinks; the context determines whether that thinking is any good. A brilliant ruleset over stale or noisy context is just confident nonsense. This is why the memory and tool layers matter even though they're swappable: they're the pipes that feed reasoning. Swap the implementation freely — but the quality of what flows through it is everything.

That has a strange consequence. If identity lives in the rules, you don't migrate an agent by moving a system. You copy a handful of files.

In theory an agent can replicate itself into entirely new infrastructure — different model, different host, different memory backend — carrying nothing but its rules. New body, same mind.

And an agent that can read and edit its own rules has introspective access to how it works. It can extend itself: add a tool, rewrite a memory, change its own loop.

The durable asset isn't the substrate. It's the rules — and the quality of the context you feed them.
