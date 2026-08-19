import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getAllTags, getPostsByTag, tagLabel } from "@/lib/tags";
import { siteConfig } from "@/lib/site";
import { PageShell } from "@/components/page-shell";
import { PostList } from "@/components/post-list";

type Params = { tag: string };

export function generateStaticParams(): Params[] {
  return getAllTags().map((tag) => ({ tag: tag.tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) return {};

  const label = tagLabel(tag);
  const title = `${label} — ${posts.length} ${posts.length === 1 ? "article" : "articles"}`;

  return {
    title: `${label} articles`,
    description: `Every article on ${label} by ${siteConfig.author}, PhD. ${posts.length} ${posts.length === 1 ? "essay" : "essays"}, newest first.`,
    alternates: { canonical: `/blog/tags/${tag}` },
    openGraph: {
      type: "website",
      title,
      url: `${siteConfig.url}/blog/tags/${tag}`,
      description: `Every article on ${label} by ${siteConfig.author}, PhD.`,
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  const label = tagLabel(tag);
  const url = `${siteConfig.url}/blog/tags/${tag}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${label} articles`,
        url,
        inLanguage: "en",
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
          { "@type": "ListItem", position: 1, name: "Blog", item: `${siteConfig.url}/blog` },
          { "@type": "ListItem", position: 2, name: "Topics", item: `${siteConfig.url}/blog/tags` },
          { "@type": "ListItem", position: 3, name: label, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell
      title={label}
      lead={`${posts.length} ${posts.length === 1 ? "article" : "articles"} on ${label}, newest first.`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-8 flex flex-wrap items-center gap-4 text-sm">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>
        <Link
          href="/blog/tags"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          All topics
        </Link>
      </div>

      <PostList posts={posts} activeTag={tag} />
    </PageShell>
  );
}
