---
title: "The Internet Is About to Lose Its Face"
description: "Websites, search boxes and checkout pages are the part of the internet we see, and personal agents are about to remove them. What that means for consumers, SMBs and the still-open enterprise question."
description_de: "Websites, Suchfelder und Checkout-Seiten sind der sichtbare Teil des Internets, und persönliche Agenten werden ihn bald überflüssig machen. Was das für Verbraucher, KMU und die noch offene Frage der Großunternehmen bedeutet."
date: "2026-10-05"
tags: ["ai-agents", "internet", "strategy", "saas", "protocols"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/pulse/internet-lose-its-face-boris-fedotov-ph-d--kdfrf/).

The internet as we know it may not exist in three to five years. Not the cables, not the servers, not the services. What disappears is the part we actually see: the websites, the search boxes, the ten blue links, the checkout pages. The internet is about to lose its face.

That sounds dramatic until you look at how people already use AI assistants today. Nobody opens a chatbot to be sent to a website. They open it to get the thing done. The website is a detour, and detours get removed.

#### Nobody will crawl websites anymore

For 25 years the user did the crawling. You searched, compared tabs, read reviews, filled forms, and clicked "confirm". Every product, service and piece of entertainment had to win that human attention with a homepage, a funnel and an app.

That job is moving to software. When you can say "find me a dentist near the office with a slot on Thursday and book it", you stop visiting dentist websites. When you can say "something like the last series I liked, under two hours", you stop scrolling catalogues. The human stays in the loop for taste and decisions, not for navigation.

The consequence for anyone who sells online: your website stops being the shop. It becomes, at best, a brochure that an agent reads once.

#### A few apps, a personal agent, and no UI in between

Here is what I think the stack looks like. Each person lives inside a handful of apps: a messaging app, an assistant app, maybe one from their phone or car maker. Inside those apps runs a personal agent that knows your calendar, your preferences, your payment methods and your history.

Behind the agent sits the rest of the internet, but not as pages. Airlines, pharmacies, restaurants, streaming services, insurers and local plumbers expose themselves as services: a catalogue of what they can do, with prices, availability and terms, in a machine-readable form. No screens. No buttons. Just capabilities.

The glue is agent-to-agent (A2A) protocols and tool interfaces. Your agent discovers a service, negotiates with its agent, checks a slot, pays, and gets a confirmation back, all without rendering a single pixel. The UI budget that companies spend today on web and mobile front-ends shifts toward being discoverable, trustworthy and easy for another agent to work with.

The big platforms know this. Whoever owns the app with the agent owns the relationship. Everyone else becomes a supplier.

#### For personal use, the picture is mostly clear

I don't think the consumer side is a hard prediction anymore. The direction is set; what remains is engineering. Three things still need to mature before it works end to end:

- **Integration standards.** Service discovery, capability descriptions and payment handshakes need to converge on a small number of protocols, the way the web converged on HTTP and HTML. Today we have several competing drafts and a lot of bespoke adapters.
- **Agent platforms.** The apps hosting the agent need robust memory, permissions and identity. "Pay for this" has to be safe when a piece of software is pushing the button on your behalf.
- **Trust and liability.** When the agent books the wrong flight, who eats the cost? Consumer protection, refunds and dispute handling have to be rebuilt for a world where the buyer never saw the page.

None of these are research problems. They are standards, product and regulation work, and that kind of work tends to happen in a three-to-five-year window once the commercial pressure is there. The pressure is there.

#### The open question is business users

At work, the services you need are not public. They are the CRM, the finance system, HR, ticketing, the analytics warehouse, the knowledge base, the internal tools nobody outside the company has heard of. They sit behind SSO, carry sensitive data, and come with permission models that took years to get right.

For large enterprises I find this hard to predict. The incentives pull in different directions. IT wants control and auditability; employees want the same frictionless agent they have at home. Vendors want their own agent to be the front door; the enterprise wants one agent, not forty. Add data residency, regulated industries and decade-old ERPs, and you get a transition that will be slow, uneven and probably shaped more by procurement than by technology.

I expect enterprises to end up with a layered answer: a corporate agent platform as the front door, with vendor agents plugged in underneath and a policy layer deciding who can ask for what. But the shape of that layer, and who owns it, is still up for grabs.

#### For SMBs, the future looks like the consumer one

Small and mid-sized businesses are a different story, and here I'm fairly confident. An SMB does not run a custom ERP. It runs a dozen SaaS tools: a CRM, an accounting package, a payroll provider, a help-desk, a scheduling tool, a couple of marketplaces. Those tools already live in the cloud and already have APIs. The gap between "consumer service" and "SMB business platform" is smaller than it looks.

So the same pattern repeats. The SMB owner and their staff will work from a few agent apps, most likely the ones from the big platforms they already use for mail, chat and documents. The business platforms will build integrations and adapters for those agents, the same way they built mobile apps a decade ago and Slack or Teams integrations after that. A CRM that cannot be driven by the owner's assistant will lose to one that can.

What changes is the feature set. SMB use of these agents needs things consumers don't:

- **Roles and approval.** The agent that drafts an invoice is not the agent that sends it. Permissions have to map to who the person is in the company, not just whose phone it is.
- **Shared context.** The agent needs to know the customer, the open ticket and the unpaid invoice together, across tools from different vendors.
- **Audit trail.** Every action taken on behalf of the business has to be traceable, for accountants, auditors and the owner who wants to know what happened while they were away.
- **Vertical depth.** A dental practice, a logistics firm and a design agency need different defaults. The platforms that win SMB will be the ones that package these specializations rather than ship a generic assistant.

For SMB software vendors, the strategic question is simple and uncomfortable: are you the agent, or are you a tool the agent calls? Most will be the latter, and the sooner they build for that, the better their position.

#### What this means now

If you build consumer services, start treating your API as the product and your website as documentation. If you sell to SMBs, decide which agent platforms you will plug into and build the roles, context and audit features they will demand. If you run enterprise IT, start thinking about the policy layer, because the vendors will not wait for you.

The internet is not going away. It is going behind the curtain. The question for every one of us is which side of the curtain we end up on.

I'm curious how others see the enterprise side playing out. One corporate agent as the front door, or every vendor pushing its own? Let me know in the comments.
