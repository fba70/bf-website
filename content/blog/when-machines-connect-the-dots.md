---
title: "When Machines Connect the Dots"
description: "An AI model settled open questions across seventeen areas of mathematics by reading fields that specialists rarely read together. The same idea, with outcomes as the feedback loop, works on a B2B sales pipeline."
description_de: "Ein KI-Modell hat offene Fragen in siebzehn Gebieten der Mathematik geklärt, weil es Fachgebiete zusammen liest, die Spezialisten selten gemeinsam lesen. Dieselbe Idee funktioniert in einer B2B-Vertriebspipeline, mit echten Ergebnissen als Feedback-Schleife."
date: "2026-10-10"
tags: ["ai", "mathematics", "sales", "context-graph", "strategy"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/pulse/when-machines-connect-dots-boris-fedotov-ph-d--ycoxf/).

#### A machine that reads the whole library

This week OpenAI released 722 manuscripts produced by an unreleased internal model, covering 372 families of mathematical results and settling hundreds of open questions across roughly 17 areas of mathematics ([Business Standard](https://www.business-standard.com/technology/artificial-intelligence/openai-shares-summaries-of-math-problems-solved-by-its-unreleased-model-126100700715_1.html)). A month earlier the same model was credited with the Navier–Stokes problem; a few weeks before that, with more than 100 long-standing open problems in under a month of training. The mathematical community is still checking the claims, and an independent advisory group at the Institute for Advanced Study was formed to help with exactly that.

The headline number is impressive. The mechanism behind it interests me more.

The model did not invent a new mathematics. It read across disciplines that human specialists rarely read together, and it borrowed a method from one field to crack a problem in another. One early result, examined by professional mathematicians, turned on an unexpected link between elementary geometry and algebraic number theory. Nobody had missed that connection because it was hard. They missed it because no single human had both fields in working memory at the same time, and the patience to try every combination.

That is the real story: a system that can hold an entire library in view at once, and keep trying.

#### Humans tried this too. It took sixty years.

In 1967 a young mathematician named Robert Langlands wrote a letter to André Weil. He apologised in advance in case it was nonsense. It was not. The letter sketched a web of conjectures tying together four fields that had grown up separately: number theory, the theory of automorphic forms, representation theory and algebraic geometry. The idea was that a hard question in one field could be translated into an easier question in another, and answered there.

That web became the Langlands program, sometimes called the grand unified theory of mathematics. The payoff was slow but spectacular. Andrew Wiles proved Fermat's Last Theorem in 1995 by proving a piece of it, a bridge between elliptic curves and modular forms. Ngô Bảo Châu won a Fields Medal in 2010 for the Fundamental Lemma, another piece. Every step took a specialist years to learn a second field well enough to carry a method across.

So the recipe is old: collect facts and methods from fields that nobody thought related, hold them side by side, and look for the translation. What changed this year is who can afford to do it, and at what speed.

#### Why math went first

Mathematics, like code, is the friendliest possible terrain for this kind of search. Everything is written down. Every object has a precise definition. And every candidate answer can be checked: a proof is right or wrong, a test passes or fails. OpenAI even shipped many of the new proofs formalised in Lean, so a computer can verify them line by line.

That verifiability is what lets a model run thousands of attempts and throw away the bad ones without a human in the loop. Structure plus a cheap, honest test equals compounding progress.

It is tempting to conclude that the trick only works where the ground is that solid. I think that is wrong.

#### The same idea, pointed at a sales pipeline

A B2B sales organization sits on its own scattered library. CRM history. Email threads. Call notes. External market info. Hiring pages, funding rounds, product launches, job changes, press, regulatory filings, partner announcements, competitor moves. Each of these lives in a different tool, is owned by a different team, and is read, if at all, by one person at one moment.

The connections that matter are almost never inside one source. A prospect's new VP of Operations, a competitor's price change last quarter, a support ticket from a sister company and a conference talk from six months ago may together say "this account is about to buy, and here is why". No rep has the attention span, or the processing budget, to notice that. Not because they are careless, but for the same reason no number theorist read the geometry papers.

This is what we build at [truffalo.ai](http://truffalo.ai). We collect information from many sources, keep it in historical perspective rather than as a snapshot, and let our models run continuously over it, looking for connections that are invisible from any single vantage point. Out of those connections we build working models of how the information can help a salesperson: which account to open today, what to say, what the next step should be and when.

The point is not just to take routine work off the rep's plate, though it does that. The point is revenue: more of the right accounts entering the funnel, a higher share converting at each stage, and fewer deals lost to something somebody could have known.

#### Business is not math. That is fine.

There is no LEAN for a sales recommendation. A prediction about a deal is not true or false the day it is made. So we cannot copy the math setup one to one.

What we have instead is a slower but still honest test: what actually happened. Did the account reply? Did the meeting get booked? Did the deal close, stall or die, and when? Every prediction, recommendation and artifact the system produces is scored against that outcome and fed back. The loop is noisier than a proof checker and takes weeks instead of seconds, but it runs on every account, every day, and it does not forget.

With that loop in place the outputs stop being clever guesses and become reliably good for business purposes, which is the bar that matters. Not perfect. Good enough, consistently, to change what a rep does on Monday morning.

And the rep is still the one who makes the final move. The model finds the connection; a person picks up the phone, walks into the room and talks to another person. That part we are not trying to automate. We are trying to make sure that when they do, they already know the thing nobody else noticed.

#### The pattern is bigger than the field

Langlands needed sixty years and a handful of geniuses to connect four fields. A model did the equivalent across seventeen in a few weeks, with the mathematical world now checking the work. Whatever the final tally, the lesson is already clear: the most valuable discoveries are often sitting between disciplines, in plain sight, waiting for something with enough range and enough patience to look.

Sales teams have their own unconnected fields. We think the same approach works there, with a feedback loop standing in for the proof checker and a human standing at the end of it.

If you are running a sales team and suspect the next deal is hiding in information you already have, I would like to compare notes.
