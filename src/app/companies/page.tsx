import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { companies } from "@/lib/content";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Companies",
  description: "Companies I've founded and worked with over the years.",
};

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function CompaniesPage() {
  return (
    <PageShell
      title="Companies"
      lead="Companies I've founded and worked with over the years."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {companies.map((company, i) => (
          <Card key={`${company.name}-${i}`} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle>{company.name}</CardTitle>
                <Badge variant="secondary" className="shrink-0 font-mono">
                  {company.from} — {company.to}
                </Badge>
              </div>
              <p className="text-sm font-medium text-primary">{company.role}</p>
            </CardHeader>
            <CardContent className="mt-auto">
              {company.url ? (
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {hostname(company.url)}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
