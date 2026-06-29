---
title: "Building This Site"
description: "Notes on the stack behind this personal website."
date: "2025-06-20"
tags: ["nextjs", "tailwind", "shadcn"]
---

This site is a placeholder, but the stack underneath is real. A quick tour.

## The stack

- **Next.js (App Router)** for routing and static rendering
- **Tailwind CSS** for styling
- **shadcn/ui** components on top of Radix
- **Northern Lights** theme for the color palette
- A file-based **Markdown** blog — no database required

## Why no database?

Posts are just files. Version-controlled, easy to edit, and they build into
static HTML. For a personal site that's all you need.

```ts
// content is read at build time
const posts = getAllPosts();
```

## What's next

Real content, a proper hero, and an about section. Stay tuned.
