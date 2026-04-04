"use client";

import { Shield, Globe2, Rocket, LineChart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    icon: Rocket,
    title: "Production-first delivery",
    body: "Systems designed to pass security review and stay running—not prototypes dressed as products.",
  },
  {
    icon: Globe2,
    title: "US & EU go-to-market",
    body: "Engagement models aligned with how US and EU teams buy, ship, and support software.",
  },
  {
    icon: Shield,
    title: "GDPR & EU AI Act–aware",
    body: "Data handling, logging, and human oversight built for regulated and high-trust environments.",
  },
  {
    icon: LineChart,
    title: "Outcome-led roadmaps",
    body: "Cost, automation, and revenue impact scored before a line item hits your plan.",
  },
];

export function SocialProof() {
  return (
    <section
      aria-label="Trust indicators"
      className="py-16 md:py-20 bg-[var(--bg-secondary)] border-y border-[var(--border)]"
    >
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <p className="text-center text-[13px] font-mono uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
            Trust
          </p>
          <h2 className="font-display font-bold text-xl md:text-2xl text-[var(--text-primary)] text-center max-w-3xl mx-auto leading-snug">
            Enterprise AI solutions built for deployment—not shelfware
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <Reveal key={item.title}>
              <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-colors hover:border-[var(--border-hover)]">
                <item.icon
                  className="w-6 h-6 text-[var(--accent-bright)] mb-4"
                  aria-hidden
                />
                <h3 className="font-display font-semibold text-[15px] text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
