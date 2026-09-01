"use client";

import { useState } from "react";
import { experience } from "@/data/experience";
import { TechIcon } from "@/components/TechIcon";
import { Section, SectionHeading } from "@/components/Section";

export function Experience() {
  const [activeId, setActiveId] = useState(experience[0].id);
  const active = experience.find((role) => role.id === activeId) ?? experience[0];

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Roles, in reverse chronological order"
        description="Select a role to read responsibilities and the tools attached to that work."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-12">
        <ol className="relative border-l border-ink-700">
          {experience.map((role) => {
            const selected = role.id === activeId;
            return (
              <li key={role.id} className="relative pb-8 pl-6 last:pb-0">
                <span
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border ${
                    selected
                      ? "border-amber bg-amber"
                      : "border-ink-700 bg-ink-950"
                  }`}
                  aria-hidden
                />
                <button
                  type="button"
                  onClick={() => setActiveId(role.id)}
                  className={`block w-full rounded-md px-2 py-1 text-left ${
                    selected ? "bg-ink-900" : "hover:bg-ink-900/60"
                  }`}
                  aria-current={selected ? "true" : undefined}
                >
                  <span className="block font-mono text-[11px] text-text-faint">{role.period}</span>
                  <span className="mt-1 block text-sm font-medium text-text-primary">{role.company}</span>
                  <span className="mt-0.5 block text-xs text-text-muted">{role.title}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <article className="rounded-xl border border-ink-700 bg-ink-900 p-6 lit-surface md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">{active.period}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-text-primary">{active.title}</h3>
          <p className="mt-1 text-text-muted">{active.company}</p>
          {active.focus ? (
            <p className="mt-4 text-sm leading-relaxed text-text-muted">{active.focus}</p>
          ) : null}
          <ul className="mt-6 space-y-3">
            {active.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-2">
            {active.badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2 rounded-md border border-ink-700 bg-ink-950 px-2 py-1">
                <TechIcon name={badge} size="sm" />
                <span className="font-mono text-[11px] text-text-muted">{badge}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
