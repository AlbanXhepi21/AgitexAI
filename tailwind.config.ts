import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "deep-blue": "var(--primary-deep-blue)",
          "deep-blue-dark": "var(--primary-deep-blue-dark)",
          "deep-blue-light": "var(--primary-deep-blue-light)",
        },
        accent: {
          "electric-blue": "var(--accent-electric-blue)",
          cyan: "var(--accent-cyan, #06B6D4)",
          teal: "var(--accent-teal, #14B8A6)",
        },
        agitex: {
          navy: "var(--navy)",
          "navy-deep": "var(--navy-deep)",
          card: "var(--navy-card)",
          "card-hover": "var(--navy-card-hover)",
          accent: "var(--accent)",
          "accent-bright": "var(--accent-bright)",
          muted: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-card": "var(--gradient-card)",
        "gradient-text": "var(--gradient-text)",
      },
      boxShadow: {
        "accent-glow": "0 8px 30px var(--accent-glow-strong)",
        "accent-soft": "0 20px 60px rgba(0,0,0,0.4), 0 0 60px var(--accent-glow)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
