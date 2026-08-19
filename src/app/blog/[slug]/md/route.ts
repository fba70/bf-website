import { getAllPosts, getPost } from "@/lib/blog";
import { toMarkdownDocument } from "@/lib/markdown-export";

// Prerendered at build time, one file per post.
export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
): Promise<Response> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return new Response("Not found\n", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  return new Response(toMarkdownDocument(post), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // The HTML page is the indexable version; this copy is for agents.
      "X-Robots-Tag": "noindex, follow",
    },
  });
}
