"use client"

import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  localeNames,
  localePath,
  locales,
  stripLocale,
  type Locale,
} from "@/lib/i18n"

/**
 * EN | DE toggle. Links to the same page in the other language.
 *
 * The pathname is stripped of any locale prefix first. That keeps the server
 * render (internal /en/... path) and the browser (/...) in agreement, so the
 * links hydrate without a mismatch.
 *
 * These are plain <a> tags on purpose. `lang` belongs to the root layout, so a
 * client-side switch would rebuild the whole layout in the browser. next-themes
 * then renders its inline theme script on the client, and React warns about a
 * <script> tag. A full page load for the language switch avoids that and loads
 * the page fresh in the new language.
 */
export function LanguageSwitch({
  locale,
  label,
}: {
  locale: Locale
  label: string
}) {
  const path = stripLocale(usePathname() ?? "/")

  return (
    <nav
      aria-label={label}
      className="flex items-center rounded-md border border-border p-0.5"
    >
      {locales.map((l) => {
        const active = l === locale
        return (
          <a
            key={l}
            href={localePath(l, path)}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            title={localeNames[l]}
            className={cn(
              "rounded-[5px] px-2 py-1 font-mono text-xs font-medium uppercase transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {l}
          </a>
        )
      })}
    </nav>
  )
}
