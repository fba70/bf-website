import Link from "next/link";

import { formatDateShort, type PostMeta } from "@/lib/blog";
import { tagLabel } from "@/lib/tags";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PostList({
  posts,
  activeTag,
}: {
  posts: PostMeta[];
  /** Tag of the page being viewed, highlighted in the badge row. */
  activeTag?: string;
}) {
  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground">No posts yet — check back soon.</p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {posts.map((post) => (
        <Card
          key={post.slug}
          className="group/post relative transition-colors hover:ring-foreground/25"
        >
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle>
                {/* Stretched link — the whole card is the hit area. */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors after:absolute after:inset-0 group-hover/post:text-primary"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <time
                dateTime={post.date}
                className="shrink-0 font-mono text-xs text-muted-foreground"
              >
                {formatDateShort(post.date)}
              </time>
            </div>
          </CardHeader>

          <CardContent className="text-sm text-muted-foreground">
            {post.description}
          </CardContent>

          {/* Above the stretched link, so the tag links stay clickable. */}
          <CardContent className="relative z-10 mt-auto flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {post.readingTime} min read
            </span>
            {post.tags?.map((tag) => (
              <Badge
                key={tag}
                asChild
                variant={tag === activeTag ? "default" : "secondary"}
              >
                <Link href={`/blog/tags/${tag}`}>{tagLabel(tag)}</Link>
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
