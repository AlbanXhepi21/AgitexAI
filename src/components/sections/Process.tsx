"use client";

import { processSteps } from "@/data/process";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-28 bg-[var(--bg-primary)] scroll-mt-24">
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeader
              label="How we work"
              title="From signed scope to production—in five steps"
              subtitle="AI consulting and implementation with clear checkpoints: discovery, architecture, build, ship, and measurable iteration. No black-box phases."
              centered
            />
          </div>
        </Reveal>
        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <Reveal key={step.id}>
              <div className="relative text-center h-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-8 lg:py-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[var(--accent-dim)] bg-[var(--accent-glow)] font-mono text-[13px] text-[var(--accent-bright)] mb-4">
                  {String(step.step).padStart(2, "0")}
                </div>
                <h3 className="font-display font-semibold text-base text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[var(--text-tertiary)] leading-snug px-1">
                  {step.description}
                </p>
                <p className="font-mono text-[11px] text-[var(--accent-dim)] mt-3">
                  {step.duration}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
