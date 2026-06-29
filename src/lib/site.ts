export const siteConfig = {
  name: "Boris Fedotov",
  // Short role/tagline shown in hero + metadata
  title: "Boris Fedotov — Engineer & Builder",
  description:
    "Personal site of Boris Fedotov — skills, projects, education, and writing.",
  // Update to the real production domain before launch.
  url: "https://example.com",
  locale: "en_US",
  author: "Boris Fedotov",
  email: "bfedotov@gmail.com",
  links: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle",
  },
} as const;

export type NavItem = { title: string; href: string };

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Skills", href: "/skills" },
  { title: "Projects", href: "/projects" },
  { title: "Education", href: "/education" },
  { title: "Blog", href: "/blog" },
];
