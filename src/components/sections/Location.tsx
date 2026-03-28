"use client";

import { MapPin, Globe, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  { icon: MapPin, text: "Headquarters: Tirana, Albania" },
  { icon: Globe, text: "Serving US & EU markets" },
  { icon: Clock, text: "Flexible timezone collaboration" },
];

export function Location() {
  return (
    <section className="py-24 md:py-28 bg-[var(--bg-secondary)] border-t border-[var(--border)]">
      <div className="container mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,42px)] text-[var(--text-primary)] mb-6 leading-tight">
              Global reach, local expertise
            </h2>
            <p className="text-[17px] text-[var(--text-secondary)] mb-8 leading-relaxed">
              Based in Tirana, we serve clients across the US and EU with
              European engineering standards and competitive rates.
            </p>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-[var(--text-secondary)]"
                >
                  <item.icon className="w-6 h-6 text-[var(--accent-bright)] shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)]">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <MapPin className="w-14 h-14 text-[var(--accent)]/40 mx-auto mb-4" />
                  <p className="font-display font-semibold text-[var(--text-primary)]">
                    Tirana, Albania
                  </p>
                  <p className="text-sm text-[var(--text-tertiary)] mt-1">
                    Serving clients worldwide
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
