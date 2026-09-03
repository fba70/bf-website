---
title: "From Hardcoded to Fluid: Where Software Architecture Goes After the Agent Era"
description: "Every era of architecture reduced how much of the world we decide in advance. The next step is a tiny constitution humans control — and everything else negotiated by agents."
date: "2026-09-03"
tags: ["architecture", "ai-agents", "enterprise", "strategy"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/pulse/from-hardcoded-fluid-where-software-architecture-goes-fedotov-ph-d--zillf/).

Every generation of software architecture has been an answer to one question: how much of the world can we afford to leave undecided at build time?

The answer was "almost none." Then it started to change, and it has been changing faster ever since. Let's guess about where it lands.

#### 1. Everything hardcoded

The first systems were the world frozen into code. Data model, process, integration, screen — all decided once, by a few people, before the first user showed up. It worked beautifully as long as reality matched the assumptions. The moment it didn't, the system didn't bend; it broke. Change meant a release, a release meant a project, and a project meant months or years.

The design principle of the era: correctness through rigidity. If you can't predict it, you can't support it.

#### 2. Workflows and configuration

Then we admitted that business processes vary, and we pulled the variation out of code into workflow engines, rule engines, and configuration. Branching, approvals, exceptions, regional variants — all expressible without recompiling. BPM, low-code, and a thousand admin screens were born. Look at any legacy SaaS platform like Salesforce, for example.

This was a real step forward, but a subtle one: the categories of variation were still fixed. You could reorder steps, but only steps the designers had imagined. A workflow engine is a way of hardcoding the space of possible changes instead of the changes themselves.

Design principle: flexibility within a predefined envelope.

#### 3. AI models behind prompt interfaces

Large language models arrived and we did the obvious thing: bolted them onto the side of our systems of record. Summarize this ticket. Classify that email. Draft the reply. Enrich the CRM record with what the model knows.

Powerful — but architecturally conservative. The model was a very smart function call. The schema, the process, and the UI didn't move an inch. We had a new source of intelligence feeding an old skeleton.

Design principle: intelligence as an enrichment layer.

#### 4. Agents around a rigid core

Next came agents: models with tools, memory, and the freedom to take many steps toward a goal. Suddenly a system could handle tasks whose starting conditions were not fully specified. "Resolve this customer's issue" instead of "execute flow 14b."

And yet the core stayed rigid. Agents operated on the system of record through the same APIs and the same data model we had frozen years earlier. The agent was flexible; the ground it stood on was not. Most of the agent's cleverness went into working around constraints the system imposed for reasons nobody remembered.

Design principle: flexible execution over a fixed substrate.

#### 5. "AI-native" platforms

The current conversation is about flipping the relationship. Push the system of record backstage. Put a rich conversational interface and dozens of interacting agentic co-workers in front. Let people describe outcomes; let agents figure out the steps; let the database become an implementation detail.

This is where a lot of ambitious products are being built today, and it is a real shift in who — or what — the primary user of the system is. But talk to anyone building one and you hear the same discomfort. The chat interface is not the destination. The agentic harness is not the destination. Underneath, most of these platforms still carry a fixed data model, hand-wired integrations, and a process layer someone has to maintain. We have moved and shaken the rigidity, not removed it completely.

#### The unsolved problem

What remains open: how do you build a system in which everything can change while it is running — the data model, the processes, the integrations, the user interface — while thousands of agents inside and outside the system act on it simultaneously, and the open internet is one of the actors?

Nobody has a clean answer yet. But I think the shape of one is becoming visible, and it rests on a reframing.

#### The reframing: stop designing permission systems, start designing constraints

Every previous era tried to be flexible by predicting more of the future and encoding it in advance. Enabling more and more flexibility piece by piece. That strategy is exhaustive. The alternative is to stop adding permissions but rather decide what must never change — then let everything else be negotiated at runtime.

Concretely, I expect the architecture to split into two layers with very different change rates.

#### The slow layer: a constitution, not a codebase

A minimal, deliberately conservative core that humans own and that changes rarely:

