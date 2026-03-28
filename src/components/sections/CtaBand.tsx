"use client";

import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <section className="relative py-24 md:py-28 text-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,var(--accent-glow)_0%,transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_50%_0%,rgba(45,122,224,0.06)_0%,transparent_70%)]"
        aria-hidden
      />
      <div className="container mx-auto max-w-[1140px] px-6 relative z-[1]">
        <Reveal>
          <span className="section-label">Ready?</span>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,42px)] text-[var(--text-primary)] max-w-[600px] mx-auto leading-tight">
            Let&apos;s build something worth shipping
          </h2>
          <p className="mt-4 text-[17px] text-[var(--text-secondary)] max-w-lg mx-auto">
            30-minute discovery call. No pitch deck, no pressure — just a
            conversation about what you&apos;re building.
          </p>
          <div className="mt-8">
            <Button href="/#contact" variant="primary" size="lg">
              Book a free strategy call →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
