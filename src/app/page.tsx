import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Mail,
  Wrench,
  FolderGit2,
  Building2,
  GraduationCap,
  PenLine,
} from "lucide-react"

import { siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
}

const highlights = [
  {
    title: "Skills",
    href: "/skills",
    icon: Wrench,
    blurb: "Languages, frameworks, and tools I work with day to day",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderGit2,
    blurb: "A selection of things I've designed, built, and shipped",
  },
  {
    title: "Companies",
    href: "/companies",
    icon: Building2,
    blurb: "Companies I've founded and worked with over the years",
  },
  {
    title: "Education",
    href: "/education",
    icon: GraduationCap,
    blurb: "Degrees, courses, and the milestones along the way",
  },
  {
    title: "Blog",
    href: "/blog",
    icon: PenLine,
    blurb: "Notes and longer-form writing on what I'm learning",
  },
]

export default function HomePage() {
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
          className="h-40 w-40 shrink-0 rounded-full border-4 border-border object-cover shadow-sm sm:h-56 sm:w-56"
        />
        <div>
          <p className="font-mono text-base text-primary">Hello, I&apos;m</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
            {siteConfig.name}, PhD
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            I&apos;m PhD physicist and serial CTO with 25+ years experience who
            still architects and ships the code to my own and customer projects
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" /> Contact me
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="/BF_CV.pdf" download>
                Download my CV
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-16">
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          Ideas are the cornerstones of business. I help ideas to take shape and
          become solutions to address the challenges my clients and partners
          have in modern competitive environment. I put together vision and
          strategy, subject matter expertise and experience, software
          architecture and software development skills, known technologies and
          scientific research, and finally all my time and energy to make that
          happen
        </p>
      </section>
      <section className="pb-16">
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          Since 2015 I live and work in Vienna, Austria. Always happy to talk to
          friends, partners and new contacts in Europe, US and Middle East about
          projects and interesting ideas
        </p>
      </section>

      {/* Section cards */}
      <section className="grid gap-4 pb-24 sm:grid-cols-2">
        {highlights.map((h) => (
          <Link key={h.href} href={h.href} className="group">
            <Card className="h-full transition-colors group-hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <h.icon className="h-5 w-5 text-primary" />
                    {h.title}
                  </span>
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
  )
}
