// Placeholder content. Replace with real data later.

export type SkillGroup = { category: string; items: string[] }

export const skills: SkillGroup[] = [
  {
    category: "Science",
    items: ["Theoretical Physics", "Mathematics"],
  },
  {
    category: "Project Management",
    items: ["Project & Program Management", "Requirements Analysis"],
  },
  {
    category: "Concepts",
    items: ["Business Concepts", "Product Concepts", "IT Strategies"],
  },
  {
    category: "Architectures",
    items: ["Software Solutions", "Data Management", "System Design"],
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "REST APIs", "Redis", "Inngest"],
  },
  {
    category: "Tooling & Cloud",
    items: ["Vercel", "Docker", "GitHub Actions", "FFMPEG"],
  },
  {
    category: "EDW",
    items: ["Logical Models", "Physical Models", "Analytics"],
  },
  {
    category: "AI & ML",
    items: ["Vercel AI SDK", "Vercel Chat SDK", "Vercel Workflows", "MCP/CLI"],
  },
  {
    category: "I speak",
    items: ["Russian (Native)", "English (Pro)", "German (B2)", "Italian (A2)"],
  },
]

export type ProjectCategory =
  | "project management"
  | "data management"
  | "software development"
  | "AI tools"

export type Project = {
  id: number
  name: string
  category: ProjectCategory
  complexity: 1 | 2 | 3
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 0,
    name: "Billing solutions implementation for Protek Flagship",
    category: "project management",
    complexity: 3,
    tags: ["bss", "billing", "telecom", "project management"],
  },
  {
    id: 1,
    name: "OSS solutions delivery for Netcracker Technologies",
    category: "project management",
    complexity: 3,
    tags: ["oss", "telecom", "project management"],
  },
  {
    id: 2,
    name: "M&A deals management for Tele2 group",
    category: "project management",
    complexity: 3,
    tags: ["analytics", "processes", "project management", "M&A"],
  },
  {
    id: 3,
    name: "Utilities billing solution audit",
    category: "project management",
    complexity: 3,
    tags: ["analytics", "processes", "project management"],
  },
  {
    id: 4,
    name: "Auto telematics tech drive tests in Europe",
    category: "project management",
    complexity: 2,
    tags: ["analytics", "project management"],
  },
  {
    id: 5,
    name: "Project management for Tele2 group (25+ projects)",
    category: "project management",
    complexity: 3,
    tags: ["analytics", "processes", "project management"],
  },
  {
    id: 6,
    name: "E-booking solution development for travel agencies",
    category: "software development",
    complexity: 2,
    tags: ["React", "PHP"],
  },
  {
    id: 7,
    name: "EDW solution design for Tier 1 telecom operator",
    category: "data management",
    complexity: 3,
    tags: ["Cognos", "Oracle", "PL/SQL"],
  },
  {
    id: 8,
    name: "Financial systems audit for telecom operator",
    category: "project management",
    complexity: 2,
    tags: ["analytics", "processes", "Oracle"],
  },
  {
    id: 9,
    name: "Business processes definition for greenfield operator",
    category: "project management",
    complexity: 3,
    tags: ["analytics", "processes"],
  },
  {
    id: 10,
    name: "Data management projects for government agencies",
    category: "data management",
    complexity: 3,
    tags: [],
  },
  {
    id: 11,
    name: "BSS / OSS solutions delivery world-wide for Tier 1 telco operators",
    category: "project management",
    complexity: 3,
    tags: ["Oracle", "PL/SQL", "Java"],
  },
  {
    id: 12,
    name: "Management dashboards concept and solution",
    category: "data management",
    complexity: 2,
    tags: ["Python", "PowerBI"],
  },
  {
    id: 13,
    name: "Operational excellence solutions for banks",
    category: "project management",
    complexity: 3,
    tags: ["Oracle", "PL/SQL", "Python", "ML", "PowerBI"],
  },
  {
    id: 14,
    name: "Churn management solutions for banks",
    category: "data management",
    complexity: 3,
    tags: ["Oracle", "PL/SQL", "Python", "ML"],
  },
  {
    id: 15,
    name: "Fraud detection management solutions for banks",
    category: "data management",
    complexity: 3,
    tags: ["Oracle", "PL/SQL", "Python", "ML"],
  },
  {
    id: 16,
    name: "Product information management system for Tier 1 telco operator",
    category: "data management",
    complexity: 3,
    tags: ["Oracle", "PL/SQL", "Pentaho"],
  },
  {
    id: 17,
    name: "Data management platform for personalized ads",
    category: "data management",
    complexity: 3,
    tags: ["Next.js", "PHP", "Oracle"],
  },
  {
    id: 18,
    name: "VR LBE arenas management platform development",
    category: "software development",
    complexity: 2,
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 19,
    name: "VR Tennis Esports tournaments and players management platform",
    category: "software development",
    complexity: 3,
    tags: ["Next.js", "Node.js", "PostgreSQL", "Python"],
  },
  {
    id: 20,
    name: "VR motion learning data analysis and visualization platform",
    category: "data management",
    complexity: 2,
    tags: ["python", "pandas", "numpy", "matplotlib", "seaborn"],
  },
  {
    id: 21,
    name: "Data-driven digital content production platform AVICA",
    category: "software development",
    complexity: 3,
    tags: ["Next.js", "Node.js", "PostgreSQL", "FFMPEG"],
  },
  {
    id: 22,
    name: "Generative AI UGC platform for events SPARKBITS",
    category: "AI tools",
    complexity: 2,
    tags: ["AI", "Next.js", "Node.js", "PostgreSQL", "AI SDK"],
  },
  {
    id: 23,
    name: "Digital content production AI assistant",
    category: "AI tools",
    complexity: 3,
    tags: ["AI", "Next.js", "Node.js", "PostgreSQL", "FFMPEG"],
  },
  {
    id: 24,
    name: "CRM AI-assistant solution MVP",
    category: "AI tools",
    complexity: 2,
    tags: ["AI", "Next.js", "Node.js", "PostgreSQL", "AI SDK"],
  },
  {
    id: 25,
    name: "Transportation and access-cards management solution",
    category: "software development",
    complexity: 2,
    tags: ["Next.js", "Expo", "PostgreSQL", "Card readers"],
  },
  {
    id: 26,
    name: "truffalo.ai - AI-native business operating system",
    category: "AI tools",
    complexity: 3,
    tags: ["AI", "Agentic AI", "Context Graphs", "AI-native OS"],
  },
]

