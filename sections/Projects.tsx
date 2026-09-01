"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { TechIcon } from "@/components/TechIcon";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { Section, SectionHeading } from "@/components/Section";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Project"
        title="Expense Manager"
        description="A personal full-stack finance system — written as an engineering case study, with product screenshots you can flip through."
      />
      <ul className="space-y-5">
        {projects.map((project) => (
          <li key={project.slug}>
            <article className="rounded-xl border border-ink-700 bg-ink-900 p-6 lit-surface md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                  {project.category}
                </p>
                <p className="font-mono text-[11px] text-text-faint">{project.year}</p>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
                {project.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 rounded-md border border-ink-700 bg-ink-950 px-2 py-1"
                  >
                    <TechIcon name={name} size="sm" />
                    <span className="font-mono text-[11px] text-text-muted">{name}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-md bg-signal-bright px-4 py-2.5 font-mono text-[13px] text-ink-950 transition-colors hover:bg-signal"
                >
                  View Case Study <ArrowRight size={14} />
                </Link>
                <ScreenshotGallery
                  screenshots={project.screenshots}
                  projectTitle={project.title}
                  variant="cta"
                />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
