import type { Locale } from "@/lib/i18n"

const en = {
  site: {
    title: "Boris Fedotov, PhD — Engineer & Builder",
    description:
      "Boris Fedotov, PhD — physicist and serial CTO with 25+ years building and shipping software. Essays on AI agents, agentic architectures, and context graphs.",
  },
  nav: {
    home: "Home",
    skills: "Skills",
    projects: "Projects",
    companies: "Companies",
    education: "Education",
    blog: "Blog",
  },
  header: {
    contact: "Contact me",
    openMenu: "Open menu",
    toggleTheme: "Toggle theme",
    language: "Choose language",
  },
  footer: {
    connect: "Connect",
    email: "Email",
  },
  home: {
    greeting: "Hi, I'm",
    intro: [
      "I'm PhD physicist, serial CTO and project manager with 25+ years experience who architects software solutions, drives teams and ships the code to my own and customer projects.",
      "I worked with large international enterprise clients (TELE2, France Telecom, Telstra, Orange, UPC, several major banks) as well as with many SMBs in different business domains (travel, gaming, marketing, sales, media etc.).",
      "As a solo engineer I bring to the table the right mix of management, analytical, architecture and software development skills.",
    ],
    contact: "Contact me",
    downloadCv: "Download my CV",
    about: [
      "Ideas are the cornerstones of business. I help ideas to take shape and become solutions to address the challenges my clients and partners have in modern competitive environment. I put together vision and strategy, subject matter expertise and experience, software architecture and software development skills, known technologies and scientific research, and finally all my time and energy to make that happen",
      "Since 2015 I live and work in Vienna, Austria. Always happy to talk to friends, partners and new contacts in Europe, US and Middle East about projects and interesting ideas. Get in touch with me via email or LinkedIn if you think I could be helpful for your project or if you want to discuss a potential collaboration",
    ],
    highlights: {
      skills: "Languages, frameworks, and tools I work with day to day",
      projects: "A selection of things I've designed, built, and shipped",
      companies: "Companies I've founded and worked with over the years",
      education: "Degrees, courses, and the milestones along the way",
      blog: "Notes and longer-form writing on what I'm learning",
    },
  },
  skills: {
    title: "Skills",
    description: "Languages, frameworks, and tools I work with.",
    lead: "Overview of the knowledge, skills, tools and technologies I have and work with",
  },
  projects: {
    title: "Projects",
    description: "A selection of things I've designed, built, and shipped.",
    lead: "A selection of projects and solutions I've led, designed, developed or delivered",
    complexity: "Complexity",
    levels: { 1: "Low", 2: "Medium", 3: "High" },
    categories: {
      "project management": "project management",
      "data management": "data management",
      "software development": "software development",
      "AI tools": "AI tools",
    },
  },
  companies: {
    title: "Companies",
    description: "Companies I've founded and worked with over the years.",
    lead: "Companies I've founded and worked with over the years.",
    present: "Present",
  },
  education: {
    title: "Education",
    description: "Degrees, courses, and milestones along the way.",
    lead: "Degrees, courses, and milestones along the way.",
    coursesTitle: "Software development & IT courses",
    coursesLead: "Shorter courses I've completed along the way.",
  },
  blog: {
    title: "Blog",
    description:
      "Essays on AI agents, agentic architectures, context graphs, and the evolution of SaaS — by Boris Fedotov, PhD.",
    lead: "Some of my articles originally posted on LinkedIn",
    topicsLabel: "Topics:",
    browseByTopic: "Browse by topic",
    allTopicsArrow: "All topics →",
    noPosts: "No posts yet — check back soon.",
    backToBlog: "Back to blog",
    minRead: (minutes: number) => `${minutes} min read`,
    markdownTitle: "Read this article as plain Markdown",
    related: "Related articles",
    englishOnly: "",
  },
  tags: {
    title: "Topics",
    description:
      "Every topic covered on the blog — AI agents, agentic architectures, context graphs, SaaS, and AI-assisted software development.",
    lead: (count: number) =>
      `${count} topics across the blog. Pick one to see every article about it.`,
    collectionName: "Blog topics",
    tagTitle: (label: string) => `${label} articles`,
    tagOgTitle: (label: string, count: number) =>
      `${label} — ${count} ${count === 1 ? "article" : "articles"}`,
    tagDescription: (label: string, author: string, count: number) =>
      `Every article on ${label} by ${author}, PhD. ${count} ${count === 1 ? "essay" : "essays"}, newest first.`,
    tagOgDescription: (label: string, author: string) =>
      `Every article on ${label} by ${author}, PhD.`,
    tagLead: (label: string, count: number) =>
      `${count} ${count === 1 ? "article" : "articles"} on ${label}, newest first.`,
    allArticles: "All articles",
    allTopics: "All topics",
  },
  og: {
    eyebrow: "Engineer & Builder",
    title: "Physicist, serial CTO, and hands-on architect",
    subtitle:
      "25+ years of shipping software. Essays on AI agents, agentic architectures, and context graphs.",
    essay: "Essay",
  },
}

