import type { Locale, Text } from "@/lib/i18n"

// Site content. A `Text` is either a plain string (same in every language,
// e.g. a product name) or { en, de }. Read it with `tr(text, locale)`.

export type SkillGroup = {
  /** Stable id, used to pick the icon. */
  key: string
  category: Text
  items: Text[]
}

export const skills: SkillGroup[] = [
  {
    key: "science",
    category: { en: "Science", de: "Wissenschaft" },
    items: [
      { en: "Theoretical Physics", de: "Theoretische Physik" },
      { en: "Mathematics", de: "Mathematik" },
    ],
  },
  {
    key: "project-management",
    category: { en: "Project Management", de: "Projektmanagement" },
    items: [
      { en: "Project & Program Management", de: "Projekt- & Programmmanagement" },
      { en: "Requirements Analysis", de: "Anforderungsanalyse" },
    ],
  },
  {
    key: "concepts",
    category: { en: "Concepts", de: "Konzepte" },
    items: [
      { en: "Business Concepts", de: "Geschäftskonzepte" },
      { en: "Product Concepts", de: "Produktkonzepte" },
      { en: "IT Strategies", de: "IT-Strategien" },
    ],
  },
  {
    key: "telecom",
    category: { en: "Telecom", de: "Telekommunikation" },
    items: [
      "BSS",
      "OSS",
      { en: "Products", de: "Produkte" },
      { en: "Data management", de: "Datenmanagement" },
    ],
  },
  {
    key: "enterprise-operations",
    category: { en: "Enterprise operations", de: "Unternehmensbetrieb" },
    items: [
      { en: "Operational effectiveness", de: "Operative Effizienz" },
      { en: "Data management", de: "Datenmanagement" },
    ],
  },
  {
    key: "m-and-a",
    category: { en: "M&A support", de: "M&A-Unterstützung" },
    items: [
      { en: "Concepts", de: "Konzepte" },
      "Management",
      { en: "Migration & consolidation", de: "Migration & Konsolidierung" },
    ],
  },
  {
    key: "architectures",
    category: { en: "Architectures", de: "Architekturen" },
    items: [
      { en: "Software Solutions", de: "Softwarelösungen" },
      { en: "Data Management", de: "Datenmanagement" },
      { en: "System Design", de: "Systemdesign" },
    ],
  },
  {
    key: "languages",
    category: { en: "Languages", de: "Programmiersprachen" },
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    key: "frontend",
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Three.js"],
  },
  {
    key: "backend",
    category: "Backend",
    items: ["Node.js", "PostgreSQL", { en: "REST APIs", de: "REST-APIs" }, "Redis"],
  },
  {
    key: "tooling-cloud",
    category: { en: "Tooling & Cloud", de: "Tools & Cloud" },
    items: ["Vercel", "Docker", "GitHub Actions", "FFMPEG"],
  },
  {
    key: "edw",
    category: "EDW",
    items: [
      { en: "Logical Models", de: "Logische Modelle" },
      { en: "Physical Models", de: "Physische Modelle" },
      { en: "Analytics", de: "Analytik" },
    ],
  },
  {
    key: "ai-ml",
    category: { en: "AI & ML", de: "KI & ML" },
    items: [
      "AI SDK",
      { en: "Agentic harnesses", de: "Agentic Harnesses" },
      "Durable Workflows",
      "MCP/CLI",
    ],
  },
  {
    key: "spoken-languages",
    category: { en: "I speak", de: "Ich spreche" },
    items: [
      { en: "Russian (Native)", de: "Russisch (Muttersprache)" },
      { en: "English (Pro)", de: "Englisch (verhandlungssicher)" },
      { en: "German (B2)", de: "Deutsch (B2)" },
      { en: "Italian (A2)", de: "Italienisch (A2)" },
    ],
  },
]

export type ProjectCategory =
  | "project management"
  | "data management"
  | "software development"
  | "AI tools"

