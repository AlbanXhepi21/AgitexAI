"use client";

import { processSteps } from "@/data/process";
import { SectionHeader } from "@/components/common/SectionHeader";

export function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Process"
          subtitle="From idea to production in four clear steps"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line - visible on desktop */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200"
            style={{ left: "12.5%", right: "12.5%" }}
          />
          {processSteps.map((step) => (
            <div key={step.id} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[var(--primary-deep-blue)]/10 border-4 border-[var(--primary-deep-blue)] flex items-center justify-center mb-4 relative z-10">
                  <span className="font-display font-bold text-2xl text-[var(--primary-deep-blue)]">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                <span className="text-xs font-medium text-[var(--primary-deep-blue)]">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
