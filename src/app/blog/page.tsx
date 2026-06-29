import type { Metadata } from "next"
import Link from "next/link"

import { getAllPosts, formatDate } from "@/lib/blog"
import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes and longer-form writing on what I'm learning.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <PageShell
      title="Blog"
      lead="Some of my articles originally posted on LinkedIn"
    >
      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet — check back soon.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-border/60">
          {posts.map((post) => (
            <li key={post.slug} className="py-6 first:pt-0">
              <article className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary">
                      {post.title}
                    </h2>
                    <time
                      dateTime={post.date}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    {post.description}
                  </p>
                </Link>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {post.readingTime} min read
                  </span>
                  {post.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  )
}
