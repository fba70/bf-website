import type { Metadata } from "next"
import Link from "next/link"

import { getAllPosts } from "@/lib/blog"
import { getAllTags } from "@/lib/tags"
import { siteConfig } from "@/lib/site"
import { PageShell } from "@/components/page-shell"
import { PostList } from "@/components/post-list"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays on AI agents, agentic architectures, context graphs, and the evolution of SaaS — by Boris Fedotov, PhD.",
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
    },
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blog`,
    name: `${siteConfig.name} — Blog`,
    description: metadata.description,
    url: `${siteConfig.url}/blog`,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: siteConfig.author,
      url: siteConfig.url,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `${siteConfig.url}/blog/${post.slug}`,
      keywords: post.tags,
    })),
  }

  return (
    <PageShell
      title="Blog"
      lead="Some of my articles originally posted on LinkedIn"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {tags.length > 0 ? (
        <nav
          aria-label="Browse by topic"
          className="mb-10 flex flex-wrap items-center gap-2"
        >
          <span className="mr-1 text-xs text-muted-foreground">Topics:</span>
          {tags.slice(0, 12).map((tag) => (
            <Badge key={tag.tag} asChild variant="secondary">
              <Link href={`/blog/tags/${tag.tag}`}>
                {tag.label} ({tag.count})
              </Link>
            </Badge>
          ))}
          <Badge asChild variant="outline">
            <Link href="/blog/tags">All topics →</Link>
          </Badge>
        </nav>
      ) : null}

      <PostList posts={posts} />
    </PageShell>
  )
}
