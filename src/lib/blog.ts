import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { formatDate as formatLocaleDate, formatDateShort as formatLocaleDateShort, type Locale } from "@/lib/i18n";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  /** German translation of `description`. The article body stays English. */
  description_de?: string;
  date: string; // ISO string, e.g. "2025-06-01"
  updated?: string; // ISO string; falls back to `date` when absent
  tags?: string[];
  draft?: boolean;
  /** Where the article first appeared, e.g. the original LinkedIn URL. */
  source?: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingTime: number; // minutes
};

export type Post = PostMeta & { content: string };

/**
 * Most articles open with "Originally published on [LinkedIn](url)". Pulling
 * that URL out lets the structured data name the original, so search engines
 * treat this page as the canonical home rather than as a copy.
 */
function findSourceUrl(content: string): string | undefined {
  const match = content.match(
    /originally published on \[[^\]]*\]\((https?:\/\/[^)\s]+)\)/i
  );
  return match?.[1];
}

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function getSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPost(slug: string): Post | null {
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath)
    ? mdPath
    : fs.existsSync(mdxPath)
      ? mdxPath
      : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;

  return {
    slug,
    title: fm.title ?? slug,
    description: fm.description ?? "",
    description_de: fm.description_de,
    date: fm.date ?? "",
    updated: fm.updated ?? fm.date ?? "",
    tags: fm.tags ?? [],
    draft: fm.draft ?? false,
    source: fm.source ?? findSourceUrl(content),
    readingTime: readingTime(content),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const includeDrafts = process.env.NODE_ENV === "development";
  return getSlugs()
    .map((slug) => getPost(slug))
    .filter((p): p is Post => p !== null)
    .filter((p) => includeDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content: _content, ...meta }) => meta);
}

/** The post description in the given language, English as fallback. */
export function postDescription(post: PostMeta, locale: Locale): string {
  return locale === "de" && post.description_de ? post.description_de : post.description;
}

export function formatDate(date: string, locale: Locale = "en"): string {
  return formatLocaleDate(date, locale);
}

/** Compact form for card corners, e.g. "Sep 10, 2026". */
export function formatDateShort(date: string, locale: Locale = "en"): string {
  return formatLocaleDateShort(date, locale);
}
