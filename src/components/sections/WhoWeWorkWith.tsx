"use client";

import { whoWeWorkWith } from "@/data/whoWeWorkWith";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="py-24 md:py-28 bg-[var(--bg-primary)] scroll-mt-24"
    >
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <SectionHeader
            label={whoWeWorkWith.headline}
            title={whoWeWorkWith.title}
            subtitle={whoWeWorkWith.subtitle}
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 md:mt-14">
          {whoWeWorkWith.segments.map((s) => (
            <Reveal key={s.id}>
              <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-7">
                <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 rounded-xl border border-[var(--border)] bg-[rgba(45,122,224,0.04)] px-6 py-5 md:px-8 md:py-6">
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--accent)] mb-3">
              Industries we serve
            </p>
            <ul className="flex flex-wrap gap-2">
              {whoWeWorkWith.industries.map((ind) => (
                <li
                  key={ind.id}
                  className="text-sm font-medium text-[var(--text-primary)] px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]"
                >
                  {ind.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
