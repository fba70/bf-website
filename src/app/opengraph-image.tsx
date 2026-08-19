import { siteConfig } from "@/lib/site";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = `${siteConfig.title}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Engineer & Builder",
    title: "Physicist, serial CTO, and hands-on architect",
    subtitle:
      "25+ years of shipping software. Essays on AI agents, agentic architectures, and context graphs.",
  });
}
