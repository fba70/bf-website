import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO string, e.g. "2025-06-01"
  tags?: string[];
  draft?: boolean;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingTime: number; // minutes
};

export type Post = PostMeta & { content: string };

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
    date: fm.date ?? "",
    tags: fm.tags ?? [],
    draft: fm.draft ?? false,
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

export function formatDate(date: string): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
