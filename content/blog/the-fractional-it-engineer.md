---
title: "The Fractional IT Engineer: Why One Part-Time Expert Can Now Serve Five SMBs"
description: "AI coding agents let one senior engineer do the work of a small team for several companies at once. What a fractional engineering firm looks like, why SMB owners hesitate, and what it does to the IT job market."
description_de: "KI-Coding-Agenten erlauben einem erfahrenen Engineer, die Arbeit eines kleinen Teams für mehrere Unternehmen gleichzeitig zu leisten. Wie eine Fractional-Engineering-Firma aussieht, warum KMU-Inhaber zögern und was das für den IT-Arbeitsmarkt bedeutet."
date: "2026-10-13"
tags: ["ai", "ai-coding", "smb", "startups", "strategy"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/pulse/fractional-engineer-why-one-part-time-expert-can-now-fedotov-ph-d--gca1f/).

#### The job that used to need a team

For twenty years, a company with 20 to 100 employees had three options for IT: hire one overworked generalist, build a small team it couldn't really afford, or outsource to an MSP that reset passwords but never touched the real problems.

The real problems were always the same. The CRM doesn't talk to the accounting system. Someone built a critical workflow in a spreadsheet in 2019 and nobody dares touch it. The website runs on a plugin that stopped being maintained. Reports are assembled by hand every Monday. Custom software was a luxury reserved for companies with a budget line called "development".

That economy has quietly broken. The constraint was engineering hours, and they just got dramatically cheaper and faster to produce.

#### The new math

One experienced engineer working with AI coding agents can now ship what a three-person team shipped in 2022, and do it for five companies instead of one. That is not a slogan; it is a scheduling observation.

Look at what actually fills an SMB IT week. Roughly a third is integration glue: moving data between systems that were never designed to talk. Another third is small custom tooling: a dashboard, an internal form, an automation that replaces a manual process. The rest is maintenance, vendor wrangling and the occasional fire. Almost none of it is novel computer science. Almost all of it is well-understood work that AI agents now draft in minutes and a senior engineer reviews in an hour.

So the unit of work shrinks from "a sprint" to "an afternoon", and the engineer's job shifts from typing to deciding: what to build, what not to build, what is safe to connect, what the AI got subtly wrong. Judgement scales across clients in a way that keystrokes never could.

The arithmetic for a typical 80-person company looks like this:

| | In-house (2022) | Fractional (2026) |
|---|---|---|
| People | 1 full-time generalist, 1 contractor on call | 1 senior engineer, ~1 day/week |
| Annual cost (EUR, approx.) | 90,000–140,000 | 30,000–50,000 |
| Custom tooling delivered per year | 2–4 small projects | 10–20 small projects |
| Integration backlog | Permanent | Cleared in the first quarter |
| Bus factor | 1 | Shared across a pod |

The point is the direction: half the cost, several times the throughput.

#### Yes, there is a business model, and it isn't an MSP

The company that wins here sells outcomes on a retainer, staffed by senior engineers who each carry four to six clients and work in small pods.

Call it the fractional engineering firm. It borrows from three models that already work: the fractional CFO (senior judgement, part-time, trusted with sensitive data), the managed service provider (recurring revenue, SLAs, on-call), and the boutique dev agency (actual building, not just keeping lights on). None of those three alone fits; the combination does.

The mechanics that make it hold together:

- Pods, not individuals. Three engineers share twelve to fifteen clients. Every client has a named lead and a known backup. Holidays, illness and departures stop being existential events for the customer.
- Retainer tiers, priced on scope not hours. A base tier covers integrations, maintenance and a monthly roadmap call. A build tier adds a fixed number of custom tools per quarter. Hours are the firm's problem to manage, not the client's to count.
- A shared platform layer. The firm standardizes on a small set of integration tools, hosting patterns, monitoring and AI tooling. Every client gets the same hardened setup, which is what lets one engineer hold five of them in their head.
- Outcome reporting. The monthly report says "invoices now sync automatically, two hours a week saved in finance", not "38 hours billed".

The gross margin works because the engineer's leverage is real. The firm's risk is that it hires people who are good at prompting and bad at judgement. The product is the judgement.

#### Why owners will hesitate (and they are right to)

SMB owners are not resisting fractional IT because they love paying full-time salaries. They are resisting because the old model bought them four things that a cheaper model might quietly take away.