export type Company = {
  name: string
  url?: string
  role: string
  from: string
  to: string // year or "Present"
}

export const companies: Company[] = [
  {
    name: "truffalo.ai GmbH",
    url: "https://truffalo.ai",
    role: "CTO",
    from: "2026",
    to: "Present",
  },
  {
    name: "IN4COM GmbH",
    url: "https://www.in4comgroup.com",
    role: "Co-founder & CTO",
    from: "2021",
    to: "2026",
  },
  {
    name: "Tennis Esports",
    url: "https://www.tennis-esports.com",
    role: "Co-founder & CDO",
    from: "2019",
    to: "Present",
  },
  {
    name: "IN4COM LLC",
    url: "https://www.in4comgroup.com",
    role: "Founder & CTO",
    from: "2010",
    to: "2021",
  },
  {
    name: "JASMiND LLC",
    url: "https://www.jasmind-consulting.com",
    role: "Partner",
    from: "2007",
    to: "2010",
  },
  {
    name: "NETCRACKER TECHNOLOGIES",
    url: "https://www.netcracker.com",
    role: "Solutions Delivery Director",
    from: "2004",
    to: "2007",
  },
  {
    name: "PROTEK FLAGSHIP",
    url: "https://www.protek.com",
    role: "Solutions Delivery Director",
    from: "1999",
    to: "2004",
  },
]

export type Education = {
  school: string
  credential: string
  period: string
  detail: string
}

export const education: Education[] = [
  {
    school: "Moscow Institute of Physics & Engineering (MEPhI)",
    credential: "B.Sc. in Theoretical Physics",
    period: "1987 — 1993",
    detail:
      "Graduated with honour degree from the department of Theoretical Physics",
  },
  {
    school: "Moscow Institute of Physics & Engineering (MEPhI)",
    credential: "PhD in Theoretical Physics",
    period: "1993 — 1996",
    detail:
      "Postgraduate research in Theoretical Physics (Field Theory methods in Surface Science and Non-equilibrium Thermodynamics)",
  },
]

export type Course = { name: string }

export const courses: Course[] = [
  { name: "IBM Project Management" },
  { name: "SAS BI" },
  { name: "Cognos BI" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "Git & GitHub" },
  { name: "AWS Practitioner" },
  { name: "Docker & k8s" },
  { name: "Data Science" },
  { name: "Math of ML" },
  { name: "DL tools" },
  { name: "Prompting techniques" },
  { name: "LangChain & RAG" },
]
