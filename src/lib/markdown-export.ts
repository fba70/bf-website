import type { Post, PostMeta } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const base = siteConfig.url.replace(/\/$/, "");

export function postUrl(post: PostMeta): string {
  return `${base}/blog/${post.slug}`;
}

function yamlList(items: readonly string[]): string {
  return `[${items.map((item) => JSON.stringify(item)).join(", ")}]`;
}

/**
 * A single post as a self-contained Markdown document: front matter that names
 * the canonical URL and author, then the body. Served at /blog/<slug>.md so
 * agents can read an article without parsing HTML.
 */
export function toMarkdownDocument(post: Post): string {
  const frontmatter = [
    "---",
    `title: ${JSON.stringify(post.title)}`,
    `description: ${JSON.stringify(post.description)}`,
    `date: ${JSON.stringify(post.date)}`,
    `tags: ${yamlList(post.tags ?? [])}`,
    `author: ${JSON.stringify(`${siteConfig.author}, PhD`)}`,
    `canonical: ${JSON.stringify(postUrl(post))}`,
    `reading_time_minutes: ${post.readingTime}`,
    "---",
  ].join("\n");

  return `${frontmatter}\n\n# ${post.title}\n\n${post.content.trim()}\n`;
}

/** Body only, with a heading and source link — used inside llms-full.txt. */
export function toMarkdownSection(post: Post): string {
  const meta = [
    `Date: ${post.date}`,
    `Tags: ${(post.tags ?? []).join(", ") || "—"}`,
    `URL: ${postUrl(post)}`,
  ].join(" | ");

  return `# ${post.title}\n\n${meta}\n\n> ${post.description}\n\n${post.content.trim()}\n`;
}
