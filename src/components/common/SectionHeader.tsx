"use client";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  light?: boolean;
  centered?: boolean;
};

export function SectionHeader({
  title,
  subtitle,
  light = false,
  centered = false,
}: SectionHeaderProps) {
  const textColor = light ? "text-white" : "text-gray-900";
  const subtitleColor = light ? "text-white/80" : "text-gray-600";

  return (
    <div className={centered ? "text-center max-w-3xl mx-auto" : ""}>
      <h2
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl ${textColor}`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-lg md:text-xl ${subtitleColor} max-w-2xl ${centered ? "mx-auto" : ""}`}
      >
        {subtitle}
      </p>
    </div>
  );
}
