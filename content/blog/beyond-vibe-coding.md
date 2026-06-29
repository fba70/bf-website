---
title: "Beyond \"Vibe Coding\": Why We Need an Agentic Kanban for Team-Based AI Development"
description: "The future of software isn't a smarter text editor — it's a digital assembly line where humans manage and AI executes."
date: "2026-01-19"
tags: ["ai-coding", "agentic", "teams"]
---

> Originally published on [LinkedIn](https://www.linkedin.com/pulse/beyond-vibe-coding-why-we-need-agentic-kanban-ai-boris-fedotov-ph-d--75hff).

#### The future of software isn't just a smarter text editor—it's a digital assembly line where humans manage and AI executes.

The last 12 months in AI development have been dominated by the **Command Line Interfaces (CLI)** and the **IDE Chatbots**. Tools like Cursor, Claude Code, and various open-source CLI agents have revolutionized the *individual* contributor's workflow. We are now in the era of "vibe coding," where a single engineer can spin up a prototype in minutes just by iterating on natural language prompts.

But there is a growing friction. While these CLI tools are powerful, they are natively **single-player experiences**. They trap context in a local terminal session or a private chat window. When scaling from a solo prototype to a team-based product, the "one-man-army" model breaks down.

There is a massive, unaddressed opportunity in the market: **An AI-First Product Management Platform.** Not just a "Jira"-like with a "Summarize" button, but a platform that treats software development as a factory line of autonomous agents, visualized through the timeless interface of a Kanban board.

#### The Concept: The "Human-in-the-Loop" Factory

Imagine a Trello or Linear board, but the cards aren't moving because you dragged them—they are moving because Agents are doing the work. In this model, the human role shifts from "writer" to "reviewer." The workflow looks like this:

**Requirement Phase (Human):** You write a high-level feature request card.

**Coding Phase (Agent):** The card enters the "In Progress" column.

**Validation Phase (Agent):** The card moves to "Testing."**Review Phase (Human):** The card lands in "Final Review."

#### Why This Beats the CLI?

The CLI is great for speed, but it is terrible for **collective intelligence**.

**Context Silos:** In a CLI workflow, the "prompt history" is hidden on one developer's machine. In an Agentic Kanban, the entire reasoning history of the agent (why it chose that library, how it fixed that bug) is attached to the ticket, visible to the whole team.

**Parallelization:** A single user can only run one CLI terminal effectively. A platform can run 50 agents simultaneously on 50 different cards.

**Governance:** You cannot enforce "Quality Gates" in a terminal session. On a platform, you can hard-code rules: *No card moves to 'Done' unless the QA Agent reports 100% test coverage.*

#### The Market Landscape: Is Somebody Building This?

We are seeing early signals of this shift, but the "Holy Grail" platform hasn't fully arrived yet.

**Atlassian's HULA (Research):** Atlassian has published research on a framework called **HULA** (Human-in-the-Loop Agents), which creates a plan, writes code, and raises a PR, waiting for human approval at key stages. This is the exact workflow described, but it is not yet a mainstream product.

**Replit & Databutton:** These platforms are moving closest to this vision. They are increasingly "agent-first," where you prompt an agent to build an app. However, they are often still focused on the *creation* phase rather than the *management* lifecycle of a complex team project.

**Open Source Agents (OpenHands/Devin):** These handle the "coding" part brilliantly but lack the "management layer" to orchestrate multiple streams of work for a team.

#### The Opportunity

The industry is waiting for the tool that bridges the gap between **Project Management** (like Linear/Jira) and **AI Generation** (like Cursor/Claude). We don't need just faster typing and magic behind the scenes of the CLI. We need better orchestration. The first platform to successfully visualize AI agents as workers on a board—where humans are the managers and quality assurance leads—will define the next decade of software engineering.

**Would you use a platform where you only approve the specs and the code? Let me know in the comments.**
