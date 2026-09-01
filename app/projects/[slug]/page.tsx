import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { SystemMap } from "@/components/SystemMap";
import { TechIcon } from "@/components/TechIcon";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { Container } from "@/components/Section";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="grain-surface bg-ink-950 pb-24 pt-12">
      <Container className="max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text-primary"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-text-muted">{project.summary}</p>

        <div className="mt-8">
          <ScreenshotGallery
            screenshots={project.screenshots}
            projectTitle={project.title}
            variant="cta"
          />
        </div>
      </Container>

      <Container className="mt-16 max-w-3xl space-y-16">
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">Overview</h2>
          <ul className="mt-5 space-y-3">
            {project.contributions.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-muted md:text-base">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">My Role</h2>
          <p className="mt-3 text-sm text-text-faint">Full-stack ownership of product and backend.</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.role.map((item) => (
              <li
                key={item}
                className="rounded-md border border-ink-700 bg-ink-900 px-3 py-2 font-mono text-xs text-text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {project.tech.length ? (
          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">Technology</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-md border border-ink-700 bg-ink-900 px-2 py-1"
                >
                  <TechIcon name={name} size="sm" />
                  <span className="font-mono text-[11px] text-text-muted">{name}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.challenges.length ? (
          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
              Key Engineering Challenges
            </h2>
            <dl className="mt-5 divide-y divide-ink-700 border-y border-ink-700">
              {project.challenges.map((challenge) => (
                <div key={challenge.title} className="grid gap-2 py-5 md:grid-cols-[14rem_1fr]">
                  <dt className="font-display text-base font-semibold text-text-primary">
                    {challenge.title}
                  </dt>
                  <dd className="text-sm leading-relaxed text-text-muted">{challenge.detail}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {project.architecture ? (
          <section>
            <h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
              Architecture
            </h2>
            <SystemMap nodes={project.architecture} note={project.architectureNote} />
          </section>
        ) : null}

        {project.screenshots.length ? (
          <section>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                Product Screenshots
              </h2>
              <ScreenshotGallery
                screenshots={project.screenshots}
                projectTitle={project.title}
                variant="button"
              />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((shot) => (
                <li
                  key={shot.src}
                  className="overflow-hidden rounded-xl border border-ink-700 bg-ink-900"
                >
                  <div className="relative aspect-[16/10] bg-ink-950">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 480px"
                    />
                  </div>
                  <p className="border-t border-ink-700 px-3 py-2 font-mono text-[11px] text-text-muted">
                    {shot.label}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>
    </article>
  );
}
