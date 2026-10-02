import type { Metadata } from "next"

import { education, courses } from "@/lib/content"
import { getDictionary } from "@/lib/dictionaries"
import { pageAlternates, tr } from "@/lib/i18n"
import { getLocale, type LangParams } from "@/lib/locale-params"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = { params: Promise<LangParams> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params)
  const t = getDictionary(locale).education
  return {
    title: t.title,
    description: t.description,
    alternates: pageAlternates(locale, "/education"),
  }
}

export default async function EducationPage({ params }: Props) {
  const locale = await getLocale(params)
  const t = getDictionary(locale).education

  return (
    <PageShell title={t.title} lead={t.lead}>
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <Card key={item.period}>
            <CardHeader>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <CardTitle>{tr(item.credential, locale)}</CardTitle>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="text-sm font-medium text-primary">{tr(item.school, locale)}</p>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {tr(item.detail, locale)}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">
          {t.coursesTitle}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t.coursesLead}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={tr(course.name, "en")}>
              <CardContent className="py-2 text-sm font-medium">
                {tr(course.name, locale)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
