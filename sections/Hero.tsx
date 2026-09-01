"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { site } from "@/data/site";
import { MagneticButton } from "@/components/MagneticButton";
import { CodeToProduction } from "@/components/CodeToProduction";
import { Container } from "@/components/Section";

/*
 * Other hero visuals — uncomment one import + swap the JSX to restore:
 *
 * import { BackendLattice } from "@/components/BackendLattice";
 * import { RequestTrace } from "@/components/RequestTrace";
 *
 * Note: RequestTrace body may still be commented inside its file.
 */

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="grain-surface bg-ink-950">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div>
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {site.location}
          </motion.p>
          <motion.h1
            className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.08 }}
          >
            {site.name}
          </motion.h1>
          <p className="mt-3 font-mono text-sm text-text-muted">{site.title}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
            {site.positioning}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton href="/#projects" variant="primary">
              View My Work
            </MagneticButton>
            <MagneticButton href={site.resumeHref} variant="secondary">
              Download Resume
            </MagneticButton>
            <MagneticButton href="/#contact" variant="ghost">
              Let&apos;s Talk
            </MagneticButton>
          </div>

          <ul className="mt-8 flex items-center gap-5">
            <li>
              <a
                href={site.linkedin.href}
                className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text-primary"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin size={14} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.github.href}
                className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text-primary"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub size={14} /> GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text-primary"
              >
                <Mail size={14} /> Email
              </a>
            </li>
          </ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: reduce ? 0 : 0.16 }}
        >
          <CodeToProduction />
          {/* <BackendLattice /> */}
          {/* <RequestTrace /> */}
        </motion.div>
      </Container>
    </section>
  );
}
