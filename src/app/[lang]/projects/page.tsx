import type { Metadata } from "next"

import { projects, projectTag, type ProjectCategory } from "@/lib/content"
import { getDictionary } from "@/lib/dictionaries"
import { pageAlternates, tr } from "@/lib/i18n"
import { getLocale, type LangParams } from "@/lib/locale-params"
import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = { params: Promise<LangParams> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params)
  const t = getDictionary(locale).projects
  return {
    title: t.title,
    description: t.description,
    alternates: pageAlternates(locale, "/projects"),
  }
}

const categoryStyles: Record<ProjectCategory, string> = {
  "project management":
    "border-transparent bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "data management":
    "border-transparent bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "software development":
    "border-transparent bg-violet-500/10 text-violet-600 dark:text-violet-400",
  "AI tools":
    "border-transparent bg-amber-500/10 text-amber-600 dark:text-amber-400",
}

function LevelMeter({
  label,
  level,
  levelLabel,
}: {
  label: string
  level: 1 | 2 | 3
  levelLabel: Record<1 | 2 | 3, string>
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[1, 2, 3].map((dot) => (
            <span
              key={dot}
              className={
                dot <= level
                  ? "h-1.5 w-4 rounded-full bg-primary"
                  : "h-1.5 w-4 rounded-full bg-muted"
              }
            />
          ))}
        </div>
        <span className="font-medium">{levelLabel[level]}</span>
      </div>
    </div>
  )
}

export default async function ProjectsPage({ params }: Props) {
  const locale = await getLocale(params)
  const t = getDictionary(locale).projects

  return (
    <PageShell title={t.title} lead={t.lead}>
      <div className="grid gap-4 sm:grid-cols-2">
        {[...projects].reverse().map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <Badge
                className={`w-fit capitalize ${categoryStyles[project.category]}`}
              >
                {t.categories[project.category]}
              </Badge>
              <CardTitle className="text-base leading-snug">
                {tr(project.name, locale)}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col gap-3 text-sm">
              <LevelMeter
                label={t.complexity}
                level={project.complexity}
                levelLabel={t.levels}
              />
              {project.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {projectTag(tag, locale)}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
