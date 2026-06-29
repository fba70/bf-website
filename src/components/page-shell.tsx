import * as React from "react";

import { cn } from "@/lib/utils";

export function PageShell({
  title,
  lead,
  children,
  className,
}: {
  title: string;
  lead?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16", className)}>
      <header className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {lead ? (
          <p className="mt-3 text-lg text-muted-foreground">{lead}</p>
        ) : null}
      </header>
      {children}
    </div>
  );
}
