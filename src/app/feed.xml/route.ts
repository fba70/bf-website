import { getAllPosts } from "@/lib/blog";
import { tagLabel } from "@/lib/tags";
import { siteConfig } from "@/lib/site";

// Prerendered at build time; regenerates when content changes.
export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): Response {
  const base = siteConfig.url.replace(/\/$/, "");
  const posts = getAllPosts();
  const updated = posts[0]?.date
    ? new Date(posts[0].date).toUTCString()
    : new Date(0).toUTCString();

  const items = posts
    .map((post) => {
      const url = `${base}/blog/${post.slug}`;
      const categories = (post.tags ?? [])
        .map((tag) => `      <category>${escapeXml(tagLabel(tag))}</category>`)
        .join("\n");

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <dc:creator>${escapeXml(siteConfig.author)}</dc:creator>
${categories}
      <source url="${base}/feed.xml">${escapeXml(siteConfig.name)}</source>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(siteConfig.name)} — Blog</title>
    <link>${base}/blog</link>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-us</language>
    <copyright>${escapeXml(siteConfig.author)}</copyright>
    <managingEditor>${siteConfig.email} (${escapeXml(siteConfig.author)})</managingEditor>
    <webMaster>${siteConfig.email} (${escapeXml(siteConfig.author)})</webMaster>
    <lastBuildDate>${updated}</lastBuildDate>
    <generator>Next.js</generator>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
