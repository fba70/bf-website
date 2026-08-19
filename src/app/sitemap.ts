import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { getAllTags } from "@/lib/tags";

/**
 * Newest change under content/, used as `lastModified` for the pages that list
 * content. A real timestamp beats `new Date()`, which would tell crawlers that
 * every page changed on every deploy.
 */
function newestContentDate(): Date {
  const dir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(dir)) return new Date(0);

  const times = fs
    .readdirSync(dir)
    .map((file) => fs.statSync(path.join(dir, file)).mtime.getTime());

  return times.length > 0 ? new Date(Math.max(...times)) : new Date(0);
}

function pageDate(route: string): Date {
  const file = path.join(
    process.cwd(),
    "src",
    "app",
    route === "/" ? "page.tsx" : path.join(route, "page.tsx"),
  );
  return fs.existsSync(file) ? fs.statSync(file).mtime : new Date(0);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const posts = getAllPosts();
  const contentDate = newestContentDate();

  const staticRoutes: MetadataRoute.Sitemap = navItems.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    lastModified: item.href === "/blog" ? contentDate : pageDate(item.href),
    changeFrequency: item.href === "/blog" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.updated || post.date ? new Date(post.updated || post.date) : contentDate,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const tagRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/blog/tags`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...getAllTags().map((tag) => ({
      url: `${base}/blog/tags/${tag.tag}`,
      lastModified: contentDate,
      changeFrequency: "weekly" as const,
      // A topic with several articles is a more useful landing page than one
      // that holds a single article.
      priority: tag.count > 2 ? 0.5 : 0.3,
    })),
  ];

  // Machine-readable entry points, listed so crawlers and agents find them.
  const agentRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/llms.txt`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${base}/feed.xml`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];

  return [...staticRoutes, ...postRoutes, ...tagRoutes, ...agentRoutes];
}
