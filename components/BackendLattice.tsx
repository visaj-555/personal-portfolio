"use client";

/**
 * Signature hero visual — Backend Lattice
 *
 * A living service topology: a glowing core with Auth, API, Data, Realtime,
 * Cloud, and AI nodes locking into a hexagonal mesh. A single signal packet
 * travels the lattice. Built to feel like precision infrastructure — not a
 * logo strip, terminal gimmick, or progress-bar pipeline.
 *
 * Alternatives kept commented in Hero for restore:
 * - CodeToProduction (CODE → GITHUB → DOCKER → K8s → AWS → LIVE)
 * - RequestTrace (request-lifecycle schematic)
 */

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type NodeDef = {
  id: string;
  label: string;
  x: number;
  y: number;
};

const W = 420;
const H = 320;
const CX = W / 2;
const CY = H / 2 - 6;

/** Hex ring around the core — systems a backend engineer actually owns */
const NODES: NodeDef[] = [
  { id: "auth", label: "AUTH", x: CX, y: 48 },
  { id: "api", label: "API", x: CX + 118, y: 108 },
  { id: "data", label: "DATA", x: CX + 118, y: 212 },
  { id: "rt", label: "REALTIME", x: CX, y: 272 },
  { id: "cloud", label: "CLOUD", x: CX - 118, y: 212 },
  { id: "ai", label: "AI", x: CX - 118, y: 108 },
];

/** Edges forming the hex + spokes to core */
const EDGES: [string, string][] = [
  ["auth", "api"],
  ["api", "data"],
  ["data", "rt"],
  ["rt", "cloud"],
  ["cloud", "ai"],
  ["ai", "auth"],
  ["auth", "core"],
  ["api", "core"],
  ["data", "core"],
  ["rt", "core"],
  ["cloud", "core"],
  ["ai", "core"],
];

const CYCLE_MS = 900;
const HOLD_MS = 2200;

function nodePoint(id: string) {
  if (id === "core") return { x: CX, y: CY };
  return NODES.find((n) => n.id === id)!;
}

function edgePath(a: string, b: string) {
  const p1 = nodePoint(a);
  const p2 = nodePoint(b);
  return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
}

