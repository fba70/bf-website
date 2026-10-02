import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { getAllTags } from "@/lib/tags";
import { localePath, locales } from "@/lib/i18n";

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
    "[lang]",
    route === "/" ? "page.tsx" : path.join(route, "page.tsx"),
  );
  return fs.existsSync(file) ? fs.statSync(file).mtime : new Date(0);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const posts = getAllPosts();
  const contentDate = newestContentDate();

  // Absolute URL of a route in one locale. The English home page is the bare
  // domain, without a trailing slash.
  const urlFor = (locale: (typeof locales)[number], route: string) => {
    const p = localePath(locale, route);
    return `${base}${p === "/" ? "" : p}`;
  };

  // hreflang links for routes that exist in every language.
  const languagesFor = (route: string) => ({
    languages: Object.fromEntries(locales.map((l) => [l, urlFor(l, route)])),
  });

  const staticRoutes: MetadataRoute.Sitemap = navItems.flatMap((item) =>
    locales.map((locale) => ({
      url: urlFor(locale, item.href),
      lastModified: item.href === "/blog" ? contentDate : pageDate(item.href),
      changeFrequency: item.href === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: item.href === "/" ? 1 : 0.7,
      alternates: languagesFor(item.href),
    })),
  );

  // Articles are English only. The /de copies name the English URL as
  // canonical, so only the English URL is listed.
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.updated || post.date ? new Date(post.updated || post.date) : contentDate,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const tagRoutes: MetadataRoute.Sitemap = [
    { route: "/blog/tags", priority: 0.5 },
    ...getAllTags().map((tag) => ({
      route: `/blog/tags/${tag.tag}`,
      // A topic with several articles is a more useful landing page than one
      // that holds a single article.
      priority: tag.count > 2 ? 0.5 : 0.3,
    })),
  ].flatMap(({ route, priority }) =>
    locales.map((locale) => ({
      url: urlFor(locale, route),
      lastModified: contentDate,
      changeFrequency: "weekly" as const,
      priority,
      alternates: languagesFor(route),
    })),
  );

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
