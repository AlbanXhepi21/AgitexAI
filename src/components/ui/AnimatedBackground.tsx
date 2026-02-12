"use client";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 60% 20%, rgba(147, 197, 253, 0.5), transparent 60%)",
        }}
      />
    </div>
  );
}
