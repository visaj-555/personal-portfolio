import { education } from "@/data/education";
import { Section, SectionHeading } from "@/components/Section";

export function Education() {
  return (
    <Section>
      <SectionHeading eyebrow="Education" title="Formal study" />
      <ul className="space-y-4">
        {education.map((item) => (
          <li
            key={item.institution}
            className="grid gap-1 rounded-xl border border-ink-700 bg-ink-900 px-5 py-5 md:grid-cols-[1fr_auto] md:items-baseline"
          >
            <div>
              <p className="font-display text-lg font-semibold text-text-primary">{item.institution}</p>
              <p className="mt-1 text-sm text-text-muted">{item.credential}</p>
            </div>
            <div className="md:text-right">
              <p className="font-mono text-xs text-text-faint">{item.period}</p>
              <p className="mt-1 font-mono text-xs text-text-muted">{item.metric}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
