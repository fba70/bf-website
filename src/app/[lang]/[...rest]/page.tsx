import { notFound } from "next/navigation";

// Catches unknown URLs inside a locale (/foo, /de/foo), so they render the
// localized 404 page with the site header and footer.
export default function CatchAll() {
  notFound();
}
