import { getAllPosts, getPost, formatDate } from "@/lib/blog";
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return renderOgImage({ eyebrow: "Essay", title: "Not found" });
  }

  return renderOgImage({
    eyebrow: "Essay",
    title: post.title,
    subtitle: post.description,
    meta: [formatDate(post.date), `${post.readingTime} min read`].filter(Boolean),
  });
}
