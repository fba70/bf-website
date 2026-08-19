import { getAllPosts, type PostMeta } from "@/lib/blog";

// Tags that must not be title-cased word by word.
const TAG_LABELS: Record<string, string> = {
  ai: "AI",
  "ai-agents": "AI Agents",
  "ai-coding": "AI Coding",
  "generative-ai": "Generative AI",
  saas: "SaaS",
  seo: "SEO",
  ux: "UX",
  b2b: "B2B",
  cli: "CLI",
  pim: "PIM",
  "bss-oss": "BSS/OSS",
  "r-and-d": "R&D",
  ecommerce: "E-commerce",
  "real-estate": "Real Estate",
  "future-of-work": "Future of Work",
  "developer-tools": "Developer Tools",
  "context-graph": "Context Graph",
  "context-engineering": "Context Engineering",
  "open-source": "Open Source",
};

export type TagInfo = {
  tag: string;
  label: string;
  count: number;
};

export function tagLabel(tag: string): string {
  const known = TAG_LABELS[tag];
  if (known) return known;

  return tag
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getAllTags(): TagInfo[] {
  const counts = new Map<string, number>();

  for (const post of getAllPosts()) {
    for (const tag of post.tags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, label: tagLabel(tag), count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((post) => (post.tags ?? []).includes(tag));
}

/** Other posts that share the most tags with the given post. */
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const all = getAllPosts();
  const current = all.find((post) => post.slug === slug);
  if (!current) return [];

  const tags = new Set(current.tags ?? []);
  if (tags.size === 0) return [];

  return all
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      shared: (post.tags ?? []).filter((tag) => tags.has(tag)).length,
    }))
    .filter((entry) => entry.shared > 0)
    .sort((a, b) => b.shared - a.shared || (a.post.date < b.post.date ? 1 : -1))
    .slice(0, limit)
    .map((entry) => entry.post);
}
