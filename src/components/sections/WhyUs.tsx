"use client";

import { Zap, Award, Layers } from "lucide-react";
import { valueProps } from "@/data/valueProps";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  Zap,
  Award,
  Layers,
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-28 bg-[var(--bg-primary)]">
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <SectionHeader
            label="Why AgitexAI"
            title="Differentiation that matters to CTOs and COOs"
            subtitle="Not another generic dev shop—a focused AI development agency for production-grade agents, RAG, and voice, with US and EU delivery experience and compliance-aware engineering."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 md:mt-14">
          {valueProps.map((prop) => {
            const Icon = iconMap[prop.icon as keyof typeof iconMap] ?? Zap;
            return (
              <Reveal key={prop.id}>
                <div className="h-full rounded-xl border border-[var(--border)] p-7 transition-colors duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card)]">
                  <h3 className="font-display font-semibold text-base text-[var(--text-primary)] mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {prop.description}
                  </p>
                  <div className="mt-5 flex justify-end opacity-40">
                    <Icon className="w-6 h-6 text-[var(--accent-bright)]" aria-hidden />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
