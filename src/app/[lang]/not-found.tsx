"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

// not-found files get no route params, so the locale comes from the URL.
// German URLs start with /de; everything else is English.
const text = {
  en: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has moved.",
    back: "Back home",
    home: "/",
  },
  de: {
    title: "Seite nicht gefunden",
    body: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    back: "Zur Startseite",
    home: "/de",
  },
};

export default function NotFound() {
  const pathname = usePathname() ?? "/";
  const t = /^\/de(\/|$)/.test(pathname) ? text.de : text.en;

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {t.title}
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">{t.body}</p>
      <Button asChild className="mt-8">
        <Link href={t.home}>{t.back}</Link>
      </Button>
    </div>
  );
}
