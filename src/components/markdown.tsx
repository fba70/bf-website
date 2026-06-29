import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import { cn } from "@/lib/utils";

export function Markdown({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        "prose-headings:scroll-mt-24 prose-headings:font-semibold",
        "prose-a:text-primary prose-a:underline-offset-4",
        "prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']",
        "prose-pre:border prose-pre:border-border prose-pre:bg-card",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
