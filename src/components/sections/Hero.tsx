import { Button } from "@/components/common/Button";
import { HeroTerminal } from "@/components/ui/HeroTerminal";

const stats = [
  {
    num: (
      <>
        60<span className="text-[var(--accent-bright)]">%</span>
      </>
    ),
    label: "Avg. time saved for clients",
  },
  {
    num: (
      <>
        4–6<span className="text-[var(--accent-bright)]">wk</span>
      </>
    ),
    label: "Idea to production MVP",
  },
  {
    num: (
      <>
        US<span className="text-[var(--accent-bright)]"> & </span>EU
      </>
    ),
    label: "Markets served",
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
          <div className="max-w-[700px] shrink">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-hover)] bg-[rgba(45,122,224,0.05)] px-3.5 py-1.5 text-xs font-mono text-[var(--text-secondary)] mb-8 tracking-wide animate-fade-in-up">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse-dot"
                aria-hidden
              />
              Available for Q2 2026 engagements
            </div>
            <h1 className="font-display font-extrabold text-[clamp(40px,6vw,68px)] leading-[1.05] tracking-[-0.06em] text-[var(--text-primary)] animate-fade-in-up [animation-delay:100ms]">
              AI engineering
              <br />
              for{" "}
              <span className="not-italic bg-gradient-to-br from-[var(--accent)] to-[var(--accent-bright)] bg-clip-text text-transparent">
                global ambitions
              </span>
            </h1>
            <p className="mt-6 text-lg max-w-[520px] text-[var(--text-secondary)] leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              We build production-ready AI agents, RAG systems, and data
              pipelines for US &amp; EU companies. European engineering standards,
              competitive rates, real results.
            </p>
            <div className="flex flex-wrap gap-3 mt-10 animate-fade-in-up [animation-delay:300ms]">
              <Button href="/#contact" variant="primary" size="md">
                Book a free strategy call →
              </Button>
              <Button href="/#services" variant="secondary" size="md">
                What we build
              </Button>
            </div>
            <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-wrap gap-10 sm:gap-12 animate-fade-in-up [animation-delay:400ms]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-[32px] leading-none tracking-tight text-[var(--text-primary)]">
                    {stat.num}
                  </div>
                  <div className="text-[13px] text-[var(--text-tertiary)] mt-1 font-medium max-w-[11rem]">
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
