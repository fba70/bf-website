import type { Metadata } from "next";

import { education } from "@/lib/content";
import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Education",
  description: "Degrees, courses, and milestones along the way.",
};

export default function EducationPage() {
  return (
    <PageShell
      title="Education"
      lead="Placeholder education history. Update with real details later."
    >
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <Card key={`${item.school}-${item.credential}`}>
            <CardHeader>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <CardTitle>{item.credential}</CardTitle>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="text-sm font-medium text-primary">{item.school}</p>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {item.detail}
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
