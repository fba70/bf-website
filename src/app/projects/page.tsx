import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/content";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've designed, built, and shipped.",
};

export default function ProjectsPage() {
  return (
    <PageShell
      title="Projects"
      lead="Placeholder projects. Replace these with real work when ready."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-start justify-between gap-2">
                {project.href ? (
                  <Link
                    href={project.href}
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
                {project.href ? (
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                ) : null}
              </CardTitle>
              <CardDescription className="font-mono text-xs">
                {project.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
