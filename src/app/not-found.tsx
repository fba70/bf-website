import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
