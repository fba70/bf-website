---
title: "When Naive Agentic Memory Approach Is Not Enough?"
description: "A markdown notes file plus a vector index works for lookups, but fails on real business tasks that span entities, time, systems and decisions. Why retrieval is an attention problem, and when a context graph is worth it."
description_de: "Eine Markdown-Notizdatei plus Vektorindex reicht für einfache Abfragen, scheitert aber an echten Geschäftsaufgaben, die Entitäten, Zeit, Systeme und Entscheidungen verbinden. Warum Retrieval ein Aufmerksamkeitsproblem ist und wann sich ein Context Graph lohnt."
date: "2026-10-19"
tags: ["ai-agents", "context-graph", "memory", "rag", "architecture"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/pulse/when-naive-agentic-memory-approach-enough-boris-fedotov-ph-d--pavnf/).

#### The moment the demo meets Monday morning

Every team building agentic solutions hits the same quiet moment. The demo went well: the agent remembered that a customer prefers email, pulled the right paragraph from the refund policy, answered in seconds. Then someone asks it to do real work. “Prepare the renewal for Müller GmbH.”

And the agent, which has a tidy markdown file of notes and a vector index over every document the company owns, produces something that is technically correct and practically useless. It does not know that the discount in the CRM was a one-time exception approved in March. It does not know that the champion left in July, or that the purchasing manager only signs on Thursdays. It cannot know, because none of that was ever a document. It was a decision, a relationship, a timing — the connective tissue between records, not the records themselves.

This is not a failure of the model. It is a failure of how we collect, store and search what the model is allowed to think with.

#### How a sticky note and a search bar became “agent memory”

It is worth being fair to the first generation. Agents started life as chat with tools, and the memory that grew around them was the cheapest thing that worked.

The first ingredient was a notes file. The agent writes down what it learned, reads it back at the start of the next session, and over time the file becomes a personality of sorts: preferences, conventions, lessons. The second ingredient was retrieval. Chunk every document, embed the chunks, and when a question arrives, pull the ten nearest neighbors into the prompt. Nothing to model, nothing to maintain, works on day one.

For a wide class of tasks this is still the right answer. “What does our travel policy say about taxis?” is a lookup. “Summarize this contract” needs the contract, not the company. If the work is bounded by one document and one session, a markdown file and a vector index are not a compromise; they are the correct tool.

The trouble is that both ingredients answer the same narrow question: which stored text resembles the words I was just given? That question is fine for finding a paragraph. It is the wrong question for making a decision.

#### The shape of a real business task

Look at what “prepare the renewal” actually requires and the mismatch becomes obvious. Real tasks have four properties that similarity search was never designed for.

- They span many entities. An account, three contacts, two contracts, a competitor, a support ticket, an internal owner. The answer is not in any one of them; it is in how they relate.
- They are time-bound. What was true in Q2 is not true now. The discount expired, the champion changed, the pricing rule was updated. A vector index has no notion of “as of”; a stale paragraph that reads well will outrank a fresh one that reads badly.
- They cross systems and functions. The evidence sits in the CRM, in email, in a Slack thread, in a finance spreadsheet, and in someone’s head. Each of those was indexed separately, if at all.
- They hinge on decisions, not facts. The important thing about the March discount is not its number. It is that it was an exception, who approved it, and why. That reasoning was never a record, so it was never embedded.

Meanwhile the notes file has its own slow decay. It grows, it contradicts itself, it has no provenance, and nobody can garbage-collect it because nobody knows which line still matters. At 50 lines it is memory. At 2,000 it is noise with a good reputation.

So the agent does what it can: it finds things that sound like the question, and it reasons confidently over the wrong context. The output looks fine in demo but it's almost always wrong in real-life scenario.

#### Retrieval is an attention problem, not a search problem

Here is the reframing that, in my view, matters most. A language model can only reason over what is in front of it. Its attention is finite and it is spent on whatever we put in the context window. Retrieval, therefore, is not a search feature bolted onto the agent. It is the mechanism that decides what the model is allowed to pay attention to.

