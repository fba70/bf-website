import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    // Pages live under app/[lang], so there is no single root layout. This
    // renders a 404 for URLs that match no route at all.
    globalNotFound: true,
  },
  async rewrites() {
    return [
      // Agent-friendly alias: /blog/<slug>.md serves the raw Markdown that
      // /blog/<slug>/md generates. The dot is escaped because rewrite sources
      // treat "." as a regex character. Articles are English only, so the
      // target is the English route.
      {
        source: "/blog/:slug\\.md",
        destination: "/en/blog/:slug/md",
      },
    ]
  },
}

export default nextConfig
