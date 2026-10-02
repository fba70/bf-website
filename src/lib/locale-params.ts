import { notFound } from "next/navigation"

import { hasLocale, type Locale } from "@/lib/i18n"

export type LangParams = { lang: string }

/** Reads `lang` from route params. Unknown locales render the 404 page. */
export async function getLocale(params: Promise<LangParams>): Promise<Locale> {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return lang
}
