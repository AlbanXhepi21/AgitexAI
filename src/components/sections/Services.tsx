"use client";

import {
  Bot,
  Mic,
  Workflow,
  BookOpen,
  FileSearch,
  Compass,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  Bot,
  Mic,
  Workflow,
  BookOpen,
  FileSearch,
  Compass,
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-28 bg-[var(--bg-primary)]">
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <SectionHeader
            label="Enterprise AI solutions"
            title="AI agents, RAG pipelines & voice AI—built to ship"
            subtitle="Focused AI development agency capabilities: AI agents development, RAG pipeline development, voice AI development, plus automation, documents, and strategy. We compete on depth, not brochure breadth."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 md:mt-14">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Bot;
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
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-1 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-[var(--accent-bright)] mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-bright)]"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
