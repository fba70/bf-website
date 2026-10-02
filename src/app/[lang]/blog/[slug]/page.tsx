import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText, Languages } from "lucide-react";

import { getAllPosts, getPost, formatDate, postDescription } from "@/lib/blog";
import { getRelatedPosts, tagLabel } from "@/lib/tags";
import { siteConfig } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, ogLocales, type Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/locale-params";
import { Badge } from "@/components/ui/badge";
import { Markdown } from "@/components/markdown";

type Params = { lang: string; slug: string };

export function generateStaticParams(): Pick<Params, "slug">[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const locale = await getLocale(params);
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  // The article body is English only, so every language version names the
  // English page as canonical. Search engines then index one copy.
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const description = postDescription(post, locale);
  return {
    title: post.title,
    description,
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
      locale: ogLocales[locale],
      title: post.title,
      description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [siteConfig.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const locale: Locale = await getLocale(params);
  const t = getDictionary(locale).blog;
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
        articleSection: post.tags?.map((tag) => tagLabel(tag)),
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
        href={localePath(locale, "/blog")}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> {t.backToBlog}
      </Link>

      {t.englishOnly ? (
        <p className="mt-6 flex items-start gap-2 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
          <Languages className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          {t.englishOnly}
        </p>
      ) : null}

      <header className="mt-6 mb-10">
        <h1 lang="en" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
          <span>·</span>
          <span>{t.minRead(post.readingTime)}</span>
          <span>·</span>
          <a
            href={`/blog/${post.slug}.md`}
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            title={t.markdownTitle}
          >
            <FileText className="h-3.5 w-3.5" /> Markdown
          </a>
        </div>
        {post.tags && post.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} asChild variant="secondary">
                <Link href={localePath(locale, `/blog/tags/${tag}`)}>
                  {tagLabel(tag, locale)}
                </Link>
              </Badge>
            ))}
          </div>
        ) : null}
      </header>

      <div lang="en">
        <Markdown>{post.content}</Markdown>
      </div>

      {related.length > 0 ? (
        <aside className="mt-16 border-t border-border pt-8">
          <h2 className="text-lg font-semibold tracking-tight">
            {t.related}
          </h2>
          <ul className="mt-4 flex flex-col gap-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={localePath(locale, `/blog/${item.slug}`)}
                  className="group block"
                >
                  <span lang="en" className="font-medium group-hover:text-primary">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {postDescription(item, locale)}
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
