"use client";

/**
 * TechIcon — single, data-driven mapping from a technology name to its
 * accurate vector brand mark, rendered inside one consistent frame so the
 * whole skills grid / experience badges reads as one designed system
 * instead of a row of mismatched default-colored logo badges.
 *
 * Brand marks come from Simple Icons via `react-icons/si`, with Devicon /
 * Font Awesome used only where Simple Icons no longer ships the mark
 * (AWS, OpenAI). Don't hand-draw or rasterize logos elsewhere; always
 * route through this component.
 *
 * Treatment is site-wide: every mark is restyled to the signal accent
 * (duotone) or a single neutral (monoline). Brand hex colors are not
 * painted on the page — that is the generic tech-strip look.
 */

import {
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJsonwebtokens,
  SiGoogle,
  SiGooglegemini,
  SiGit,
  SiPostman,
  SiSwagger,
  SiPrisma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { AiFillOpenAI } from "react-icons/ai";
import {
  Network,
  Radio,
  ShieldCheck,
  Code,
  Database,
  Cylinder,
  Gauge,
} from "lucide-react";
import type { IconType } from "react-icons";
import type { ComponentType } from "react";

type IconEntry =
  | { kind: "brand"; Icon: IconType }
  | { kind: "concept"; Icon: ComponentType<{ size?: number; color?: string; strokeWidth?: number }> };

const ICON_MAP: Record<string, IconEntry> = {
  "Node.js": { kind: "brand", Icon: SiNodedotjs },
  NestJS: { kind: "brand", Icon: SiNestjs },
  "Express.js": { kind: "brand", Icon: SiExpress },
  "REST APIs": { kind: "concept", Icon: Network },
  WebSockets: { kind: "concept", Icon: Radio },
  TypeScript: { kind: "brand", Icon: SiTypescript },
  JavaScript: { kind: "brand", Icon: SiJavascript },
  PostgreSQL: { kind: "brand", Icon: SiPostgresql },
  Prisma: { kind: "brand", Icon: SiPrisma },
  MongoDB: { kind: "brand", Icon: SiMongodb },
  Databases: { kind: "concept", Icon: Database },
  NoSQL: { kind: "concept", Icon: Cylinder },
  "Database Optimization": { kind: "concept", Icon: Gauge },
  "React.js": { kind: "brand", Icon: SiReact },
  HTML: { kind: "brand", Icon: SiHtml5 },
  CSS: { kind: "brand", Icon: SiCss },
  Bootstrap: { kind: "brand", Icon: SiBootstrap },
  "AWS Lambda": { kind: "brand", Icon: FaAws },
  "AWS S3": { kind: "brand", Icon: FaAws },
  JWT: { kind: "brand", Icon: SiJsonwebtokens },
  OAuth: { kind: "concept", Icon: ShieldCheck },
  Authentication: { kind: "concept", Icon: ShieldCheck },
  "Google OAuth": { kind: "brand", Icon: SiGoogle },
  "OpenAI API": { kind: "brand", Icon: AiFillOpenAI },
  "Gemini API": { kind: "brand", Icon: SiGooglegemini },
  Git: { kind: "brand", Icon: SiGit },
  Postman: { kind: "brand", Icon: SiPostman },
  Swagger: { kind: "brand", Icon: SiSwagger },
};

type TechIconProps = {
  name: string;
  treatment?: "duotone" | "monoline";
  size?: "sm" | "md";
};

export function TechIcon({ name, treatment = "duotone", size = "md" }: TechIconProps) {
  const entry = ICON_MAP[name];
  const Icon = entry?.Icon ?? Code;
  const dimension = size === "sm" ? 16 : 20;
  const frame = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const iconColor = treatment === "monoline" ? "var(--text-muted)" : "var(--signal)";

  return (
    <span
      className={`inline-flex ${frame} shrink-0 items-center justify-center rounded-md border border-ink-700 bg-ink-900`}
      title={name}
      aria-label={name}
    >
      <Icon size={dimension} color={iconColor} strokeWidth={entry?.kind === "concept" ? 1.75 : undefined} />
    </span>
  );
}
