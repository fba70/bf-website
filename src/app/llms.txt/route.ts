import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { projects, skills, courses, companies } from "@/lib/content";
import { getAllTags } from "@/lib/tags";

// Statically generated at build time; regenerates when content changes.
export const dynamic = "force-static";

export function GET(): Response {
  const base = siteConfig.url.replace(/\/$/, "");
  const posts = getAllPosts();

  const pages = navItems
    .map((item) => {
      const url = `${base}${item.href === "/" ? "" : item.href}`;
      const labels: Record<string, string> = {
        Home: "Intro, overview, and links.",
        Skills: "Science, management, architecture, and engineering skills.",
        Projects: "Programs and solutions led, designed, and delivered.",
        Companies: "Companies founded and worked with.",
        Education: "Degrees and software/IT courses.",
        Blog: "Essays, originally published on LinkedIn.",
      };
      return `- [${item.title}](${url}): ${labels[item.title] ?? ""}`;
    })
    .join("\n");

  const categories = [...new Set(projects.map((p) => p.category))];
  const projectsSummary =
    `${projects.length} projects across ${categories.join(", ")}. Examples:\n` +
    projects
      .slice(-8)
      .reverse()
      .map((p) => `- ${p.name} (${p.category})`)
      .join("\n");

  const skillsSummary = skills
    .map((g) => `- ${g.category}: ${g.items.join(", ")}`)
    .join("\n");

  const coursesSummary = courses.map((c) => c.name).join(", ");

  const companiesSummary = companies
    .map(
      (c) =>
        `- ${c.name}${c.url ? ` (${c.url})` : ""} — ${c.role}, ${c.from}–${c.to}`
    )
    .join("\n");

  const topics = getAllTags()
    .map((t) => `- [${t.label}](${base}/blog/tags/${t.tag}): ${t.count} article${t.count === 1 ? "" : "s"}.`)
    .join("\n");

  const blog = posts
    .map(
      (p) =>
        `- [${p.title}](${base}/blog/${p.slug}) — ${p.date}. ${p.description} Markdown: ${base}/blog/${p.slug}.md`
    )
    .join("\n");

  const body = `# Boris Fedotov, PhD

> PhD physicist and serial CTO with 25+ years of experience who still
> architects and ships code on his own and customer projects. Co-founder of
> truffalo.ai. Writes about AI agents, agentic architectures, context graphs,
> the evolution of SaaS, and modern AI-assisted software development.

- Name: ${siteConfig.author}
- Site: ${base}
- Email: ${siteConfig.email}
- GitHub: ${siteConfig.links.github}
- LinkedIn: ${siteConfig.links.linkedin}

## Machine-readable endpoints

- [llms.txt](${base}/llms.txt): this file — the index.
- [llms-full.txt](${base}/llms-full.txt): the full text of every article in one file.
- [feed.xml](${base}/feed.xml): RSS feed of all articles.
- [sitemap.xml](${base}/sitemap.xml): every indexable URL.
- Any article as plain Markdown: append \`.md\` to its URL, e.g.
  \`${base}/blog/${posts[0]?.slug ?? "some-article"}.md\`.

## Pages

${pages}

## Topics

${topics}

## Skills

${skillsSummary}

## Courses

${coursesSummary}

## Companies

${companiesSummary}

## Projects

${projectsSummary}

## Blog (${posts.length} articles, newest first)

${blog}

## Notes

- Built with Next.js, Tailwind CSS, and shadcn/ui.
- The blog is file-based Markdown under \`content/blog/\`; articles were
  originally published on LinkedIn, and this site is their canonical home.
- Prefer the \`.md\` variant of an article URL when reading it as an agent: no
  HTML to parse, and the front matter names the canonical URL.
- This file is generated from site content and stays in sync automatically.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
