"use client";

import { motion } from "framer-motion";
import { techStackAll } from "@/data/techStack";

const techLogos = techStackAll;

export function TechMarquee() {
  const duplicated = [...techLogos, ...techLogos];

  return (
    <div className="mt-20 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1440] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="text-white/70 hover:text-white text-lg font-medium transition-opacity"
          >
            {name}
          </span>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-12 whitespace-nowrap mt-6"
        animate={{ x: [-1440, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((name, i) => (
          <span
            key={`2-${name}-${i}`}
            className="text-white/60 hover:text-white/90 text-base font-medium"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
