export const siteConfig = {
  name: "Boris Fedotov",
  // Short role/tagline shown in hero + metadata
  title: "Boris Fedotov, PhD — Engineer & Builder",
  description:
    "Boris Fedotov, PhD — physicist and serial CTO with 25+ years building and shipping software. Essays on AI agents, agentic architectures, and context graphs.",
  // Update to the real production domain before launch.
  url: "https://fba70.vercel.app",
  locale: "en_US",
  author: "Boris Fedotov",
  email: "bfedotov@gmail.com",
  links: {
    github: "https://github.com/fba70",
    linkedin: "https://www.linkedin.com/in/bfedotov",
  },
} as const

export type NavItem = { title: string; href: string }

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Skills", href: "/skills" },
  { title: "Projects", href: "/projects" },
  { title: "Companies", href: "/companies" },
  { title: "Education", href: "/education" },
  { title: "Blog", href: "/blog" },
]
