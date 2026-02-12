"use client";

import { Button } from "@/components/common/Button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const stats = [
  { value: "10+", label: "Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "EU & US", label: "Markets" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden hero-bg"
      style={{
        background: "linear-gradient(180deg, #0D3B66 0%, #092847 100%)",
      }}
    >
      <AnimatedBackground />
      <div className="container mx-auto px-6 pt-24 pb-32 md:pb-36 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] leading-tight tracking-tight">
            Build Smarter. <br />
            <span className="text-[#93C5FD]">Ship Faster.</span> <br />
            <span className="text-[#FFFFFF]">Scale with AI.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-xl text-[#E2E8F0]">
            From AI-powered MVPs to enterprise integrations. Albanian
            engineering excellence serving global ambitions.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button href="#contact" variant="primary" size="md">
              Start Your Project
            </Button>
            <Button href="#portfolio" variant="secondary" size="md">
              See Our Work
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#092847]/90 backdrop-blur-sm"
        aria-hidden
      >
        <div className="container mx-auto px-6 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-xl md:text-2xl text-[#FFFFFF]">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm mt-0.5 text-[#94A3B8]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
