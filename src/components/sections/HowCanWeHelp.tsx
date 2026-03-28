"use client";

import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Rocket,
  GitBranch,
} from "lucide-react";
import { howCanWeHelpCards } from "@/data/howCanWeHelp";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  Lightbulb,
  Rocket,
  GitBranch,
};

export function HowCanWeHelp() {
  return (
    <section className="py-24 md:py-28 bg-[var(--bg-secondary)] border-y border-[var(--border)]">
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <SectionHeader
            label="How we help"
            title="Pick the path that fits"
            subtitle="Three common starting points — same team, same bar for quality."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 md:mt-14 max-w-5xl mx-auto">
          {howCanWeHelpCards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] ?? Lightbulb;
            return (
              <Reveal key={card.id}>
                <div className="group relative h-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-8 transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-[10px] bg-[var(--accent-glow)] border border-[rgba(45,122,224,0.12)] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[var(--accent-bright)]" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-[var(--text-primary)] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="text-[var(--accent-bright)] font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    {card.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
