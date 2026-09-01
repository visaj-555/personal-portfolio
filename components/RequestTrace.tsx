"use client";

/**
 * DEPRECATED for the hero — replaced by CodeToProduction (CODE → PRODUCTION).
 * Kept commented so the earlier request-lifecycle schematic can be restored
 * if needed. Do not import this into Hero.
 */

/*
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { requestHops } from "@/data/trace";

const STEP_MS = 520;
const HOLD_MS = 1600;

export function RequestTrace() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(reduce ? requestHops.length - 1 : 0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((prev) => {
        if (prev >= requestHops.length - 1) return 0;
        return prev + 1;
      });
    }, active >= requestHops.length - 1 ? HOLD_MS : STEP_MS);
    return () => window.clearInterval(id);
  }, [active, reduce]);

  return (
    <figure
      className="overflow-hidden rounded-xl border border-ink-700 bg-ink-900 lit-surface"
      aria-label="Schematic of a request moving through auth, NestJS, PostgreSQL, AWS Lambda, WebSockets, and an AI service to a 200 response"
    >
      <figcaption className="flex items-center justify-between gap-3 border-b border-ink-700 px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">Trace</span>
          <span className="truncate font-mono text-xs text-text-muted">POST /v1/request</span>
        </div>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-text-faint">
          Schematic
        </span>
      </figcaption>

      <ol className="space-y-1.5 p-4 sm:p-5">
        {requestHops.map((hop, index) => {
          const done = index <= active;
          const current = index === active;
          const isOk = hop.id === "ok";
          const width = done ? (isOk ? "100%" : `${18 + index * 10}%`) : "0%";

          return (
            <li key={hop.id} className="grid grid-cols-[7.5rem_1fr_auto] items-center gap-3 sm:grid-cols-[8.5rem_1fr_3.5rem]">
              <span
                className={`font-mono text-[11px] tracking-wide ${
                  done ? "text-text-primary" : "text-text-faint"
                }`}
              >
                {hop.label}
              </span>
              <div className="relative h-1.5 overflow-hidden rounded-full bg-ink-800">
                <div
                  className={`absolute inset-y-0 left-0 origin-left rounded-full ${
                    isOk ? "bg-signal-bright" : "bg-signal"
                  } ${current && !reduce ? "opacity-100" : done ? "opacity-80" : "opacity-0"}`}
                  style={{
                    width,
                    transition: reduce ? "none" : "width 420ms ease",
                  }}
                />
              </div>
              <span className="hidden items-center justify-end gap-1.5 sm:flex">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    done ? (isOk ? "bg-signal-bright" : "bg-amber") : "bg-ink-700"
                  }`}
                  style={done && current && !reduce ? { animation: "ack-glow 1.2s ease-in-out infinite" } : undefined}
                  aria-hidden
                />
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    done ? (isOk ? "text-signal-bright" : "text-amber") : "text-text-faint"
                  }`}
                >
                  {done ? (isOk ? "200" : "ACK") : "—"}
                </span>
              </span>
            </li>
          );
        })}
      </ol>

      <p className="border-t border-ink-700 px-4 py-3 font-mono text-[10px] leading-relaxed text-text-faint sm:px-5">
        client → auth → NestJS → PostgreSQL → AWS Lambda → WebSockets → AI service → response
      </p>
    </figure>
  );
}
*/

export {};
