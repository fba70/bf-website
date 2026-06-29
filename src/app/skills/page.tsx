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
import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, frameworks, and tools I work with.",
}

const categoryIcons: Record<string, LucideIcon> = {
  Science: Atom,
  "Project Management": ClipboardList,
  Concepts: Lightbulb,
  Architectures: Layers,
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  "Tooling & Cloud": Cloud,
  EDW: Database,
  "AI & ML": BrainCircuit,
}

export default function SkillsPage() {
  return (
    <PageShell
      title="Skills"
      lead="Overview of the knowledge, skills, tools and technologies I have and work with"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => {
          const Icon = categoryIcons[group.category] ?? Sparkles
          return (
          <Card key={group.category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                {group.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
          )
        })}
      </div>
    </PageShell>
  )
}
