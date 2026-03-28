import { TechMarquee } from "@/components/ui/TechMarquee";

export function TechTickerSection() {
  return (
    <section
      aria-label="Technology stack"
      className="border-y border-[var(--border)] bg-[rgba(45,122,224,0.02)] py-6"
    >
      <TechMarquee />
    </section>
  );
}