export type Project = {
  id: number
  name: Text
  category: ProjectCategory
  complexity: 1 | 2 | 3
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 0,
    name: {
      en: "Billing solutions implementation for Protek Flagship",
      de: "Implementierung von Billing-Lösungen für Protek Flagship",
    },
    category: "project management",
    complexity: 3,
    tags: ["bss", "billing", "telecom", "project management"],
  },
  {
    id: 1,
    name: {
      en: "OSS solutions delivery for Netcracker Technologies",
      de: "Bereitstellung von OSS-Lösungen für Netcracker Technologies",
    },
    category: "project management",
    complexity: 3,
    tags: ["oss", "telecom", "project management"],
  },
  {
    id: 2,
    name: {
      en: "M&A deals management for Tele2 group",
      de: "Management von M&A-Transaktionen für die Tele2-Gruppe",
    },
    category: "project management",
    complexity: 3,
    tags: ["analytics", "processes", "project management", "M&A"],
  },
  {
    id: 3,
    name: {
      en: "Utilities billing solution audit",
      de: "Audit einer Abrechnungslösung für Versorgungsunternehmen",
    },
    category: "project management",
    complexity: 3,
    tags: ["analytics", "processes", "project management"],
  },
  {
    id: 4,
    name: {
      en: "Auto telematics tech drive tests in Europe",
      de: "Testfahrten für Kfz-Telematik-Technologie in Europa",
    },
    category: "project management",
    complexity: 2,
    tags: ["analytics", "project management"],
  },
  {
    id: 5,
    name: {
      en: "Project management for Tele2 group (25+ projects)",
      de: "Projektmanagement für die Tele2-Gruppe (25+ Projekte)",
    },
    category: "project management",
    complexity: 3,
    tags: ["analytics", "processes", "project management"],
  },
  {
    id: 6,
    name: {
      en: "E-booking solution development for travel agencies",
      de: "Entwicklung einer E-Booking-Lösung für Reisebüros",
    },
    category: "software development",
    complexity: 2,
    tags: ["React", "PHP"],
  },
  {
    id: 7,
    name: {
      en: "EDW solution design for Tier 1 telecom operator",
      de: "EDW-Lösungsdesign für einen Tier-1-Telekommunikationsanbieter",
    },
    category: "data management",
    complexity: 3,
    tags: ["Cognos", "Oracle", "PL/SQL"],
  },
  {
    id: 8,
    name: {
      en: "Financial systems audit for telecom operator",
      de: "Audit der Finanzsysteme eines Telekommunikationsanbieters",
    },
    category: "project management",
    complexity: 2,
    tags: ["analytics", "processes", "Oracle"],
  },
  {
    id: 9,
    name: {
      en: "Business processes definition for greenfield operator",
      de: "Definition der Geschäftsprozesse für einen Greenfield-Betreiber",
    },
    category: "project management",
    complexity: 3,
    tags: ["analytics", "processes"],
  },
  {
    id: 10,
    name: {
      en: "Data management projects for government agencies",
      de: "Datenmanagement-Projekte für Behörden",
    },
    category: "data management",
    complexity: 3,
    tags: [],
  },
  {
    id: 11,
    name: {
      en: "BSS / OSS solutions delivery world-wide for Tier 1 telco operators",
      de: "Weltweite Bereitstellung von BSS-/OSS-Lösungen für Tier-1-Telekommunikationsanbieter",
    },
    category: "project management",
    complexity: 3,
    tags: ["Oracle", "PL/SQL", "Java"],
  },
  {
    id: 12,
    name: {
      en: "Management dashboards concept and solution",
      de: "Konzept und Lösung für Management-Dashboards",
    },
    category: "data management",
    complexity: 2,
    tags: ["Python", "PowerBI"],
  },
  {
    id: 13,
    name: {
      en: "Operational excellence solutions for banks",
      de: "Lösungen für operative Exzellenz für Banken",
    },
    category: "project management",
    complexity: 3,
    tags: ["Oracle", "PL/SQL", "Python", "ML", "PowerBI"],
  },
  {
    id: 14,
    name: {
      en: "Churn management solutions for banks",
      de: "Churn-Management-Lösungen für Banken",
    },
    category: "data management",
    complexity: 3,
    tags: ["Oracle", "PL/SQL", "Python", "ML"],
  },
  {
    id: 15,
    name: {
      en: "Fraud detection management solutions for banks",
      de: "Lösungen zur Betrugserkennung für Banken",
    },
    category: "data management",
    complexity: 3,
    tags: ["Oracle", "PL/SQL", "Python", "ML"],
  },
  {
    id: 16,
    name: {
      en: "Product information management system for Tier 1 telco operator",
      de: "Produktinformationsmanagement-System für einen Tier-1-Telekommunikationsanbieter",
    },
    category: "data management",
    complexity: 3,
    tags: ["Oracle", "PL/SQL", "Pentaho"],
  },
  {
    id: 17,
    name: {
      en: "Data management platform for personalized ads",
      de: "Datenmanagement-Plattform für personalisierte Werbung",
    },
    category: "data management",
    complexity: 3,
    tags: ["Next.js", "PHP", "Oracle"],
  },
  {
    id: 18,
    name: {
      en: "VR LBE arenas management platform development",
      de: "Entwicklung einer Managementplattform für VR-LBE-Arenen",
    },
    category: "software development",
    complexity: 2,
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 19,
    name: {
      en: "VR Tennis Esports tournaments and players management platform",
      de: "Plattform für Turnier- und Spielermanagement bei VR Tennis Esports",
    },
    category: "software development",
    complexity: 3,
    tags: ["Next.js", "Node.js", "PostgreSQL", "Python"],
  },
  {
    id: 20,
    name: {
      en: "VR motion learning data analysis and visualization platform",
      de: "Plattform zur Analyse und Visualisierung von VR-Bewegungslerndaten",
    },
    category: "data management",
    complexity: 2,
    tags: ["python", "pandas", "numpy", "matplotlib", "seaborn"],
  },
  {
    id: 21,
    name: {
      en: "Data-driven digital content production platform AVICA",
      de: "Datengetriebene Plattform für digitale Content-Produktion AVICA",
    },
    category: "software development",
    complexity: 3,
    tags: ["Next.js", "Node.js", "PostgreSQL", "FFMPEG"],
  },
  {
    id: 22,
    name: {
      en: "Generative AI UGC platform for events SPARKBITS",
      de: "Generative-KI-Plattform für UGC bei Events SPARKBITS",
    },
    category: "AI tools",
    complexity: 2,
    tags: ["AI", "Next.js", "Node.js", "PostgreSQL", "AI SDK"],
  },
  {
    id: 23,
    name: {
      en: "Digital content production AI assistant",
      de: "KI-Assistent für digitale Content-Produktion",
    },
    category: "AI tools",
    complexity: 3,
    tags: ["AI", "Next.js", "Node.js", "PostgreSQL", "FFMPEG"],
  },
  {
    id: 24,
    name: {
      en: "CRM AI-assistant solution MVP",
      de: "MVP einer KI-Assistenzlösung für CRM",
    },
    category: "AI tools",
    complexity: 2,
    tags: ["AI", "Next.js", "Node.js", "PostgreSQL", "AI SDK"],
  },
  {
    id: 25,
    name: {
      en: "Transportation and access-cards management solution",
      de: "Lösung für das Management von Transport- und Zugangskarten",
    },
    category: "software development",
    complexity: 2,
    tags: ["Next.js", "Expo", "PostgreSQL", "Card readers"],
  },
  {
    id: 26,
    name: {
      en: "truffalo.ai - AI-native business operating system",
      de: "truffalo.ai - KI-natives Betriebssystem für Unternehmen",
    },
    category: "AI tools",
    complexity: 3,
    tags: ["AI", "Agentic AI", "Context Graphs", "AI-native OS"],
  },
  {
    id: 27,
    name: {
      en: "Telco Product Management solution migration",
      de: "Migration einer Telco-Produktmanagement-Lösung",
    },
    category: "software development",
    complexity: 2,
    tags: ["Telco product catalog", "Data management", "ETL"],
  },
  {
    id: 28,
    name: {
      en: "AI skills foundry and design assistant",
      de: "KI-Skills-Foundry und Design-Assistent",
    },
    category: "software development",
    complexity: 2,
    tags: ["AI", "Skills", "Assistant"],
  },
]

