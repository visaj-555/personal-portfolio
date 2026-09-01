"use client";

import { useRef, type MouseEvent, type ReactNode, type AnchorHTMLAttributes } from "react";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function MagneticButton({
  children,
  variant = "secondary",
  className = "",
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    onMouseMove?.(event);
  };

  const handleLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (node) node.style.transform = "translate(0, 0)";
    onMouseLeave?.(event);
  };

  const variants = {
    primary:
      "bg-signal-bright text-ink-950 hover:bg-signal lit-surface",
    secondary:
      "border border-ink-700 bg-ink-900 text-text-primary hover:border-signal-dim hover:bg-ink-800",
    ghost: "text-text-muted hover:text-text-primary",
  };

  return (
    <a
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2.5 font-mono text-[13px] tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
      style={{ transition: "transform 120ms ease, background-color 150ms ease, border-color 150ms ease, color 150ms ease" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </a>
  );
}
