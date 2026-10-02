import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Wrench,
  FolderGit2,
  Building2,
  GraduationCap,
  PenLine,
  GlobeCheck
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, pageAlternates } from "@/lib/i18n";
import { getLocale, type LangParams } from "@/lib/locale-params";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = { params: Promise<LangParams> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  return {
    alternates: {
      ...pageAlternates(locale, "/"),
      types: {
        "application/rss+xml": `${siteConfig.url}/feed.xml`,
      },
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteConfig.author,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    },
  ],
};

const highlights = [
  { key: "skills", href: "/skills", icon: Wrench },
  { key: "projects", href: "/projects", icon: FolderGit2 },
  { key: "companies", href: "/companies", icon: Building2 },
  { key: "education", href: "/education", icon: GraduationCap },
  { key: "blog", href: "/blog", icon: PenLine },
] as const;

export default async function HomePage({ params }: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale);

  const jsonLd = {
    ...personJsonLd,
    "@graph": [
      ...personJsonLd["@graph"],
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: t.site.description,
        inLanguage: ["en", "de"],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="flex flex-col items-start gap-8 py-20 sm:flex-row sm:items-center sm:gap-12 sm:py-28">
        <Image
          src="/BF_foto.jpg"
          alt={siteConfig.name}
          width={1000}
          height={1000}
          priority
          className="h-40 w-40 shrink-0 rounded-full border-4 border-border object-cover shadow-sm sm:h-64 sm:w-64"
        />
        <div>
          <p className="font-mono text-base text-primary">{t.home.greeting}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            {siteConfig.name}, PhD
          </h1>
          {t.home.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" /> {t.home.contact}
              </a>
            </Button>
            <Button asChild>
              <a href="https://www.linkedin.com/in/bfedotov/" target="_blank" rel="noopener noreferrer">
                <GlobeCheck className="h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="/BF_CV.pdf" download>
                {t.home.downloadCv}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      {t.home.about.map((paragraph, i) => (
        <section
          key={paragraph}
          className={i === t.home.about.length - 1 ? "pb-14" : "pb-8"}
        >
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        </section>
      ))}

      {/* Section cards */}
      <section className="grid gap-4 pb-24 sm:grid-cols-2">
        {highlights.map((h) => (
          <Link key={h.href} href={localePath(locale, h.href)} className="group">
            <Card className="h-full transition-colors group-hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <h.icon className="h-5 w-5 text-primary" />
                    {t.nav[h.key]}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {t.home.highlights[h.key]}
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
