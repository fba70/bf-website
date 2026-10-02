import { siteConfig } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import { defaultLocale, hasLocale, locales } from "@/lib/i18n";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = `${siteConfig.name}, PhD`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(hasLocale(lang) ? lang : defaultLocale).og;

  return renderOgImage({
    eyebrow: t.eyebrow,
    title: t.title,
    subtitle: t.subtitle,
  });
}
