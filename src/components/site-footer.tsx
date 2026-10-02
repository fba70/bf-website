import Link from "next/link"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { siteConfig } from "@/lib/site"
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const socials = [
  {
    label: "email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: GithubIcon,
    external: true,
  },
]

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear()
  const t = getDictionary(locale).footer

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{siteConfig.name}</span>
          <span className="mx-2">·</span>© {year}
        </p>

        <div className="flex items-center gap-1">
          <span className="mr-2 text-sm text-muted-foreground">{t.connect}</span>
          {socials.map(({ label: rawLabel, href, icon: Icon, external }) => {
            const label = rawLabel === "email" ? t.email : rawLabel
            return (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon">
                  <Link
                    href={href}
                    aria-label={label}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
