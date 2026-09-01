"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import type { ProjectScreenshot } from "@/data/projects";

type ScreenshotGalleryProps = {
  screenshots: ProjectScreenshot[];
  projectTitle: string;
  /** Render as a compact button (featured card) or a fuller CTA */
  variant?: "button" | "cta";
  className?: string;
};

export function ScreenshotGallery({
  screenshots,
  projectTitle,
  variant = "button",
  className = "",
}: ScreenshotGalleryProps) {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? screenshots.length - 1 : i - 1)),
    [screenshots.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i >= screenshots.length - 1 ? 0 : i + 1)),
    [screenshots.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  if (!screenshots.length) return null;

  const current = screenshots[index];

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        className={
          variant === "cta"
            ? `inline-flex items-center gap-2 rounded-md border border-ink-700 bg-ink-900 px-4 py-2.5 font-mono text-[13px] text-text-primary transition-colors hover:border-signal-dim hover:bg-ink-800 ${className}`
            : `inline-flex items-center gap-2 font-mono text-xs text-signal-bright transition-colors hover:text-signal ${className}`
        }
      >
        <Images size={14} />
        View Screenshots
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={close}
          >
            <motion.div
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-ink-700 bg-ink-900 shadow-2xl"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 border-b border-ink-700 px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p id={titleId} className="truncate font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                    {projectTitle}
                  </p>
                  <p className="mt-1 truncate text-sm text-text-muted">
                    {current.label}
                    <span className="text-text-faint">
                      {" "}
                      · {index + 1}/{screenshots.length}
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink-700 text-text-muted hover:text-text-primary"
                  aria-label="Close screenshots"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="relative flex min-h-0 flex-1 items-center justify-center bg-ink-950 p-3 sm:p-6">
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 bg-ink-900/90 text-text-primary sm:left-4"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="relative aspect-[16/10] w-full max-h-[70vh]">
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 960px"
                    priority
                  />
                </div>

                <button
                  type="button"
                  onClick={next}
                  className="absolute right-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 bg-ink-900/90 text-text-primary sm:right-4"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <ul className="flex gap-2 overflow-x-auto border-t border-ink-700 px-4 py-3 sm:px-5">
                {screenshots.map((shot, i) => (
                  <li key={shot.src} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`relative h-14 w-24 overflow-hidden rounded-md border ${
                        i === index ? "border-signal-bright" : "border-ink-700 opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`Show ${shot.label}`}
                      aria-current={i === index ? "true" : undefined}
                    >
                      <Image
                        src={shot.src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