// German labels for the generic project tags. Technology names stay as-is.
const PROJECT_TAGS_DE: Record<string, string> = {
  billing: "Billing",
  telecom: "Telekommunikation",
  "project management": "Projektmanagement",
  analytics: "Analytik",
  processes: "Prozesse",
  AI: "KI",
  "AI-native OS": "KI-natives OS",
  "Telco product catalog": "Telco-Produktkatalog",
  "Data management": "Datenmanagement",
  "Card readers": "Kartenleser",
  Assistant: "Assistent",
}

export function projectTag(tag: string, locale: Locale): string {
  return locale === "de" ? (PROJECT_TAGS_DE[tag] ?? tag) : tag
}

export type Company = {
  name: string
  url?: string
  role: Text
  from: string
  /** A year, or null while the role is ongoing. */
  to: string | null
}

export const companies: Company[] = [
  {
    name: "truffalo.ai GmbH",
    url: "https://truffalo.ai",
    role: "CTO",
    from: "2026",
    to: null,
  },
  {
    name: "IN4COM GmbH",
    url: "https://www.in4comgroup.com",
    role: { en: "Co-founder & CTO", de: "Mitgründer & CTO" },
    from: "2021",
    to: null,
  },
  {
    name: "Tennis Esports",
    url: "https://www.tennis-esports.com",
    role: "CDO",
    from: "2019",
    to: null,
  },
  {
    name: "IN4COM LLC",
    url: "https://www.in4comgroup.com",
    role: { en: "Founder & CTO", de: "Gründer & CTO" },
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
  school: Text
  credential: Text
  period: string
  detail: Text
}

export const education: Education[] = [
  {
    school: {
      en: "Moscow Institute of Physics & Engineering (MEPhI)",
      de: "Moskauer Ingenieurphysikalisches Institut (MEPhI)",
    },
    credential: {
      en: "B.Sc. in Theoretical Physics",
      de: "B.Sc. in Theoretischer Physik",
    },
    period: "1987 — 1993",
    detail: {
      en: "Graduated with honour degree from the department of Theoretical Physics",
      de: "Abschluss mit Auszeichnung am Lehrstuhl für Theoretische Physik",
    },
  },
  {
    school: {
      en: "Moscow Institute of Physics & Engineering (MEPhI)",
      de: "Moskauer Ingenieurphysikalisches Institut (MEPhI)",
    },
    credential: {
      en: "PhD in Theoretical Physics",
      de: "PhD in Theoretischer Physik",
    },
    period: "1993 — 1996",
    detail: {
      en: "Postgraduate research in Theoretical Physics (Field Theory methods in Surface Science and Non-equilibrium Thermodynamics)",
      de: "Postgraduale Forschung in Theoretischer Physik (Methoden der Feldtheorie in der Oberflächenphysik und Nichtgleichgewichtsthermodynamik)",
    },
  },
]

export type Course = { name: Text }

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
  { name: { en: "Math of ML", de: "Mathematik des ML" } },
  { name: { en: "DL tools", de: "DL-Tools" } },
  { name: { en: "Prompting techniques", de: "Prompting-Techniken" } },
  { name: "LangChain & RAG" },
]
