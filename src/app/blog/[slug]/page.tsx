import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText } from "lucide-react";

import { getAllPosts, getPost, formatDate } from "@/lib/blog";
import { getRelatedPosts, tagLabel } from "@/lib/tags";
import { siteConfig } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Markdown } from "@/components/markdown";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
      types: {
        "text/markdown": `${url}.md`,
        "application/rss+xml": `${siteConfig.url}/feed.xml`,
      },
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [siteConfig.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const related = getRelatedPosts(post.slug);
  const wordCount = post.content.trim().split(/\s+/).length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": url,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        image: `${url}/opengraph-image`,
        keywords: post.tags,
        articleSection: post.tags?.map(tagLabel),
        wordCount,
        timeRequired: `PT${post.readingTime}M`,
        inLanguage: "en",
        isPartOf: { "@type": "Blog", "@id": `${siteConfig.url}/blog` },
        author: {
          "@type": "Person",
          name: siteConfig.author,
          url: siteConfig.url,
          sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
        },
        publisher: {
          "@type": "Person",
          name: siteConfig.author,
          url: siteConfig.url,
        },
        ...(post.source ? { isBasedOn: post.source } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Blog", item: `${siteConfig.url}/blog` },
          { "@type": "ListItem", position: 2, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>

      <header className="mt-6 mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime} min read</span>
          <span>·</span>
          <a
            href={`/blog/${post.slug}.md`}
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            title="Read this article as plain Markdown"
          >
            <FileText className="h-3.5 w-3.5" /> Markdown
          </a>
        </div>
        {post.tags && post.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} asChild variant="secondary">
                <Link href={`/blog/tags/${tag}`}>{tagLabel(tag)}</Link>
              </Badge>
            ))}
          </div>
        ) : null}
      </header>

      <Markdown>{post.content}</Markdown>

      {related.length > 0 ? (
        <aside className="mt-16 border-t border-border pt-8">
          <h2 className="text-lg font-semibold tracking-tight">
            Related articles
          </h2>
          <ul className="mt-4 flex flex-col gap-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`} className="group block">
                  <span className="font-medium group-hover:text-primary">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </article>
  );
}
