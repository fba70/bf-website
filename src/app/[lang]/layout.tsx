import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Source_Serif_4,
} from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

import { siteConfig } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, locales, ogLocales, type Locale } from "@/lib/i18n";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

type Params = { lang: string };

export function generateStaticParams(): Params[] {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).site;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t.title,
      template: `%s · ${siteConfig.name}`,
    },
    description: t.description,
    keywords: [
      "Boris Fedotov",
      "PhD physicist",
      "CTO",
      "AI agents",
      "agentic AI",
      "context graph",
      "SaaS",
      "software architecture",
      "AI engineering",
      "blog",
    ],
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    // No `canonical` here on purpose: metadata is inherited, so a canonical set
    // on the root layout would point every page at the home page.
    alternates: {
      types: {
        "application/rss+xml": `${siteConfig.url}/feed.xml`,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocales[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocales[l]),
      url: siteConfig.url,
      title: t.title,
      description: t.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<Params> }>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale: Locale = lang;
  const t = getDictionary(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${sourceSerif.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={200}>
            <div className="flex min-h-dvh flex-col">
              <SiteHeader
                locale={locale}
                labels={{ ...t.nav, ...t.header }}
              />
              <main className="flex-1">{children}</main>
              <SiteFooter locale={locale} />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
