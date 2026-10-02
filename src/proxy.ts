import { NextResponse, type NextRequest } from "next/server"

import { defaultLocale, hasLocale } from "@/lib/i18n"

/**
 * English pages keep their bare URLs (/blog). German pages live under /de
 * (/de/blog). Every page is built under app/[lang], so a bare URL is rewritten
 * to the internal /en/... route. The browser URL does not change.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split("/")[1] ?? ""

  // Already has a locale (/de/..., or the internal /en/...): serve as is.
  if (hasLocale(first)) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip Next internals and any path with a file extension: public files,
  // favicon.ico, feed.xml, llms.txt, sitemap.xml, robots.txt, /blog/<slug>.md.
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
}
