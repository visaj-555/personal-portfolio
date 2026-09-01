"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { MagneticButton } from "@/components/MagneticButton";
import { Container } from "@/components/Section";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        elevated || open
          ? "border-ink-700 bg-ink-950/90 backdrop-blur-md"
          : "border-transparent bg-ink-950/70 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/#home"
          className="font-display text-sm font-semibold tracking-tight text-text-primary"
        >
          Visaj Panchal
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] text-text-muted transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href={site.resumeHref} variant="secondary">
            Download Resume
          </MagneticButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-700 bg-ink-900 text-text-primary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-ink-700 bg-ink-950 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 font-mono text-sm text-text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <MagneticButton href={site.resumeHref} variant="primary" className="mt-2">
              Download Resume
            </MagneticButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
