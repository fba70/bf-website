export const siteConfig = {
  name: "Boris Fedotov",
  // Short role/tagline shown in hero + metadata
  title: "Boris Fedotov, PhD — Engineer & Builder",
  description:
    "Boris Fedotov, PhD — physicist and serial CTO with 25+ years building and shipping software. Essays on AI agents, agentic architectures, and context graphs.",
  url: "https://fba70.vercel.app",
  locale: "en_US",
  author: "Boris Fedotov",
  email: "bfedotov@gmail.com",
  links: {
    github: "https://github.com/fba70",
    linkedin: "https://www.linkedin.com/in/bfedotov",
  },
} as const

export type NavKey =
  | "home"
  | "skills"
  | "projects"
  | "companies"
  | "education"
  | "blog"

// Labels come from the dictionary (src/lib/dictionaries.ts) by `key`.
export type NavItem = { key: NavKey; href: string }

export const navItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "skills", href: "/skills" },
  { key: "projects", href: "/projects" },
  { key: "companies", href: "/companies" },
  { key: "education", href: "/education" },
  { key: "blog", href: "/blog" },
]
