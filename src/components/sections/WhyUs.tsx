"use client";

import { Zap, Award, Layers, ShieldCheck } from "lucide-react";
import { valueProps } from "@/data/valueProps";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TechMarquee } from "@/components/ui/TechMarquee";

const iconMap = {
  Zap,
  Award,
  Layers,
  ShieldCheck,
};

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 text-white"
      style={{
        background: "linear-gradient(180deg, #0D3B66 0%, #092847 100%)",
      }}
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Why Choose AgitexAI?"
          subtitle="We Build Fast, Reliable, Scalable Solutions"
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {valueProps.map((prop) => {
            const Icon = iconMap[prop.icon as keyof typeof iconMap] ?? Zap;
            return (
              <div
                key={prop.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-2">
                  {prop.title}
                </h3>
                <p className="text-white/80 text-sm">{prop.description}</p>
              </div>
            );
          })}
        </div>
        <TechMarquee />
      </div>
    </section>
  );
}
