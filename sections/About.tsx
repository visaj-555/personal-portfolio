import { site } from "@/data/site";
import { Section, SectionHeading } from "@/components/Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="Backend systems, built to last" />
      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-text-muted md:text-lg">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
