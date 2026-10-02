import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getAllTags, getPostsByTag, tagLabel } from "@/lib/tags";
import { siteConfig } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, pageAlternates } from "@/lib/i18n";
import { getLocale } from "@/lib/locale-params";
import { PageShell } from "@/components/page-shell";
import { PostList } from "@/components/post-list";

type Params = { lang: string; tag: string };

export function generateStaticParams(): Pick<Params, "tag">[] {
  return getAllTags().map((tag) => ({ tag: tag.tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = getDictionary(locale).tags;
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) return {};

  const label = tagLabel(tag, locale);
  const path = `/blog/tags/${tag}`;

  return {
    title: t.tagTitle(label),
    description: t.tagDescription(label, siteConfig.author, posts.length),
    alternates: pageAlternates(locale, path),
    openGraph: {
      type: "website",
      title: t.tagOgTitle(label, posts.length),
      url: `${siteConfig.url}${localePath(locale, path)}`,
      description: t.tagOgDescription(label, siteConfig.author),
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const locale = await getLocale(params);
  const dict = getDictionary(locale);
  const t = dict.tags;
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  const label = tagLabel(tag, locale);
  const base = siteConfig.url;
  const url = `${base}${localePath(locale, `/blog/tags/${tag}`)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: t.tagTitle(label),
        url,
        inLanguage: locale,
        about: { "@type": "Thing", name: label },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: posts.length,
          itemListElement: posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${siteConfig.url}/blog/${post.slug}`,
            name: post.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.blog.title, item: `${base}${localePath(locale, "/blog")}` },
          { "@type": "ListItem", position: 2, name: t.title, item: `${base}${localePath(locale, "/blog/tags")}` },
          { "@type": "ListItem", position: 3, name: label, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell title={label} lead={t.tagLead(label, posts.length)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-8 flex flex-wrap items-center gap-4 text-sm">
        <Link
          href={localePath(locale, "/blog")}
          className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> {t.allArticles}
        </Link>
        <Link
          href={localePath(locale, "/blog/tags")}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.allTopics}
        </Link>
      </div>

      <PostList posts={posts} locale={locale} activeTag={tag} />
    </PageShell>
  );
}
