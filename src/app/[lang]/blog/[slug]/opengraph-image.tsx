import { getAllPosts, getPost, formatDate, postDescription } from "@/lib/blog";
import { getDictionary } from "@/lib/dictionaries";
import { defaultLocale, hasLocale } from "@/lib/i18n";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Essay by Boris Fedotov, PhD";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = hasLocale(lang) ? lang : defaultLocale;
  const t = getDictionary(locale);
  const post = getPost(slug);

  if (!post) {
    return renderOgImage({ eyebrow: t.og.essay, title: "Not found" });
  }

  return renderOgImage({
    eyebrow: t.og.essay,
    title: post.title,
    subtitle: postDescription(post, locale),
    meta: [formatDate(post.date, locale), t.blog.minRead(post.readingTime)].filter(Boolean),
  });
}
