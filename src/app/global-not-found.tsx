import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Fallback for URLs that match no route at all. Most unknown URLs instead hit
// app/[lang]/[...rest] and get the localized 404 inside the site layout.

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "404 — Page not found · Seite nicht gefunden",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="min-h-dvh antialiased">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6">
          <p className="font-mono text-sm text-primary">404</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-1 text-xl text-muted-foreground" lang="de">
            Seite nicht gefunden
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Back home
            </Link>
            <Link
              href="/de"
              lang="de"
              className="rounded-md border border-border px-4 py-2 text-sm font-medium"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
