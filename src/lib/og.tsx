import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { siteConfig } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Mirrors the dark-theme tokens in globals.css. They are hex here because
// satori (the ImageResponse renderer) cannot parse oklch() colors.
const color = {
  bg: "#1a1d23",
  card: "#2f3436",
  fg: "#e5e5e5",
  muted: "#a3a3a3",
  border: "#444444",
  primary: "#34a85a",
};

const FONT_DIR = path.join(process.cwd(), "src", "assets", "fonts");

async function loadFonts() {
  const [medium, extraBold] = await Promise.all([
    readFile(path.join(FONT_DIR, "PlusJakartaSans-Medium.ttf")),
    readFile(path.join(FONT_DIR, "PlusJakartaSans-ExtraBold.ttf")),
  ]);

  return [
    {
      name: "Plus Jakarta Sans",
      data: medium,
      weight: 500 as const,
      style: "normal" as const,
    },
    {
      name: "Plus Jakarta Sans",
      data: extraBold,
      weight: 800 as const,
      style: "normal" as const,
    },
  ];
}

async function loadAvatar(): Promise<string> {
  const buffer = await readFile(path.join(process.cwd(), "public", "BF_foto.jpg"));
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

function titleFontSize(title: string): number {
  if (title.length <= 34) return 78;
  if (title.length <= 60) return 66;
  if (title.length <= 95) return 56;
  return 46;
}

function clamp(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

export type OgImageOptions = {
  /** Small label above the title, e.g. "Essay" or "Tag". */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Small facts on the bottom right, e.g. date and reading time. */
  meta?: string[];
};

export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
  meta = [],
}: OgImageOptions): Promise<ImageResponse> {
  const [fonts, avatar] = await Promise.all([loadFonts(), loadAvatar()]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: color.bg,
          // Faint green glow in the top-left, so the card is not a flat block.
          backgroundImage: `radial-gradient(circle at 12% 0%, ${color.card} 0%, ${color.bg} 55%)`,
          fontFamily: "Plus Jakarta Sans",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 14,
            backgroundColor: color.primary,
          }}
        />

        {eyebrow ? (
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 14,
                backgroundColor: color.primary,
              }}
            />
            <div
              style={{
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: color.primary,
              }}
            >
              {eyebrow}
            </div>
          </div>
        ) : null}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: titleFontSize(title),
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: -0.5,
              color: color.fg,
            }}
          >
            {clamp(title, 150)}
          </div>

          {subtitle ? (
            <div
              style={{
                fontSize: 28,
                fontWeight: 500,
                lineHeight: 1.4,
                color: color.muted,
              }}
            >
              {clamp(subtitle, 165)}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${color.border}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatar}
              alt=""
              width={76}
              height={76}
              style={{
                width: 76,
                height: 76,
                borderRadius: 76,
                border: `3px solid ${color.primary}`,
                objectFit: "cover",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 30, fontWeight: 800, color: color.fg }}>
                {`${siteConfig.author}, PhD`}
              </div>
              <div style={{ fontSize: 22, fontWeight: 500, color: color.muted }}>
                {siteConfig.url.replace(/^https?:\/\//, "")}
              </div>
            </div>
          </div>

          {meta.length > 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontSize: 22,
                fontWeight: 500,
                color: color.muted,
              }}
            >
              {meta.map((item, index) => (
                <div key={item} style={{ display: "flex", gap: 16 }}>
                  {index > 0 ? <div>·</div> : null}
                  <div>{item}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
