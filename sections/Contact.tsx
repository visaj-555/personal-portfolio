import { site } from "@/data/site";
import { MagneticButton } from "@/components/MagneticButton";
import { Section, SectionHeading } from "@/components/Section";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Let’s talk about the work" />
      <div className="max-w-2xl">
        <p className="text-base leading-relaxed text-text-muted">{site.contact.intro}</p>
        <p className="mt-4 text-base leading-relaxed text-text-muted">{site.contact.closer}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MagneticButton href={`mailto:${site.email}`} variant="primary">
            Email
          </MagneticButton>
          <MagneticButton
            href={site.linkedin.href}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </MagneticButton>
          <MagneticButton href={site.resumeHref} variant="secondary">
            Download Resume
          </MagneticButton>
        </div>
        <p className="mt-8 font-mono text-xs text-text-faint">
          {site.email}
          <span className="mx-2 text-ink-700">/</span>
          <a href={site.phoneHref} className="hover:text-text-muted">
            {site.phone}
          </a>
        </p>
      </div>
    </Section>
  );
}
