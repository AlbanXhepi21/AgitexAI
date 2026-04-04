import { Button } from "@/components/common/Button";
import { HeroTerminal } from "@/components/ui/HeroTerminal";

const stats = [
  {
    num: (
      <>
        60<span className="text-[var(--accent-bright)]">%</span>
      </>
    ),
    label: "Avg. reduction in manual support lookup time (client benchmark)",
  },
  {
    num: (
      <>
        4–6<span className="text-[var(--accent-bright)]">wk</span>
      </>
    ),
    label: "Typical path from scoped brief to production MVP",
  },
  {
    num: (
      <>
        US<span className="text-[var(--accent-bright)]"> & </span>EU
      </>
    ),
    label: "Enterprise & mid-market engagements",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 hero-bg">
      <div className="hero-grid-bg" aria-hidden />
      <div className="hero-glow" aria-hidden />
      <div className="hero-glow-2" aria-hidden />

      <div className="container mx-auto max-w-[1140px] px-6 py-16 md:py-24 relative z-[2] w-full">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-12 xl:gap-8">
          <div className="max-w-[720px] shrink">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-hover)] bg-[rgba(45,122,224,0.05)] px-3.5 py-1.5 text-xs font-mono text-[var(--text-secondary)] mb-8 tracking-wide animate-fade-in-up">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse-dot"
                aria-hidden
              />
              Accepting US &amp; EU enterprise engagements · Q2 2026
            </div>
            <h1 className="font-display font-extrabold text-[clamp(34px,5.5vw,60px)] leading-[1.08] tracking-[-0.05em] text-[var(--text-primary)] animate-fade-in-up [animation-delay:100ms]">
              AI Development Agency for US &amp; EU Companies
            </h1>
            <p className="mt-6 text-lg max-w-[560px] text-[var(--text-secondary)] leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              AgitexAI is a specialized partner for{" "}
              <strong className="text-[var(--text-primary)] font-semibold">
                AI agents development
              </strong>
              ,{" "}
              <strong className="text-[var(--text-primary)] font-semibold">
                RAG pipeline development
              </strong>
              , and{" "}
              <strong className="text-[var(--text-primary)] font-semibold">
                voice AI development
              </strong>
              . We ship deployable, scalable{" "}
              <strong className="text-[var(--text-primary)] font-semibold">
                enterprise AI solutions
              </strong>{" "}
              with AI consulting and implementation focused on measurable cost,
              automation, and revenue outcomes—not experiments that die in staging.
            </p>
            <div className="flex flex-wrap gap-3 mt-10 animate-fade-in-up [animation-delay:300ms]">
              <Button href="/#contact" variant="primary" size="md">
                Book a 30-minute strategy call
              </Button>
              <Button href="/#services" variant="secondary" size="md">
                Explore services &amp; outcomes
              </Button>
            </div>
            <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-wrap gap-10 sm:gap-12 animate-fade-in-up [animation-delay:400ms]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-[32px] leading-none tracking-tight text-[var(--text-primary)]">
                    {stat.num}
                  </div>
                  <div className="text-[13px] text-[var(--text-tertiary)] mt-1 font-medium max-w-[13rem]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <HeroTerminal className="hidden min-[1080px]:block w-[380px] shrink-0 shadow-accent-soft" />
        </div>
      </div>
    </section>
  );
}
