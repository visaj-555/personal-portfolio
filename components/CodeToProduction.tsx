"use client";

/**
 * Signature hero visual — CODE → GITHUB → DOCKER → KUBERNETES → AWS → LIVE
 * Cinematic delivery pipeline (conceptual — not a claim about any one project’s infra).
 *
 * Alternatives kept in Hero for restore:
 * - BackendLattice
 * - RequestTrace
 */

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SiNestjs, SiGithub, SiDocker, SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";

type StageId = "code" | "github" | "docker" | "k8s" | "aws" | "live";

type Stage = {
  id: StageId;
  label: string;
  hint: string;
  Icon?: IconType;
};

const STAGES: Stage[] = [
  { id: "code", label: "CODE", hint: "NestJS · TypeScript", Icon: SiNestjs },
  { id: "github", label: "GITHUB", hint: "git push origin main", Icon: SiGithub },
  { id: "docker", label: "DOCKER", hint: "container · image build", Icon: SiDocker },
  { id: "k8s", label: "KUBERNETES", hint: "pods · rollout", Icon: SiKubernetes },
  { id: "aws", label: "AWS", hint: "cloud · scale", Icon: FaAws },
  { id: "live", label: "LIVE", hint: "production · healthy" },
];

const STAGE_MS: Record<StageId, number> = {
  code: 3400,
  github: 2000,
  docker: 2000,
  k8s: 2000,
  aws: 2000,
  live: 3600,
};

const NEST_LINES = [
  "@Controller('api')",
  "export class AppController {",
  "  constructor(private api: AppService) {}",
  "",
  "  @Get('health')",
  "  health() {",
  "    return { status: 'ok' };",
  "  }",
  "}",
];

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  x: `${8 + ((i * 17) % 84)}%`,
  y: `${12 + ((i * 23) % 72)}%`,
  size: i % 3 === 0 ? 2 : 1.25,
  delay: (i % 7) * 0.35,
  dur: 3.8 + (i % 5) * 0.55,
}));

const easeOut = [0.22, 1, 0.36, 1] as const;

