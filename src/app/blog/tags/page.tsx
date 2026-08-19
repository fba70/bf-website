import type { Metadata } from "next";
import Link from "next/link";

import { getAllTags } from "@/lib/tags";
import { siteConfig } from "@/lib/site";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Topics",
  description:
    "Every topic covered on the blog — AI agents, agentic architectures, context graphs, SaaS, and AI-assisted software development.",
  alternates: { canonical: "/blog/tags" },
};

export default function TagsIndexPage() {
  const tags = getAllTags();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog topics",
    url: `${siteConfig.url}/blog/tags`,
    inLanguage: "en",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: tags.length,
      itemListElement: tags.map((tag, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tag.label,
        url: `${siteConfig.url}/blog/tags/${tag.tag}`,
      })),
    },
  };

  return (
    <PageShell
      title="Topics"
      lead={`${tags.length} topics across the blog. Pick one to see every article about it.`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ul className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <li key={tag.tag}>
            <Link
              href={`/blog/tags/${tag.tag}`}
              className="flex items-baseline gap-2 rounded-lg border border-border bg-card px-4 py-2 transition-colors hover:border-primary hover:text-primary"
            >
              <span className="font-medium">{tag.label}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {tag.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
