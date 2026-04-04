"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const failureReasons = [
  {
    title: "Scope without ownership",
    body: "Pilots without a named owner, success metric, and integration path rarely survive the next budget cycle.",
  },
  {
    title: "Models without data discipline",
    body: "Even strong models fail when pipelines, access control, and evaluation are afterthoughts.",
  },
  {
    title: "Vendors who optimize for demos",
    body: "Generic agencies ship screenshots; production needs observability, rollback, and compliance you can defend to auditors.",
  },
];

const ourResponse = [
  "Fixed scopes tied to measurable outcomes—before engineering hours burn.",
  "AI agents development, RAG pipeline development, and voice AI development with evaluation harnesses and runbooks.",
  "Explicit EU and US data practices: GDPR-aligned handling and EU AI Act–conscious design where it matters.",
];

export function WhyAiProjectsFail() {
  return (
    <section
      id="why-ai-fails"
      className="py-24 md:py-28 bg-[var(--bg-secondary)] border-y border-[var(--border)] scroll-mt-24"
    >
      <div className="container mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <Reveal>
            <span className="section-label">The reality</span>
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,36px)] text-[var(--text-primary)] leading-tight mt-3">
              Why most enterprise AI initiatives never reach production ROI
            </h2>
            <p className="mt-4 text-[17px] text-[var(--text-secondary)] leading-relaxed">
              Composite research from major analyst and academic surveys consistently
              finds that a large majority of enterprise AI projects stall or fail to
              deliver expected value—often cited in the{" "}
              <strong className="text-[var(--text-primary)]">~80%</strong> range. The
              gap is rarely “better models.” It is operating model, data, and
              accountability.
            </p>
            <p className="mt-3 text-sm text-[var(--text-tertiary)] leading-relaxed">
              Figures vary by survey methodology; we use this to set expectations—not
              to fear-monger. The point is simple: execution risk is the default.
            </p>
            <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
              <div className="flex gap-3">
                <AlertTriangle
                  className="w-5 h-5 text-[var(--accent-bright)] shrink-0 mt-0.5"
                  aria-hidden
                />
                <div>
                  <h3 className="font-display font-semibold text-[var(--text-primary)] mb-3">
                    Where initiatives break down
                  </h3>
                  <ul className="space-y-4">
                    {failureReasons.map((r) => (
                      <li key={r.title}>
                        <p className="text-sm font-medium text-[var(--text-primary)]">
                          {r.title}
                        </p>
                        <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                          {r.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-[rgba(45,122,224,0.25)] bg-[rgba(45,122,224,0.06)] p-8 h-full">
              <div className="flex gap-3 mb-6">
                <CheckCircle2
                  className="w-6 h-6 text-[var(--accent-bright)] shrink-0"
                  aria-hidden
                />
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                    How AgitexAI stacks the odds toward production
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    We specialize in the three surfaces where enterprise buyers feel
                    pain first:{" "}
                    <strong className="text-[var(--text-primary)]">
                      AI agents development
                    </strong>
                    ,{" "}
                    <strong className="text-[var(--text-primary)]">
                      RAG pipeline development
                    </strong>
                    , and{" "}
                    <strong className="text-[var(--text-primary)]">
                      voice AI development
                    </strong>
                    —with AI consulting and implementation that ends in systems your
                    team runs.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {ourResponse.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-bright)]"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