function highlightNest(code: string) {
  const parts = code.split(
    /(@\w+|'[^']*'|\breturn\b|\bexport\b|\bclass\b|\bconstructor\b|\bprivate\b)/g,
  );
  return parts.map((part, i) => {
    if (!part) return null;
    if (part.startsWith("@")) {
      return (
        <span key={i} className="text-signal-bright">
          {part}
        </span>
      );
    }
    if (part.startsWith("'")) {
      return (
        <span key={i} className="text-[#c4b5fd]">
          {part}
        </span>
      );
    }
    if (["return", "export", "class", "constructor", "private"].includes(part)) {
      return (
        <span key={i} className="text-[#7dd3fc]">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function CodeEditor({ reduce }: { reduce: boolean }) {
  const [visible, setVisible] = useState(reduce ? NEST_LINES.length : 0);

  useEffect(() => {
    if (reduce) return;
    setVisible(0);
    let line = 0;
    const id = window.setInterval(() => {
      line += 1;
      setVisible(line);
      if (line >= NEST_LINES.length) window.clearInterval(id);
    }, 220);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative w-full max-w-[300px] overflow-hidden rounded-xl border border-white/10 bg-[#090e16]/90 shadow-[0_0_60px_rgba(76,126,255,0.18)] backdrop-blur-sm">
      {/* Editor chrome scan */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-signal/10 via-transparent to-transparent"
        animate={reduce ? undefined : { opacity: [0.35, 0.15, 0.35] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-signal-bright/10 to-transparent"
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="relative flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
        <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
        <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
        <span className="ml-2 flex items-center gap-2 truncate font-mono text-[10px] text-text-faint">
          <SiNestjs size={11} color="#E0234E" />
          app.controller.ts
        </span>
      </div>

      <pre className="relative min-h-[168px] overflow-hidden px-3 py-3 font-mono text-[11px] leading-[1.55]">
        {NEST_LINES.map((line, i) => {
          const shown = i < visible;
          return (
            <motion.div
              key={i}
              className="flex gap-3"
              initial={false}
              animate={{ opacity: shown ? 1 : 0.12, x: shown ? 0 : -4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-3 shrink-0 select-none text-right text-text-faint/40">
                {i + 1}
              </span>
              <code className="text-text-muted">
                {shown ? highlightNest(line) : <span>&nbsp;</span>}
                {shown && i === Math.min(visible, NEST_LINES.length) - 1 && !reduce ? (
                  <motion.span
                    className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-[2px] bg-signal-bright"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  />
                ) : null}
              </code>
            </motion.div>
          );
        })}
      </pre>
    </div>
  );
}

function GithubScene() {
  return (
    <div className="flex w-full max-w-[280px] flex-col items-center gap-5">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border border-signal/30"
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-3 rounded-full bg-signal/10 blur-xl"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <SiGithub size={44} color="var(--signal-bright)" style={{ filter: "drop-shadow(0 0 16px rgba(127,166,255,0.55))" }} />
      </div>
      <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-ink-950/70 px-3 py-2.5 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-text-faint">
          <span className="text-emerald-400">●</span> main
          <span className="text-text-faint/50">·</span>
          <motion.span
            className="text-signal-bright"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            pushing…
          </motion.span>
        </div>
        <motion.p
          className="mt-1.5 text-text-muted"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <span className="text-[#c4b5fd]">commit</span> a3f9c21 · ship api health
        </motion.p>
      </div>
    </div>
  );
}

function DockerScene() {
  const layers = ["base", "deps", "build", "runtime"];
  return (
    <div className="flex w-full max-w-[260px] flex-col items-center gap-5">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-2xl border border-sky-400/25"
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <SiDocker size={48} color="#38bdf8" style={{ filter: "drop-shadow(0 0 16px rgba(56,189,248,0.45))" }} />
      </div>
      <div className="flex w-full flex-col gap-1.5">
        {layers.map((layer, i) => (
          <motion.div
            key={layer}
            className="flex items-center gap-2 rounded-md border border-white/10 bg-ink-950/60 px-2.5 py-1.5"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.18, duration: 0.35, ease: easeOut }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
              layer · {layer}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function K8sScene() {
  const pods = [
    { x: 50, y: 18 },
    { x: 18, y: 58 },
    { x: 82, y: 58 },
    { x: 34, y: 88 },
    { x: 66, y: 88 },
  ];
  return (
    <div className="flex w-full max-w-[260px] flex-col items-center gap-4">
      <div className="relative h-36 w-full">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {pods.map((p, i) => (
            <motion.line
              key={`l-${i}`}
              x1="50"
              y1="48"
              x2={p.x}
              y2={p.y}
              stroke="rgba(127,166,255,0.35)"
              strokeWidth="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.45 }}
            />
          ))}
        </svg>
        <div className="absolute left-1/2 top-[42%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-signal/40 bg-ink-950/80">
          <SiKubernetes size={26} color="var(--signal-bright)" style={{ filter: "drop-shadow(0 0 12px rgba(127,166,255,0.5))" }} />
        </div>
        {pods.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-bright/70 bg-signal/30"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 260, damping: 18 }}
          />
        ))}
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
        5 pods · rollout complete
      </p>
    </div>
  );
}

function AwsScene() {
  const nodes = ["API", "Λ", "S3"];
  return (
    <div className="flex w-full max-w-[280px] flex-col items-center gap-5">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.22) 0%, rgba(76,126,255,0.08) 50%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <FaAws size={46} color="#FBBF24" style={{ filter: "drop-shadow(0 0 14px rgba(251,191,36,0.4))" }} />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        {nodes.map((n, i) => (
          <motion.div
            key={n}
            className="flex h-12 flex-1 items-center justify-center rounded-lg border border-amber/30 bg-ink-950/70 font-mono text-[11px] tracking-wider text-amber"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.35 }}
          >
            {n}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="h-px w-full origin-left bg-gradient-to-r from-transparent via-amber/70 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: easeOut }}
      />
    </div>
  );
}

function LiveScene({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative flex flex-col items-center gap-4 py-2">
      {!reduce && (
        <>
          <motion.span
            className="absolute h-28 w-28 rounded-full border border-signal-bright/30"
            animate={{ scale: [1, 1.45], opacity: [0.55, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            className="absolute h-28 w-28 rounded-full border border-signal/25"
            animate={{ scale: [1, 1.7], opacity: [0.4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.45 }}
          />
        </>
      )}
      <motion.span
        className="relative h-3.5 w-3.5 rounded-full bg-signal-bright"
        animate={
          reduce
            ? undefined
            : {
                boxShadow: [
                  "0 0 0 0 rgba(127,166,255,0)",
                  "0 0 22px 6px rgba(127,166,255,0.55)",
                  "0 0 0 0 rgba(127,166,255,0)",
                ],
              }
        }
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="text-center">
        <p className="font-mono text-base tracking-[0.35em] text-signal-bright">● LIVE</p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
          production healthy
        </p>
      </div>
    </div>
  );
}

function StageSpotlight({
  stage,
  reduce,
}: {
  stage: Stage;
  reduce: boolean;
}) {
  switch (stage.id) {
    case "code":
      return <CodeEditor reduce={reduce} />;
    case "github":
      return <GithubScene />;
    case "docker":
      return <DockerScene />;
    case "k8s":
      return <K8sScene />;
    case "aws":
      return <AwsScene />;
    case "live":
      return <LiveScene reduce={reduce} />;
  }
}

function PipelineRail({
  index,
  reduce,
}: {
  index: number;
  reduce: boolean;
}) {
  const progress = index / (STAGES.length - 1);

  return (
    <div className="relative z-10 border-t border-white/5 px-3 py-4 sm:px-5">
      <ol className="relative flex items-start justify-between gap-1">
        <span
          className="pointer-events-none absolute left-5 right-5 top-[18px] h-px bg-ink-700"
          aria-hidden
        />
        <motion.span
          className="pointer-events-none absolute left-5 right-5 top-[18px] h-px origin-left bg-gradient-to-r from-signal via-[#8b5cf6] to-signal-bright"
          aria-hidden
          animate={{ scaleX: progress }}
          transition={{ duration: 0.55, ease: easeOut }}
        />

        {/* Traveling energy bead on the rail */}
        {!reduce && (
          <motion.span
            className="pointer-events-none absolute top-[15px] z-20 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_12px_3px_rgba(127,166,255,0.75)]"
            aria-hidden
            animate={{ left: `${8 + progress * 84}%` }}
            transition={{ duration: 0.55, ease: easeOut }}
          />
        )}

        {STAGES.map((stage, i) => {
          const done = i < index;
          const isActive = i === index;
          const Icon = stage.Icon;
          return (
            <li key={stage.id} className="relative z-10 flex w-12 flex-col items-center gap-1.5 sm:w-14">
              <motion.span
                className={`flex h-9 w-9 items-center justify-center rounded-full border bg-ink-900/95 ${
                  isActive
                    ? "border-signal-bright/70"
                    : done
                      ? "border-signal/40"
                      : "border-ink-700"
                }`}
                animate={
                  isActive && !reduce
                    ? {
                        boxShadow: [
                          "0 0 0 0 rgba(127,166,255,0)",
                          "0 0 0 6px rgba(127,166,255,0.12)",
                          "0 0 0 0 rgba(127,166,255,0)",
                        ],
                      }
                    : { boxShadow: "0 0 0 0 rgba(0,0,0,0)" }
                }
                transition={{ duration: 1.6, repeat: isActive ? Infinity : 0 }}
              >
                {stage.id === "live" ? (
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive || done ? "bg-signal-bright" : "bg-ink-700"
                    }`}
                  />
                ) : (
                  Icon && (
                    <Icon
                      size={15}
                      color={
                        isActive || done ? "var(--signal-bright)" : "var(--text-faint)"
                      }
                      style={{
                        filter:
                          isActive
                            ? "drop-shadow(0 0 8px rgba(127,166,255,0.65))"
                            : "none",
                      }}
                    />
                  )
                )}
              </motion.span>
              <span
                className={`hidden text-center font-mono text-[8px] tracking-[0.12em] sm:block ${
                  isActive || done ? "text-text-muted" : "text-text-faint/70"
                }`}
              >
                {stage.label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function CodeToProduction() {
  const reduceMotion = useReducedMotion();
  const reduce = !!reduceMotion;
  const [index, setIndex] = useState(reduce ? STAGES.length - 1 : 0);
  const active = STAGES[index];

  useEffect(() => {
    if (reduce) return;
    const delay = STAGE_MS[active.id];
    const id = window.setTimeout(() => {
      setIndex((prev) => (prev >= STAGES.length - 1 ? 0 : prev + 1));
    }, delay);
    return () => window.clearTimeout(id);
  }, [index, reduce, active.id]);

  const atmosphere = useMemo(() => {
    const hues: Record<StageId, string> = {
      code: "rgba(76,126,255,0.22)",
      github: "rgba(127,166,255,0.18)",
      docker: "rgba(56,189,248,0.18)",
      k8s: "rgba(139,92,246,0.18)",
      aws: "rgba(251,191,36,0.14)",
      live: "rgba(127,166,255,0.28)",
    };
    return hues[active.id];
  }, [active.id]);

  return (
    <figure
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b12]"
      aria-label="Code to production pipeline: NestJS code, GitHub, Docker, Kubernetes, AWS, then live"
    >
      {/* Dynamic atmosphere per stage */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ background: `
          radial-gradient(ellipse 85% 65% at 25% -5%, ${atmosphere}, transparent 55%),
          radial-gradient(ellipse 70% 50% at 95% 100%, rgba(124,92,255,0.12), transparent 50%),
          radial-gradient(circle at 50% 40%, rgba(15,20,28,0), rgba(7,11,18,0.75) 100%)
        ` }}
        transition={{ duration: 0.6 }}
      />

      {/* Soft noise vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {!reduce &&
        PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute rounded-full bg-white/50"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [0, -14, 0], opacity: [0.1, 0.55, 0.1] }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      <figcaption className="relative z-10 flex items-center justify-between border-b border-white/5 px-4 py-2.5 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
            Pipeline
          </span>
          <span className="hidden font-mono text-[10px] text-text-faint/80 sm:inline">
            / {active.hint}
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
          {String(index + 1).padStart(2, "0")} / {String(STAGES.length).padStart(2, "0")}
        </span>
      </figcaption>

      <div className="relative z-10 flex min-h-[250px] flex-col items-center justify-center px-4 py-7 sm:min-h-[270px] sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={
              reduce
                ? false
                : { opacity: 0, y: 18, scale: 0.94, filter: "blur(8px)" }
            }
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={
              reduce
                ? undefined
                : { opacity: 0, y: -14, scale: 1.03, filter: "blur(8px)" }
            }
            transition={{ duration: 0.48, ease: easeOut }}
            className="flex w-full flex-col items-center"
          >
            <StageSpotlight stage={active} reduce={reduce} />
            <motion.p
              className="mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-text-faint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {active.label}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      <PipelineRail index={index} reduce={reduce} />
    </figure>
  );
}