1. Someone to shout at. When the ERP goes down at 9 a.m., a full-time employee is in the building. A part-timer serving five clients might be at someone else's 9 a.m.
2. Data in one pair of hands. Customer lists, pricing, payroll, contracts. An employee is bound by an employment contract and physical presence. A rotating pod of outsiders feels like five more doors into the building.
3. Context that lives in a head. The in-house person knows that the warehouse system crashes if you run two exports at once. Nobody wrote it down. Switching providers means losing it.
4. Lock-in in the other direction. If the firm builds twenty small tools with its own AI tooling and its own platform, who owns them when the contract ends?

There is also a less flattering worry: an owner who has never managed engineers now has to manage a vendor relationship, read a roadmap and say no to things. Some would rather pay more and not think about it.

A fractional firm that treats these as sales objections to overcome will churn clients. One that treats them as product requirements will keep them.

#### A value proposition that actually answers the objections

The pitch is not "cheaper IT". It is: senior engineering judgement on retainer, with your data staying yours, your systems documented, and a guaranteed response when it breaks.

Each objection maps to a concrete commitment:

| Owner's worry | What the firm commits to |
|---|---|
| Nobody there when it breaks | Pod-level on-call with a written response SLA (e.g. 1 hour for outages, next day for everything else); a named backup who already knows the account |
| Data leaking through five doors | Access through the client's own identity provider, least-privilege by default, no client data in shared AI tooling unless the client opts in; a short security addendum written for a non-technical reader |
| Context stuck in someone's head | A living systems handbook per client, maintained as part of the retainer; the AI writes the first draft, the engineer keeps it true |
| Lock-in | Everything built lives in the client's repositories and accounts; the firm has access, not ownership; exit means revoking access, not migrating |
| Managing a vendor is work | One monthly 45-minute roadmap call; the firm proposes, the owner picks; no ticket queue to police |

Pricing should say the same thing. A flat monthly fee, a defined scope, a 30-day exit clause. The moment the owner has to count hours or argue about change requests, the model has reverted to the agency they already didn't like.

The security point deserves one more sentence. The honest answer is that a disciplined fractional firm is usually safer than the lone in-house generalist with admin on everything and no second pair of eyes. Owners rarely hear that argument, because nobody is selling it to them.

#### What this does to an IT job market already on edge

The fractional model does not create new engineering jobs; it concentrates the remaining ones in fewer, more senior, more leveraged people. That is good news for experienced engineers and bad news for everyone trying to become one.

The entry-level squeeze is already well documented. Multiple analyses of 2024–2026 postings report entry-level developer listings down by half or more since 2022, with the Stanford Digital Economy Lab finding employment among developers aged 22–25 down roughly 20% from its late-2022 peak ([summary](https://arslandg.substack.com/p/what-changed-for-junior-developers)). Treat the exact percentages as approximate; sources disagree on the measure. The direction is not in dispute.

Fractional IT accelerates three shifts:

- A new senior career path. The in-house SMB generalist, historically underpaid and under-challenged, becomes a fractional engineer with a portfolio of clients, higher income and more variety. For mid-career engineers tired of big-company politics, this is an attractive exit.
- The junior ladder loses another rung. SMBs were where many juniors learned on real systems with low stakes. If that work is now done by one senior plus an agent, the apprenticeship disappears unless firms deliberately rebuild it, for example by pairing one junior per pod with the explicit job of becoming the backup lead within 18 months.
- Skills reprice. Pure coding speed is worth less. Systems thinking, security hygiene, vendor evaluation, writing a clear handbook and explaining a trade-off to a non-technical owner are worth more. The fractional engineer is closer to a consultant who can also build than a developer who can also talk.

The uncomfortable long-term question is the same one the whole industry faces: if nobody trains juniors in 2026, who are the senior fractional engineers of 2032? The firms that answer that question with a real apprenticeship model will have a hiring advantage the others cannot buy later.

#### Where this goes

The full-time SMB IT hire was never a great deal for anyone. The company paid a salary for a role that was 40% waiting. The engineer took a job with no peers and no growth. AI coding agents didn't create a better option; they made the better option affordable.

If you run an SMB: the question is no longer "can we afford an engineer" but "what would we build if engineering hours were cheap". Most owners have a list. It is usually in a drawer.

If you are an engineer: the fractional path is real, it pays better than the in-house generalist job, and it rewards exactly the skills that AI cannot replace. The companies that will hire for it are mostly not founded yet.

If you are thinking about founding one: the product is trust, packaged. Pods, SLAs, the client's own accounts, a handbook that stays true, and a flat fee. Get those five right and the technology is the easy part.

I'd like to hear from both sides. Owners: what would make you hand your systems to a part-time outsider? Engineers: would you take five clients over one employer? Comments open.
