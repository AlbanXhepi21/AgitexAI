"use client";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
};

export function SectionHeader({
  title,
  subtitle,
  label,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center max-w-3xl mx-auto" : ""}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="font-display font-bold text-[clamp(28px,4vw,42px)] leading-tight tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-[17px] leading-relaxed text-[var(--text-secondary)] max-w-[540px] ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
