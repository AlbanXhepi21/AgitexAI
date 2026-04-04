"use client";

import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <section
      id="cta"
      className="relative py-24 md:py-28 text-center overflow-hidden scroll-mt-24"
    >
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
          <span className="section-label">Next step</span>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,42px)] text-[var(--text-primary)] max-w-[720px] mx-auto leading-tight">
            Ready for enterprise AI solutions that actually deploy?
          </h2>
          <p className="mt-4 text-[17px] text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Book a focused 30-minute call. We&apos;ll pressure-test scope, risks,
            and whether AI agents development, RAG pipeline development, or voice
            AI development is the right first move—or tell you honestly if you&apos;re
            not ready yet.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button href="/#contact" variant="primary" size="lg">
              Book a strategy call
            </Button>
            <Button href="/#services" variant="secondary" size="lg">
              Review services first
            </Button>
          </div>
          <p className="mt-6 text-sm text-[var(--text-tertiary)] max-w-md mx-auto">
            No generic pitch deck. US &amp; EU time zones · Response within one business day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
