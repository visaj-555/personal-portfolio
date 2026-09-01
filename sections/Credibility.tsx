import { site } from "@/data/site";
import { Container } from "@/components/Section";

export function Credibility() {
  return (
    <section aria-label="Experience snapshot" className="border-y border-ink-700 bg-ink-900">
      <Container className="grid grid-cols-2 divide-y divide-ink-700 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
        {site.stats.map((stat) => (
          <div key={stat.label} className="px-4 py-6 first:pt-6 sm:py-8">
            <p className="font-display text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1 font-mono text-[11px] leading-relaxed text-text-faint">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
