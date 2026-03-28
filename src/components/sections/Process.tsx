"use client";

import { processSteps } from "@/data/process";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-28 bg-[var(--bg-primary)]">
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeader
              label="How we work"
              title="From idea to production"
              subtitle="Four clear steps. No surprises. Regular demos and tight feedback loops throughout."
              centered
            />
          </div>
        </Reveal>
        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {processSteps.map((step, i) => (
            <Reveal key={step.id}>
              <div className="relative text-center px-4 py-8 lg:py-10">
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-[46px] -right-2 w-10 h-px bg-gradient-to-r from-[var(--accent-dim)] to-transparent opacity-40"
                    aria-hidden
                  />
                )}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[var(--accent-dim)] bg-[var(--accent-glow)] font-mono text-[13px] text-[var(--accent-bright)] mb-4">
                  {String(step.step).padStart(2, "0")}
                </div>
                <h3 className="font-display font-semibold text-base text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[var(--text-tertiary)] leading-snug px-1">
                  {step.description}
                </p>
                <p className="font-mono text-[11px] text-[var(--accent-dim)] mt-2">
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
