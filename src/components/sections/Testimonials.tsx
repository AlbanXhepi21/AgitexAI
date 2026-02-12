"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/common/SectionHeader";

export function Testimonials() {
  return (
    <section className="py-24 bg-[var(--off-white)]">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Hear From Our Clients"
          subtitle="Don't just take our word for it. See how we've helped businesses achieve results."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <Quote className="w-10 h-10 text-[var(--primary-deep-blue)]/20 mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{t.role}</p>
                <p className="text-gray-500 text-sm">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
