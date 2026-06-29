# Personal Website

Personal site built with **Next.js (App Router)**, **Tailwind CSS**, **shadcn/ui**,
and the **Northern Lights** theme. File-based Markdown blog — no database.

## Develop

```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
content/blog/          Markdown posts (*.md) — the blog source
src/app/               Routes: / skills / projects / education / blog
src/components/        Header, footer, theme toggle, markdown renderer, UI
src/lib/site.ts        Name, tagline, URL, social links, nav items
src/lib/content.ts     Placeholder data for skills / projects / education
src/lib/blog.ts        Markdown loading + frontmatter parsing
src/app/globals.css    Northern Lights theme tokens (light + dark)
public/llms.txt        Description for AI crawlers
```

## Edit content

- **Identity & links:** `src/lib/site.ts` (name, tagline, `url`, GitHub/LinkedIn/email).
- **Skills / Projects / Education:** `src/lib/content.ts`.
- **Home & page copy:** the respective `src/app/*/page.tsx` files.

## Add a blog post

Create a Markdown file in `content/blog/`, e.g. `content/blog/my-post.md`:

```md
---
title: "My Post"
description: "A short summary used in listings and SEO."
date: "2025-06-15"
tags: ["tag-one", "tag-two"]
draft: false
---

Your **Markdown** content here.
```

The post appears automatically at `/blog/my-post`. Set `draft: true` to hide it
from production (drafts still show in dev). Supports GitHub Flavored Markdown.

## Before launch

- Set the real domain in `src/lib/site.ts` (`url`) — it drives metadata,
  Open Graph, `sitemap.xml`, and `robots.txt`.
- Fill in real GitHub / LinkedIn / email in `site.ts`.
- Update `public/llms.txt` once content is final.
- Optionally add an OG image (`src/app/opengraph-image.tsx` or a static file).

## Theme

Colors live in `src/app/globals.css` as CSS variables (`:root` light, `.dark`
dark). Theme switching is handled by `next-themes`; toggle is in the header.
Regenerate or tweak the palette at
[tweakcn.com](https://tweakcn.com/editor/theme?theme=northern-lights).
