import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteConfig.author,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
  ],
};

const highlights = [
  {
    title: "Skills",
    href: "/skills",
    blurb: "Languages, frameworks, and tools I work with day to day.",
  },
  {
    title: "Projects",
    href: "/projects",
    blurb: "A selection of things I've designed, built, and shipped.",
  },
  {
    title: "Education",
    href: "/education",
    blurb: "Degrees, courses, and the milestones along the way.",
  },
  {
    title: "Blog",
    href: "/blog",
    blurb: "Notes and longer-form writing on what I'm learning.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <p className="font-mono text-sm text-primary">Hello, I&apos;m</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          This is placeholder copy. I&apos;m an engineer and builder who likes
          turning fuzzy ideas into shipped products. This site is a work in
          progress — content and design are coming soon.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/projects">
              View projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">Read the blog</Link>
          </Button>
        </div>
      </section>

      {/* Section cards */}
      <section className="grid gap-4 pb-24 sm:grid-cols-2">
        {highlights.map((h) => (
          <Link key={h.href} href={h.href} className="group">
            <Card className="h-full transition-colors group-hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {h.title}
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {h.blurb}
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
