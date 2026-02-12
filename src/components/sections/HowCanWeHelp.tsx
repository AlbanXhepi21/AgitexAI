"use client";

import Link from "next/link";
import { ArrowRight, Lightbulb, Rocket, GitBranch, Code, MessageCircle } from "lucide-react";
import { howCanWeHelpCards } from "@/data/howCanWeHelp";
import { SectionHeader } from "@/components/common/SectionHeader";

const iconMap = {
  Lightbulb,
  Rocket,
  GitBranch,
  Code,
  MessageCircle,
};

export function HowCanWeHelp() {
  return (
    <section className="py-24 bg-[var(--off-white)]">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="How Can We Help?"
          subtitle="Tell us your situation and we'll point you in the right direction"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {howCanWeHelpCards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] ?? Lightbulb;
            return (
              <div
                key={card.id}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--primary-deep-blue)]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-deep-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary-deep-blue)]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[var(--primary-deep-blue)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  <Link
                    href={card.href}
                    className="text-[var(--primary-deep-blue)] font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    {card.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
