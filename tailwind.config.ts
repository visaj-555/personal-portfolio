import type { Config } from "tailwindcss";

/**
 * Color grading system for the portfolio.
 *
 * Direction: cool-graphite "systems" palette instead of flat black — four
 * layered near-black steps for real depth, a signal-blue accent family
 * (base / dim / bright), and a single warm amber used ONLY as a rare
 * secondary contrast (status-light style), never as a second competing hero
 * color. Adjust hex values here if the design plan from the brief lands on
 * a different direction — this file is the single source of truth so
 * components never hardcode a raw hex.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0E14", // page background
          900: "#0F141C", // section / card panel
          800: "#161D28", // elevated / hover surface
          700: "#1E2733", // hairline borders, dividers
        },
        text: {
          primary: "#E7EBF0", // off-white, cool-graded (not pure #fff)
          muted: "#8B95A3", // secondary copy
          faint: "#748090", // captions, meta, timestamps — lifted for AA contrast on ink-950
        },
        signal: {
          dim: "#2C4B99", // desaturated variant — secondary UI, inactive states
          DEFAULT: "#4C7EFF", // primary accent
          bright: "#7FA6FF", // reserved for the signature element + key CTAs only
        },
        amber: {
          DEFAULT: "#F5A623", // rare secondary contrast — status-light use only
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        // subtle grain so large flat panels don't read as one pasted hex
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