- **Identity and authority.** Who and what exists, what each actor is allowed to do, and how permission is delegated to agents and revoked from them.
- **A ledger of facts.** Not a schema — an append-only, versioned record of what happened and what was asserted, with provenance. Schemas become views on this ledger that can be reinterpreted later.
- **Invariants and policies.** The genuine business, legal, and safety rules, expressed declaratively: "no refund exceeds the original payment", "customer data never leaves the EU region", "any action above €10k needs a human signature".
- **Economics and budgets.** Compute, money, and risk limits per actor and per task, because a system of autonomous agents without budgets is an incident waiting to happen.
- **Evaluation.** The tests, monitors, and quality signals that define what "working" means, so the fast layer can be judged continuously.

#### The fast layer: everything else, generated and negotiated

Above the constitution, nearly everything becomes fluid:

- **Data model as an evolving graph.** Concepts, relationships, and even field definitions are proposed, adopted, and deprecated at runtime. An agent that encounters a new kind of entity doesn't fail on a missing column; it proposes a new concept, the system checks it against invariants, and it becomes part of the shared vocabulary — versioned, with a migration path that agents can execute.
- **Processes as goals plus constraints.** Instead of a flowchart, a process is a declared outcome, a set of guardrails, and a track record. The steps are planned per case and the successful plans are cached as "habits" that harden into fast paths when stable and dissolve when the world moves. Workflows don't disappear; they become emergent and disposable.
- **Integrations as conversations between agents.** Point-to-point API contracts give way to agent-to-agent protocols where two systems discover each other's capabilities, negotiate terms, and exchange data through shared semantics rather than hand-mapped fields. The open standards taking shape today — tool protocols, agent-to-agent messaging, machine-readable capability descriptions — are the early plumbing for this.
- **Interfaces as compilations.** The UI is rendered for this person, for this task, at this moment, from the current state of the graph and the current permissions. Sometimes it is a chat. Often it is a form, a table, a dashboard, or nothing at all because the job finished before anyone needed to look. "The interface" becomes a verb.
- **The internet as a first-class participant.** External agents, public data, other organizations' systems. The boundary of "the system" is a permission boundary, not a deployment boundary.

#### What this changes about how we work

If this picture is even half right, the role of architects and engineers shifts in three ways.

We stop authoring behavior and start authoring constraints and evaluations. The most valuable code in the future system is the code that says what good and forbidden look like, because that is what keeps ten thousand agents coherent.

Versioning becomes the central discipline. Not versioning of releases, but versioning of meaning: concepts, policies, and habits all carry history, and the system must be able to explain why any given fact or decision was produced under which definitions.

Trust becomes an engineered quantity. Every agent, internal or external, accumulates a reputation against the evaluation layer. Autonomy is granted and withdrawn based on it, in the same way a new employee gets more authority as they prove themselves.

#### Still there are uncertainties

Several hard problems have no convincing answer yet:

- **Observability.** When the process was designed in advance, debugging meant reading the design. When it is planned per case by agents, understanding what happened and why requires tooling we mostly don't have.
- **Consistency at scale.** Distributed systems were already hard when the participants were deterministic. Massive agentic workloads negotiating a shared, mutable data model is a new category of concurrency problem.
- **Cost.** A system that reasons about everything is a system that pays for everything. The "habits" idea — freezing stable behavior into cheap code — matters more than it sounds.
- **Accountability.** Regulators, auditors, and customers will still ask, "who decided this?" The constitution layer exists mostly to make that question answerable.

#### Where this leaves us

Each era of architecture reduced the amount of the world we had to decide in advance. Hardcoding decided everything. Workflows decided the categories of change. Prompt-driven AI left decisions fixed but made the data richer. Agents freed execution but not the substrate. AI-native platforms moved the rigidity out of sight.

The next step is to make rigidity deliberate and tiny — a small constitution that humans control — and to let everything else, from schema to screen, be negotiated by agents within it. The systems that get this right won't feel like software we operate. They'll feel like organizations we govern.

I'd be curious what others building in this space think is the piece that doesn't hold up.
