// Locale routing helpers. English is the default and lives at the bare URL
// (/blog); German lives under a /de prefix (/de/blog). `src/proxy.ts` rewrites
// bare URLs to the internal /en/... route so both share app/[lang].

export const locales = ["en", "de"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
}

/** Open Graph locale codes. */
export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
}

/** BCP 47 tags for Intl date formatting. */
const intlLocales: Record<Locale, string> = {
  en: "en-US",
  de: "de-DE",
}

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** "/blog" → "/blog" for English, "/de/blog" for German. */
export function localePath(locale: Locale, href: string): string {
  const clean = href.startsWith("/") ? href : `/${href}`
  if (locale === defaultLocale) return clean
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`
}

/** Removes any locale prefix: "/de/blog" → "/blog", "/en" → "/". */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/")
  if (parts[1] && hasLocale(parts[1])) {
    const rest = `/${parts.slice(2).join("/")}`
    return rest === "/" ? "/" : rest.replace(/\/$/, "")
  }
  return pathname || "/"
}

/**
 * `alternates` for a page that exists in both languages: a canonical URL for
 * the current locale plus hreflang links to every translation.
 */
export function pageAlternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
      "x-default": localePath(defaultLocale, path),
    },
  }
}

export function formatDate(date: string, locale: Locale): string {
  if (!date) return ""
  return new Date(date).toLocaleDateString(intlLocales[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

/** Compact form for card corners, e.g. "Sep 10, 2026" / "10. Sept. 2026". */
export function formatDateShort(date: string, locale: Locale): string {
  if (!date) return ""
  return new Date(date).toLocaleDateString(intlLocales[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

/** A string that may carry a German translation. */
export type Text = string | { en: string; de: string }

export function tr(text: Text, locale: Locale): string {
  return typeof text === "string" ? text : text[locale]
}
