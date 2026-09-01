import Link from "next/link";
import { Container } from "@/components/Section";

export default function NotFound() {
  return (
    <div className="grain-surface bg-ink-950 py-32">
      <Container className="max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-text-primary">Page not found</h1>
        <p className="mt-4 text-text-muted">That route is not part of this site.</p>
        <Link href="/" className="mt-8 inline-block font-mono text-sm text-signal-bright">
          Back home
        </Link>
      </Container>
    </div>
  );
}
