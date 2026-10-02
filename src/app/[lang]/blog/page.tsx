import type { Metadata } from "next"
import Link from "next/link"

import { getAllPosts, postDescription } from "@/lib/blog"
import { getAllTags } from "@/lib/tags"
import { siteConfig } from "@/lib/site"
import { getDictionary } from "@/lib/dictionaries"
import { localePath, pageAlternates } from "@/lib/i18n"
import { getLocale, type LangParams } from "@/lib/locale-params"
import { PageShell } from "@/components/page-shell"
import { PostList } from "@/components/post-list"
import { Badge } from "@/components/ui/badge"

type Props = { params: Promise<LangParams> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params)
  const t = getDictionary(locale).blog
  return {
    title: t.title,
    description: t.description,
    alternates: {
      ...pageAlternates(locale, "/blog"),
      types: {
        "application/rss+xml": `${siteConfig.url}/feed.xml`,
      },
    },
  }
}

export default async function BlogPage({ params }: Props) {
  const locale = await getLocale(params)
  const t = getDictionary(locale).blog
  const posts = getAllPosts()
  const tags = getAllTags(locale)
  const base = siteConfig.url

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${base}/blog`,
    name: `${siteConfig.name} — Blog`,
    description: t.description,
    url: `${base}${localePath(locale, "/blog")}`,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: siteConfig.author,
      url: base,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: postDescription(post, locale),
      datePublished: post.date,
      // Articles are English only, so they always point at the English URL.
      url: `${base}/blog/${post.slug}`,
      keywords: post.tags,
    })),
  }

  return (
    <PageShell title={t.title} lead={t.lead}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {tags.length > 0 ? (
        <nav
          aria-label={t.browseByTopic}
          className="mb-10 flex flex-wrap items-center gap-2"
        >
          <span className="mr-1 text-xs text-muted-foreground">
            {t.topicsLabel}
          </span>
          {tags.slice(0, 12).map((tag) => (
            <Badge key={tag.tag} asChild variant="secondary">
              <Link href={localePath(locale, `/blog/tags/${tag.tag}`)}>
                {tag.label} ({tag.count})
              </Link>
            </Badge>
          ))}
          <Badge asChild variant="outline">
            <Link href={localePath(locale, "/blog/tags")}>
              {t.allTopicsArrow}
            </Link>
          </Badge>
        </nav>
      ) : null}

      <PostList posts={posts} locale={locale} />
    </PageShell>
  )
}
