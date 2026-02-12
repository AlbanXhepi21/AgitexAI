"use client";

import {
  Brain,
  Rocket,
  Bot,
  GitBranch,
  Code,
  Server,
  Cloud,
  Layers,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/common/SectionHeader";

const iconMap = {
  Brain,
  Rocket,
  Bot,
  GitBranch,
  Code,
  Server,
  Cloud,
  Layers,
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Expertise"
          subtitle="AI engineering, data pipelines, MLOps, backend, DevOps & cloud—we build modern solutions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap] ?? Code;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--primary-deep-blue)]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-deep-blue)]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[var(--primary-deep-blue)]" />
                </div>
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
