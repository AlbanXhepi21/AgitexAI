"use client";

import { SectionHeader } from "@/components/common/SectionHeader";
import { portfolioProjects } from "@/data/portfolio";
import { Clock, Target } from "lucide-react";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Work"
          subtitle="AI, data pipelines, MLOps, and modern backend—selected projects and case studies."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-gray-100 bg-[var(--off-white)] p-6 hover:border-[var(--primary-deep-blue)]/20 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              {"scope" in project && project.scope && (
                <div className="flex gap-2 mb-2 text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{project.scope}</span>
                </div>
              )}
              {"outcome" in project && project.outcome && (
                <div className="flex gap-2 mb-3 text-xs text-gray-600">
                  <Target className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{project.outcome}</span>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2.5 py-1 text-xs font-medium rounded-lg bg-[var(--primary-deep-blue)]/10 text-[var(--primary-deep-blue)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