Seen that way, “return the ten most similar chunks” is a strange policy. It fills the model’s attention with text that resembles the question and leaves out the things that determine the answer: the relationship between the account and the contract, the date the exception was granted, the person who can actually say yes.

I'd make a point again: the most important process in most companies has never been written down. It is the reasoning that connects one record to the next, the exception path, the “we always do it this way with this client”. Systems of record store what happened. Nobody stores why. And an agent that searches text can only find what was written.

There is a second, quieter mistake in simple memory: it mixes two very different kinds of information in one bucket. Raw observations (an email arrived, a ticket closed, a transcript mentioned a competitor) sit next to confirmed knowledge (this account renews in November, this contact is the economic buyer). The first kind is plentiful and unreliable; the second is scarce and valuable. An agent needs an evidence stream and a curated model of the world kept apart, with a deliberate process for promoting one into the other. A single markdown file or a single vector index gives you neither.

#### What changes when context is a graph

The emerging answer, which several teams have converged on under the name context graph, changes all three steps: how context is collected, how it is stored, and how it is searched.

Collection moves into the flow of work. Instead of reconstructing context after the fact from documents, the system captures it where it is created: when a decision is taken, when an exception is approved, when an agent finishes a task and records what it used and what it concluded. The decision trace becomes data. This is the only way to capture the “why” that never made it into a record.

Storage becomes typed and time-aware. Entities (accounts, people, contracts, products, projects) are nodes. Relationships are edges with a type, a source, a confidence and a validity window. “Müller GmbH had a 15% discount, approved by Anna, valid March to June, because of a competitive bid” is one small subgraph, not a paragraph. The two boxes live here: raw signals arrive as candidates; curated facts are what the agent reasons over.

Search becomes traversal, then assembly. The agent anchors on the task’s entity, walks the relationships that matter for this kind of decision, filters by time, and assembles a compact brief. Similarity search still has a role at the edges, for finding candidate evidence, but it no longer decides what the model attends to. That decision is made by structure, recency and provenance. The agent stops being a fetcher of fragments and starts connecting the dots.

To be fair, not everyone agrees this is necessary. Some teams argues that for companies under roughly a thousand people, a capable model with good search tools can infer the relationships at query time, and that a stored graph is expensive and permission-heavy. It is a serious objection, and for a single-system, low-stakes task I think it holds. It holds less well once the task crosses systems, depends on history, and has to explain itself to an auditor or a customer. It's not a matter of number of people or length of specific context, it's about inferring the right context on every call is not simpler. It is just hidden work, done badly, every time.

#### So, when is simple memory enough?

The honest answer is: more often than the graph enthusiasts admit, and less often than the demo suggests. Three questions sort most cases.

1. Does the task need more than one system to answer?
2. Does the right answer depend on when you ask?
3. Does a wrong answer cost more than a retry?

One “yes” and a notes file plus a vector index will probably hold. Two or more, and you are prototyping, not building.

| Task | Simple memory (markdown + RAG) | Needs connected, time-aware context |
|---|---|---|
| Answer a policy question from a handbook | Yes | No |
| Summarize or draft from a given document | Yes | No |
| Remember a user’s preferences across sessions | Yes | No |
| Prepare an account renewal or an upsell plan | No | Yes |
| Decide whether an exception should be granted again | No | Yes |
| Explain why a quote was priced the way it was | No | Yes |
| Route a customer request to the right owner with history | Partly | Yes |

The transition does not have to be a rewrite. Most teams I see get there in steps: start tagging stored notes with entity, source and date; separate observed from confirmed; record decisions as structured events rather than prose; then let traversal, not similarity, decide what goes into the prompt. Each step pays for itself before the next one is needed.

#### The real question

We spent two years making models smarter. The next gains will come from being more deliberate about what we let them think about. Markdown memory and vector search were the right first step because they asked nothing of the organization. The step after that asks something: treat relationships, time and decisions as first-class data, because that is what the work is made of.
