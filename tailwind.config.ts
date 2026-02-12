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
          cyan: "var(--accent-cyan)",
          teal: "var(--accent-teal)",
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
    },
  },
  plugins: [],
};

export default config;
