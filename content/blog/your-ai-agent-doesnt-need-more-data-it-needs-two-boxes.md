---
title: "Your AI Agent Doesn't Need More Data. It Needs Two Boxes"
description: "Knowledge-representation researchers split knowledge into a rulebook and a diary forty years ago. Keeping the T-box and the A-box apart is what turns an agent with a long context window into one with a real memory."
description_de: "Forscher der Wissensrepräsentation haben Wissen vor vierzig Jahren in ein Regelwerk und ein Tagebuch geteilt. T-Box und A-Box getrennt zu halten macht aus einem Agenten mit langem Kontextfenster einen Agenten mit echtem Gedächtnis."
date: "2026-10-04"
tags: ["ai-agents", "context-graph", "sales", "enterprise", "data"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/pulse/your-ai-agent-doesnt-need-more-data-needs-two-boxes-fedotov-ph-d--qsxnf/).

Every company has a Margit.

Margit knows that the purchasing manager at Müller GmbH only signs on Thursdays, never before lunch, and only if you bring up the 2019 delivery delay before he does. She knows that "let's revisit in Q3" from this client means no, and the same words from another client mean yes, send the contract tonight. She knows who actually decides, which is rarely the person on the org chart.

Then Margit retires. The CRM says: Müller GmbH. Last activity: 14 months ago. Everyone agrees this is a tragedy. Few people notice that it is also a well-studied problem with a vocabulary that is forty years old.

#### Two boxes

In 1983, a group of knowledge-representation researchers built a system called KRYPTON and did something that looks obvious in hindsight: they split knowledge into two parts and refused to let them mix. The idea became a cornerstone of description logics, the formal machinery that later gave us OWL (Web Ontology Language) and most of the modern ontology world.

The T-box (the terminological box) is the rulebook. It defines the concepts: what a "customer" is, what "decides for" means, when a contract counts as "at risk," when silence becomes suspicious. It changes rarely, and when it does, somebody should be in the room.

The A-box (the assertional box) is the diary. It holds facts about specific things in the world: Hans wrote to Anna on Tuesday, the offer went out on the 3rd, nobody replied, the meeting was moved twice. It changes constantly and nobody is in the room, because the room is the inbox.

Margit's superpower was that she kept both boxes in her head and knew which was which. "Thursdays only" is a rule she derived from twenty diary entries. "He mentioned the 2019 delay again" is a diary entry that feeds the rule. Lose Margit, and you lose both boxes at once, plus the knowledge of which was which.

#### Why this matters for agents

Stephen Wolfram has a useful way to think about why automation is hard. Most of reality is computationally irreducible: you cannot shortcut it, you have to let it run and see. But inside that mess there are pockets of reducibility, places where a shortcut exists and reliably works. Weather is irreducible; "if the barometer drops this fast, bring an umbrella" is a pocket.

Agentic automation is a sense the craft of finding those pockets. "Offer open for 30 days, champion has gone quiet, and a competitor was mentioned last week" is a pocket. Inside it, you don't need a genius. You need a rule, the facts, and the discipline to keep them apart.

That is exactly what the two boxes give you. The T-box is where you write the shortcut down. The A-box is the evidence the shortcut runs on. The pocket is only as good as the fence between them.

Mix them, and things get funny fast. Your agent reads one grumpy email and quietly promotes it to a company-wide rule: this client is difficult. Or it applies a perfectly good rule to a fact that was never checked, and flags a deal as dead because someone's out-of-office reply looked like a rejection. Both failures feel like "the AI hallucinated."

Neither one is really about the model. They are about bookkeeping.

#### Five old habits worth stealing

Knowledge engineers worked out the bookkeeping decades ago. Their habits transfer almost unchanged.

1. **Facts carry receipts.** Every assertion points to its source: the email, the message, the document. If you can't point at it, it isn't a fact, it's gossip. This sounds pedantic until the day a customer asks "why did your system think we were unhappy?" and you can answer with a quote instead of a shrug.

2. **Facts expire.** "Hans reports to Anna" was true until March. "The budget is frozen" was true for one quarter. A knowledge base without time is a photo album where every picture is labeled "now."

3. **One person, five spellings.** "J. Meier," "Jürgen," "Meier (Einkauf)," and "jm@" are the same human, or they are not. A system that doesn't decide on purpose will decide by accident, usually by treating one relationship as four weak ones.

4. **Silence only counts where you were listening.** Logicians call this the closed-world assumption, and it is a trap. "No reply in 30 days" means something if you can see the whole thread. It means nothing if half the conversation happens in an inbox you never connected. Before you read meaning into absence, know where your coverage ends.

5. **Rules change by review, not by vibes.** The T-box should be versioned, proposed, approved, and reversible. An agent may suggest "this client prefers Thursdays." A human merges it. Otherwise your rulebook is whatever the model felt like last night.

#### The part that gets interesting

Get this right and something pleasant happens: the reducibility pockets grow (which is what you actually need!).

Every confirmed rule makes the next decision cheaper. Every resolved identity makes the next email easier to place. Every linked event (this complaint, that delay, this silence) turns a pile of messages into a history with a shape. The system does not just remember more. It needs to rediscover less. The second time it sees Müller GmbH, it already knows about Thursdays.

That is the difference between an agent with a long context window and an agent with a properly organized memory. The context window is a desk. The two boxes are a filing cabinet with a librarian.

#### The last fortress

Sales has been the hardest place to do this. The reasoning of a good salesperson ("this email is polite, but it's goodbye"; "she copied her boss, which means the budget just appeared") was never automated, because it lived in heads and inboxes rather than in forms. CRMs tried to fix it by asking people to type. People, reasonably, never did...

At [truffalo.ai](https://truffalo.ai), we're on the path to change that. We're applying these concepts to build context graphs: every conversation, decision, and quiet spell connected into a history that never gets forgotten, with receipts, with time, with a clear line between what we know and what we concluded. Salespeople get the full context at the moment they need it, not a form to fill in afterwards.

The next Margit doesn't have to remember everything. Same the one after her inherits it all. The system does and helps them when they need it.
