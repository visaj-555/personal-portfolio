import { exploring } from "@/data/exploring";
import { Section, SectionHeading } from "@/components/Section";

export function Exploring() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Currently Exploring"
        title="Learning tracks, not production claims"
        description="These are active study areas. They are not listed as shipped experience."
      />
      <ul className="flex flex-wrap gap-2 rounded-xl border border-dashed border-ink-700 bg-ink-900/50 p-5">
        {exploring.map((item) => (
          <li
            key={item}
            className="inline-flex items-center gap-2 rounded-md border border-ink-700 bg-ink-950 px-3 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
            <span className="font-mono text-xs text-text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