export type Dictionary = typeof en

const de: Dictionary = {
  site: {
    title: "Boris Fedotov, PhD — Ingenieur & Macher",
    description:
      "Boris Fedotov, PhD — Physiker und Serial-CTO mit über 25 Jahren Erfahrung in der Entwicklung und Auslieferung von Software. Essays über KI-Agenten, agentische Architekturen und Context Graphs.",
  },
  nav: {
    home: "Start",
    skills: "Kompetenzen",
    projects: "Projekte",
    companies: "Unternehmen",
    education: "Ausbildung",
    blog: "Blog",
  },
  header: {
    contact: "Kontakt",
    openMenu: "Menü öffnen",
    toggleTheme: "Design wechseln",
    language: "Sprache wählen",
  },
  footer: {
    connect: "Vernetzen",
    email: "E-Mail",
  },
  home: {
    greeting: "Hallo, ich bin",
    intro: [
      "Ich bin promovierter Physiker, Serial-CTO und Projektmanager mit über 25 Jahren Erfahrung. Ich entwerfe Softwarelösungen, führe Teams und liefere Code für eigene Projekte und Kundenprojekte.",
      "Ich habe mit großen internationalen Unternehmenskunden gearbeitet (TELE2, France Telecom, Telstra, Orange, UPC, mehrere große Banken) und mit vielen KMU aus unterschiedlichen Branchen (Reisen, Gaming, Marketing, Vertrieb, Medien usw.).",
      "Als Solo-Engineer bringe ich die richtige Mischung aus Management-, Analyse-, Architektur- und Softwareentwicklungskompetenz mit.",
    ],
    contact: "Kontakt aufnehmen",
    downloadCv: "Lebenslauf herunterladen",
    about: [
      "Ideen sind die Grundpfeiler jedes Geschäfts. Ich helfe Ideen, Gestalt anzunehmen und zu Lösungen zu werden, die die Herausforderungen meiner Kunden und Partner im heutigen Wettbewerbsumfeld lösen. Dafür bringe ich Vision und Strategie, Fachwissen und Erfahrung, Softwarearchitektur und Softwareentwicklung, bewährte Technologien und wissenschaftliche Forschung zusammen – und nicht zuletzt meine ganze Zeit und Energie.",
      "Seit 2015 lebe und arbeite ich in Wien, Österreich. Ich spreche gerne mit Freunden, Partnern und neuen Kontakten in Europa, den USA und dem Nahen Osten über Projekte und spannende Ideen. Schreiben Sie mir per E-Mail oder über LinkedIn, wenn ich Ihnen bei Ihrem Projekt helfen kann oder Sie eine mögliche Zusammenarbeit besprechen möchten.",
    ],
    highlights: {
      skills: "Sprachen, Frameworks und Tools, mit denen ich täglich arbeite",
      projects: "Eine Auswahl an Lösungen, die ich konzipiert, gebaut und ausgeliefert habe",
      companies: "Unternehmen, die ich gegründet habe und für die ich gearbeitet habe",
      education: "Abschlüsse, Kurse und Meilensteine auf dem Weg",
      blog: "Notizen und längere Texte über das, was ich gerade lerne",
    },
  },
  skills: {
    title: "Kompetenzen",
    description: "Sprachen, Frameworks und Tools, mit denen ich arbeite.",
    lead: "Überblick über mein Wissen, meine Fähigkeiten sowie die Tools und Technologien, mit denen ich arbeite",
  },
  projects: {
    title: "Projekte",
    description: "Eine Auswahl an Lösungen, die ich konzipiert, gebaut und ausgeliefert habe.",
    lead: "Eine Auswahl an Projekten und Lösungen, die ich geleitet, konzipiert, entwickelt oder umgesetzt habe",
    complexity: "Komplexität",
    levels: { 1: "Niedrig", 2: "Mittel", 3: "Hoch" },
    categories: {
      "project management": "Projektmanagement",
      "data management": "Datenmanagement",
      "software development": "Softwareentwicklung",
      "AI tools": "KI-Tools",
    },
  },
  companies: {
    title: "Unternehmen",
    description: "Unternehmen, die ich gegründet habe und für die ich gearbeitet habe.",
    lead: "Unternehmen, die ich gegründet habe und für die ich im Laufe der Jahre gearbeitet habe.",
    present: "heute",
  },
  education: {
    title: "Ausbildung",
    description: "Abschlüsse, Kurse und Meilensteine auf dem Weg.",
    lead: "Abschlüsse, Kurse und Meilensteine auf dem Weg.",
    coursesTitle: "Kurse in Softwareentwicklung & IT",
    coursesLead: "Kürzere Kurse, die ich im Laufe der Zeit abgeschlossen habe.",
  },
  blog: {
    title: "Blog",
    description:
      "Essays über KI-Agenten, agentische Architekturen, Context Graphs und die Evolution von SaaS — von Boris Fedotov, PhD.",
    lead: "Einige meiner Artikel, ursprünglich auf LinkedIn veröffentlicht. Die Artikel sind auf Englisch.",
    topicsLabel: "Themen:",
    browseByTopic: "Nach Thema durchsuchen",
    allTopicsArrow: "Alle Themen →",
    noPosts: "Noch keine Beiträge — schauen Sie bald wieder vorbei.",
    backToBlog: "Zurück zum Blog",
    minRead: (minutes: number) => `${minutes} Min. Lesezeit`,
    markdownTitle: "Diesen Artikel als reines Markdown lesen",
    related: "Ähnliche Artikel",
    englishOnly:
      "Dieser Artikel ist nur auf Englisch verfügbar. Er wurde ursprünglich auf LinkedIn veröffentlicht.",
  },
  tags: {
    title: "Themen",
    description:
      "Alle Themen des Blogs — KI-Agenten, agentische Architekturen, Context Graphs, SaaS und KI-gestützte Softwareentwicklung.",
    lead: (count: number) =>
      `${count} Themen im Blog. Wählen Sie ein Thema, um alle Artikel dazu zu sehen.`,
    collectionName: "Blog-Themen",
    tagTitle: (label: string) => `Artikel zu ${label}`,
    tagOgTitle: (label: string, count: number) => `${label} — ${count} Artikel`,
    tagDescription: (label: string, author: string, count: number) =>
      `Alle Artikel zu ${label} von ${author}, PhD. ${count} ${count === 1 ? "Essay" : "Essays"}, neueste zuerst.`,
    tagOgDescription: (label: string, author: string) =>
      `Alle Artikel zu ${label} von ${author}, PhD.`,
    tagLead: (label: string, count: number) =>
      `${count} Artikel zu ${label}, neueste zuerst.`,
    allArticles: "Alle Artikel",
    allTopics: "Alle Themen",
  },
  og: {
    eyebrow: "Ingenieur & Macher",
    title: "Physiker, Serial-CTO und Architekt mit Praxis",
    subtitle:
      "Über 25 Jahre Softwareentwicklung. Essays über KI-Agenten, agentische Architekturen und Context Graphs.",
    essay: "Essay",
  },
}

const dictionaries: Record<Locale, Dictionary> = { en, de }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
