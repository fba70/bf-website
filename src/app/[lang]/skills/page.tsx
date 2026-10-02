import type { Metadata } from "next"
import {
  Atom,
  ClipboardList,
  Lightbulb,
  Layers,
  Code2,
  Layout,
  Server,
  Cloud,
  Database,
  BrainCircuit,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

import { skills } from "@/lib/content"
import { getDictionary } from "@/lib/dictionaries"
import { pageAlternates, tr } from "@/lib/i18n"
import { getLocale, type LangParams } from "@/lib/locale-params"
import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = { params: Promise<LangParams> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params)
  const t = getDictionary(locale).skills
  return {
    title: t.title,
    description: t.description,
    alternates: pageAlternates(locale, "/skills"),
  }
}

const categoryIcons: Record<string, LucideIcon> = {
  science: Atom,
  "project-management": ClipboardList,
  concepts: Lightbulb,
  architectures: Layers,
  languages: Code2,
  frontend: Layout,
  backend: Server,
  "tooling-cloud": Cloud,
  edw: Database,
  "ai-ml": BrainCircuit,
}

export default async function SkillsPage({ params }: Props) {
  const locale = await getLocale(params)
  const t = getDictionary(locale).skills

  return (
    <PageShell title={t.title} lead={t.lead}>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => {
          const Icon = categoryIcons[group.key] ?? Sparkles
          return (
            <Card key={group.key}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  {tr(group.category, locale)}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const label = tr(item, locale)
                  return (
                    <Badge key={label} variant="secondary">
                      {label}
                    </Badge>
                  )
                })}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </PageShell>
  )
}
