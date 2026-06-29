import type { Metadata } from "next"

import { skills } from "@/lib/content"
import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, frameworks, and tools I work with.",
}

export default function SkillsPage() {
  return (
    <PageShell
      title="Skills"
      lead="Overview of the knowledge, skills, tools and technologies I have and work with"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <Card key={group.category}>
            <CardHeader>
              <CardTitle>{group.category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="default">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
