"use client";

import { SectionHeader } from "@/components/common/SectionHeader";
import { portfolioProjects } from "@/data/portfolio";
import { Clock, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-28 bg-[var(--bg-primary)]">
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <SectionHeader
            label="Selected projects"
            title="Results that speak for themselves"
            subtitle="Every engagement starts with a specific business problem and ends with measurable impact."
          />
        </Reveal>
        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioProjects.map((project) => (
            <Reveal key={project.id}>
              <article className="group h-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-8 transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-0.5 flex flex-col">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
                  {project.cardLabel}
                </p>
                <div className="inline-flex flex-wrap items-baseline gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent-glow)] border border-[rgba(45,122,224,0.1)] mb-4">
                  <span className="font-display font-extrabold text-[26px] text-[var(--accent-bright)] leading-none">
                    {project.metric.value}
                  </span>
                  <span className="text-[13px] text-[var(--text-secondary)]">
                    {project.metric.label}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                {"scope" in project && project.scope && (
                  <div className="flex gap-2 mb-2 text-xs text-[var(--text-tertiary)]">
                    <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{project.scope}</span>
                  </div>
                )}
                {"outcome" in project && project.outcome && (
                  <div className="flex gap-2 mb-4 text-xs text-[var(--text-secondary)]">
                    <Target className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{project.outcome}</span>
                  </div>
                )}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[var(--border)]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2.5 py-1 text-xs font-mono rounded bg-[rgba(45,122,224,0.08)] text-[var(--accent-bright)] border border-[rgba(45,122,224,0.12)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