export function BackendLattice() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(reduce ? NODES.length : 0);
  const [online, setOnline] = useState(!!reduce);

  const orderedReveal = useMemo(() => ["core", ...NODES.map((n) => n.id)], []);

  useEffect(() => {
    if (reduce) return;

    if (active > NODES.length) {
      setOnline(true);
      const hold = window.setTimeout(() => {
        setOnline(false);
        setActive(0);
      }, HOLD_MS);
      return () => window.clearTimeout(hold);
    }

    const id = window.setTimeout(() => {
      setActive((n) => n + 1);
    }, CYCLE_MS);
    return () => window.clearTimeout(id);
  }, [active, reduce]);

  const lit = new Set(orderedReveal.slice(0, Math.min(active + 1, orderedReveal.length)));
  if (online || reduce) {
    orderedReveal.forEach((id) => lit.add(id));
  }

  const packetTarget = active > 0 && active <= NODES.length ? NODES[active - 1] : null;

  return (
    <figure
      className="relative overflow-hidden rounded-xl border border-ink-700 bg-ink-900"
      aria-label="Animated backend service lattice: auth, API, data, realtime, cloud, and AI around a core"
    >
      {/* Atmospheric depth — blue + violet, single light origin */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 30% -5%, rgba(76,126,255,0.22), transparent 55%),
            radial-gradient(ellipse 55% 45% at 95% 90%, rgba(124,92,255,0.14), transparent 50%),
            radial-gradient(circle at 50% 48%, rgba(76,126,255,0.06), transparent 42%)
          `,
        }}
      />

      {/* Fine grid etch */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(127,166,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127,166,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 48%, black 20%, transparent 75%)",
        }}
      />

      <figcaption className="relative z-10 flex items-center justify-between border-b border-ink-700/80 px-4 py-2.5 sm:px-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
          Topology
        </span>
        <span
          className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] ${
            online || reduce ? "text-signal-bright" : "text-text-faint"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              online || reduce ? "bg-signal-bright" : "bg-ink-700"
            }`}
            style={
              online || reduce
                ? { boxShadow: "0 0 10px 2px rgba(127,166,255,0.55)" }
                : undefined
            }
          />
          {online || reduce ? "Online" : "Booting"}
        </span>
      </figcaption>

      <div className="relative z-10 px-2 py-3 sm:px-4 sm:py-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mx-auto h-auto w-full max-w-[420px]"
          role="img"
        >
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(127,166,255,0.55)" />
              <stop offset="55%" stopColor="rgba(76,126,255,0.15)" />
              <stop offset="100%" stopColor="rgba(76,126,255,0)" />
            </radialGradient>
            <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer ring */}
          <motion.circle
            cx={CX}
            cy={CY}
            r={128}
            fill="none"
            stroke="rgba(76,126,255,0.18)"
            strokeWidth="1"
            strokeDasharray="3 7"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />
          <circle
            cx={CX}
            cy={CY}
            r={86}
            fill="none"
            stroke="rgba(124,92,255,0.12)"
            strokeWidth="1"
          />

          {/* Edges */}
          {EDGES.map(([a, b], i) => {
            const aLit = lit.has(a);
            const bLit = lit.has(b);
            const on = aLit && bLit;
            return (
              <motion.path
                key={`${a}-${b}`}
                d={edgePath(a, b)}
                fill="none"
                stroke={on ? "rgba(127,166,255,0.55)" : "rgba(30,39,51,0.95)"}
                strokeWidth={on ? 1.25 : 1}
                initial={false}
                animate={{
                  pathLength: on || reduce ? 1 : 0.15,
                  opacity: on || reduce ? 1 : 0.35,
                }}
                transition={{ duration: 0.55, delay: reduce ? 0 : i * 0.02 }}
              />
            );
          })}

          {/* Traveling signal packet — core → newly lit node */}
          {!reduce && packetTarget && (
            <motion.circle
              key={`pkt-${packetTarget.id}`}
              r={3.5}
              fill="var(--signal-bright)"
              filter="url(#softGlow)"
              initial={{ cx: CX, cy: CY, opacity: 0 }}
              animate={{
                cx: [CX, packetTarget.x],
                cy: [CY, packetTarget.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          )}

          {/* Core */}
          <circle cx={CX} cy={CY} r={34} fill="url(#coreGlow)" />
          <circle
            cx={CX}
            cy={CY}
            r={16}
            fill="#0f141c"
            stroke={lit.has("core") ? "var(--signal-bright)" : "var(--ink-700)"}
            strokeWidth="1.5"
            filter={lit.has("core") ? "url(#softGlow)" : undefined}
          />
          <text
            x={CX}
            y={CY + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={lit.has("core") ? "var(--text-primary)" : "var(--text-faint)"}
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: 9,
              letterSpacing: "0.18em",
            }}
          >
            CORE
          </text>

          {/* Soft pulse when online */}
          {(online || reduce) && (
            <motion.circle
              cx={CX}
              cy={CY}
              r={22}
              fill="none"
              stroke="rgba(127,166,255,0.45)"
              strokeWidth="1"
              initial={{ opacity: 0.6, scale: 1 }}
              animate={
                reduce
                  ? { opacity: 0.35 }
                  : { opacity: [0.55, 0], scale: [1, 1.85] }
              }
              transition={
                reduce
                  ? undefined
                  : { duration: 1.8, repeat: Infinity, ease: "easeOut" }
              }
              style={{ transformOrigin: `${CX}px ${CY}px` }}
            />
          )}

          {/* Outer nodes */}
          {NODES.map((node, i) => {
            const on = lit.has(node.id);
            return (
              <g key={node.id}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={22}
                  fill="#0f141c"
                  stroke={on ? "rgba(127,166,255,0.7)" : "rgba(30,39,51,1)"}
                  strokeWidth={on ? 1.5 : 1}
                  initial={false}
                  animate={{
                    scale: on && !reduce && active === i + 1 ? [1, 1.08, 1] : 1,
                  }}
                  transition={{ duration: 0.45 }}
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                  filter={on ? "url(#softGlow)" : undefined}
                />
                <text
                  x={node.x}
                  y={node.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={on ? "var(--text-primary)" : "var(--text-faint)"}
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 8,
                    letterSpacing: "0.12em",
                  }}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="relative z-10 border-t border-ink-700/80 px-4 py-3 font-mono text-[10px] leading-relaxed text-text-faint sm:px-5">
        Auth · API · Data · Realtime · Cloud · AI — modular systems around one core
      </p>
    </figure>
  );
}
