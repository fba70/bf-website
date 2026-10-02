import Link from "next/link";

import { formatDateShort, postDescription, type PostMeta } from "@/lib/blog";
import { tagLabel } from "@/lib/tags";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PostList({
  posts,
  locale,
  activeTag,
}: {
  posts: PostMeta[];
  locale: Locale;
  /** Tag of the page being viewed, highlighted in the badge row. */
  activeTag?: string;
}) {
  const t = getDictionary(locale).blog;

  if (posts.length === 0) {
    return <p className="text-muted-foreground">{t.noPosts}</p>;
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
              {/* Article titles are not translated. */}
              <CardTitle lang="en">
                {/* Stretched link — the whole card is the hit area. */}
                <Link
                  href={localePath(locale, `/blog/${post.slug}`)}
                  className="transition-colors after:absolute after:inset-0 group-hover/post:text-primary"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <time
                dateTime={post.date}
                className="shrink-0 font-mono text-xs text-muted-foreground"
              >
                {formatDateShort(post.date, locale)}
              </time>
            </div>
          </CardHeader>

          <CardContent className="text-sm text-muted-foreground">
            {postDescription(post, locale)}
          </CardContent>

          {/* Above the stretched link, so the tag links stay clickable. */}
          <CardContent className="relative z-10 mt-auto flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {t.minRead(post.readingTime)}
            </span>
            {post.tags?.map((tag) => (
              <Badge
                key={tag}
                asChild
                variant={tag === activeTag ? "default" : "secondary"}
              >
                <Link href={localePath(locale, `/blog/tags/${tag}`)}>
                  {tagLabel(tag, locale)}
                </Link>
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
