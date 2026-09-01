import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { site } from "@/data/site";
import { Container } from "@/components/Section";

export function Footer() {
  return (
    <footer className="grain-surface border-t border-ink-700 bg-ink-950">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold text-text-primary">{site.name}</p>
          <p className="mt-1 text-sm text-text-muted">{site.title}</p>
          <p className="mt-3 font-mono text-xs text-text-faint">{site.location}</p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-faint">Navigate</p>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-text-muted hover:text-text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-faint">Connect</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={site.linkedin.href}
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin size={14} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.github.href}
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub size={14} /> GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary"
              >
                <Mail size={14} /> Email
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-ink-700 py-6">
        <p className="font-mono text-[11px] text-text-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
