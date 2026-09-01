import { philosophy } from "@/data/philosophy";
import { Section, SectionHeading } from "@/components/Section";

export function Philosophy() {
  return (
    <Section id="philosophy">
      <SectionHeading
        eyebrow="Engineering Philosophy"
        title="How the work is judged"
        description="Principles used when designing services — not a slogan list."
      />
      <dl className="divide-y divide-ink-700 border-y border-ink-700">
        {philosophy.map((item) => (
          <div
            key={item.title}
            className="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:gap-10 md:py-7"
          >
            <dt className="font-display text-lg font-semibold text-text-primary">{item.title}</dt>
            <dd className="text-sm leading-relaxed text-text-muted md:text-base">{item.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
