import type { Metadata } from "next";
import Link from "next/link";

import { getAllTags } from "@/lib/tags";
import { siteConfig } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, pageAlternates } from "@/lib/i18n";
import { getLocale, type LangParams } from "@/lib/locale-params";
import { PageShell } from "@/components/page-shell";

type Props = { params: Promise<LangParams> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = getDictionary(locale).tags;
  return {
    title: t.title,
    description: t.description,
    alternates: pageAlternates(locale, "/blog/tags"),
  };
}

export default async function TagsIndexPage({ params }: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale).tags;
  const tags = getAllTags(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t.collectionName,
    url: `${siteConfig.url}${localePath(locale, "/blog/tags")}`,
    inLanguage: locale,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: tags.length,
      itemListElement: tags.map((tag, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tag.label,
        url: `${siteConfig.url}${localePath(locale, `/blog/tags/${tag.tag}`)}`,
      })),
    },
  };

  return (
    <PageShell title={t.title} lead={t.lead(tags.length)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ul className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <li key={tag.tag}>
            <Link
              href={localePath(locale, `/blog/tags/${tag.tag}`)}
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
