import { getAllPosts, getPost, type Post } from "@/lib/blog";
import { toMarkdownSection } from "@/lib/markdown-export";
import { siteConfig } from "@/lib/site";

// Prerendered at build time; regenerates when content changes.
export const dynamic = "force-static";

export function GET(): Response {
  const base = siteConfig.url.replace(/\/$/, "");
  const posts = getAllPosts()
    .map((meta) => getPost(meta.slug))
    .filter((post): post is Post => post !== null);

  const header = `# ${siteConfig.author}, PhD — full article text

> Every essay on ${base}, newest first, as plain Markdown in one file.
> PhD physicist and serial CTO who still architects and ships code.
> Co-founder of truffalo.ai. Writes about AI agents, agentic architectures,
> context graphs, the evolution of SaaS, and AI-assisted software development.

- Site: ${base}
- Index: ${base}/llms.txt
- Feed: ${base}/feed.xml
- Single article as Markdown: ${base}/blog/<slug>.md
- Articles: ${posts.length}
- Author: ${siteConfig.author}
- Contact: ${siteConfig.email}
`;

  const body = posts.map(toMarkdownSection).join("\n---\n\n");

  return new Response(`${header}\n---\n\n${body}`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}
