import { skillGroups } from "@/data/skills";
import { TechIcon } from "@/components/TechIcon";
import { Section, SectionHeading } from "@/components/Section";

export function Expertise() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technical Expertise"
        title="The stack I ship with"
        description="Production tools, grouped by concern. Hover a mark for a one-line reading of how it is used."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.heading}
            className="rounded-xl border border-ink-700 bg-ink-900 p-5 lit-surface"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
              {group.heading}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="group relative flex items-center gap-3 rounded-md px-1 py-1">
                    <TechIcon name={item.name} />
                    <span className="text-sm text-text-primary">{item.name}</span>
                    <span className="pointer-events-none absolute left-12 top-full z-10 mt-1 hidden w-max max-w-[16rem] rounded-md border border-ink-700 bg-ink-800 px-2 py-1 font-mono text-[11px] text-text-muted group-hover:block group-focus-within:block">
                      {item.blurb}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
