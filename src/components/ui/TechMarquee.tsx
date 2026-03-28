"use client";

import { motion } from "framer-motion";
import { techStackMarquee } from "@/data/techStack";

export function TechMarquee() {
  const row = [...techStackMarquee, ...techStackMarquee];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-10 md:gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {row.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="font-mono text-[13px] text-[var(--text-tertiary)] tracking-wide whitespace-nowrap flex items-center gap-3"
          >
            {name}
            <span className="text-[var(--accent-dim)] opacity-40" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
