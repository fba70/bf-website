---
title: "Invert the Stack: Four Ideas Pointing the Same Way"
description: "A business world model, the org chart as a routing protocol, the end of manual CRM entry, and the end of hardcoding. Read together, they describe one architecture — and one uncomfortable org change."
date: "2026-09-10"
tags: ["ai-agents", "architecture", "enterprise", "context-graph", "strategy"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/posts/bfedotov_few-things-reading-together-approach-the-activity-7503717712796377088-X8-I).

Few things reading together, approach the same concept from several angles.

#### 1. The business world model

There is a formalism called [Business World Model](https://arxiv.org/abs/2606.10044). The construct that lets a robot rehearse before it moves is applied to a business: entities and their relationships as state, ML models plus deterministic rules as dynamics, and an explicit set of feasible actions.

#### 2. The org chart is a routing protocol

Many people already wrote — see, for example, [Block's article](https://block.xyz/inside/from-hierarchy-to-intelligence) — that the org chart is not a management tool. It's an information-routing protocol, invented by the Roman army to work around the fact that one person can manage roughly eight others. Middle management exists to carry context up and decisions down.

Most enterprises are now bolting AI copilots onto that structure, which makes it marginally faster without changing what it is. The offer is: put the intelligence in the system and move the people to the edge, where the model meets reality.

#### 3. Nobody fills the CRM by hand anymore

Nobody should fill the data manually in the CRM anymore. People integrate their operational data sources — internal and external — and talk to the system via AI chat or messenger UI. The system of records should now be created automatically and attributed within the historical perspective, within context graph layers.

#### 4. Stop hardcoding

Yet another piece is an architectural principle: stop hardcoding.

Fixed schemas, fixed workflows and fixed screens were safeguards when humans wrote every line of code. When agents generate schema, logic and interfaces at runtime, those safeguards become the bottleneck.

Invert the default — everything is allowed except a short, versioned, machine-enforced constitution:

- tenant isolation,
- provenance on every fact,
- human approval for irreversible actions,
- privacy floors,
- cost ceilings.

Constrain only what must never happen. The rest is permitted by default.

#### Putting it together: the stack inverts

**Old:** application → database → UI → user → manager → decision.

**New:** sources feed a continuously self-maintaining model of the business. Systems of record become views derived from it. Agents answer any question about the business with citations, detect moments, and propose actions with estimated effects. Sellers, KAMs, reps, operators, executives — talk to it, exercise judgement, approve, correct.

The interface is disposable; the model is durable. The constitution is the only thing that's fixed.

#### The hard part is not technical

There is a path to go in terms of architectures and platforms. But the uncomfortable part is the org one, not the technical.

A system like this absorbs the routing function of hierarchy. If you buy it as a copilot for the existing chart, the chart wins. If you buy it to give the edge full context and authority, you're building a different kind of company.
