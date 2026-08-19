import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      // Agent-friendly alias: /blog/<slug>.md serves the raw Markdown that
      // /blog/<slug>/md generates. The dot is escaped because rewrite sources
      // treat "." as a regex character.
      {
        source: "/blog/:slug\\.md",
        destination: "/blog/:slug/md",
      },
    ]
  },
}

export default nextConfig
