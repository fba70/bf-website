// Placeholder content. Replace with real data later.

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Radix UI", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "REST APIs"],
  },
  {
    category: "Tooling & Cloud",
    items: ["Vercel", "Docker", "GitHub Actions", "Playwright", "Vitest"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "Project Aurora",
    description:
      "A placeholder project description. A real-time dashboard built with Next.js and websockets for visualizing live data streams.",
    tags: ["Next.js", "WebSockets", "Charts"],
    href: "#",
    year: "2025",
  },
  {
    title: "Borealis CLI",
    description:
      "Sample content. A developer CLI that scaffolds projects and automates repetitive setup tasks across teams.",
    tags: ["Go", "CLI", "DX"],
    href: "#",
    year: "2024",
  },
  {
    title: "Polaris Design System",
    description:
      "Lorem ipsum placeholder. A component library and design tokens powering several internal products.",
    tags: ["React", "Design System", "Tailwind"],
    href: "#",
    year: "2023",
  },
];

export type Education = {
  school: string;
  credential: string;
  period: string;
  detail: string;
};

export const education: Education[] = [
  {
    school: "Example University",
    credential: "M.Sc. in Computer Science",
    period: "2018 — 2020",
    detail:
      "Placeholder detail. Focus on distributed systems and machine learning.",
  },
  {
    school: "Example University",
    credential: "B.Sc. in Software Engineering",
    period: "2014 — 2018",
    detail: "Placeholder detail. Graduated with honors; thesis on compilers.",
  },
];
