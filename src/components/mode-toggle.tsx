"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle({ label = "Toggle theme" }: { label?: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  const toggle = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={label}
    >
      {/* Both icons always render and CSS picks one, so there is no hydration
          mismatch and no need to track whether the component has mounted. */}
      <Sun className="hidden h-5 w-5 dark:block" />
      <Moon className="h-5 w-5 dark:hidden" />
      <span className="sr-only">{label}</span>
    </Button>
  );
}
