"use client";

import { Bot, GitBranch, Cloud } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  Bot,
  GitBranch,
  Cloud,
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-28 bg-[var(--bg-primary)]">
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <SectionHeader
            label="What we build"
            title="Three things we do exceptionally well"
            subtitle="We don't do everything. We do AI engineering, data systems, and cloud infrastructure — at a level that competes with teams 5× our size."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 md:mt-14">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Cloud;
            return (
              <Reveal key={service.id}>
                <div
                  className="group relative h-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-8 transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] overflow-hidden cursor-default"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-bright)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="w-11 h-11 rounded-[10px] flex items-center justify-center bg-[var(--accent-glow)] border border-[rgba(45,122,224,0.12)] mb-5">
                    <Icon className="w-5 h-5 text-[var(--accent-bright)]" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2.5 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded text-[11px] font-mono bg-[rgba(45,122,224,0.08)] text-[var(--accent-bright)] border border-[rgba(45,122,224,0.12)]"
                      >
                        {tag}
                      </span>
                    ))}
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
