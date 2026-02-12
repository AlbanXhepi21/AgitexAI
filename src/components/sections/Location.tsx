"use client";

import { MapPin, Globe, Clock } from "lucide-react";

const items = [
  { icon: MapPin, text: "Headquarters: Tirana, Albania" },
  { icon: Globe, text: "Serving US & EU Markets" },
  { icon: Clock, text: "Flexible timezone collaboration" },
];

export function Location() {
  return (
    <section className="py-24 bg-[var(--off-white)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-6">
              Global Reach, Local Expertise
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Based in Tirana, Albania, we serve clients across the US and EU
              with European engineering standards and competitive rates.
            </p>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <item.icon className="w-6 h-6 text-[var(--primary-deep-blue)] shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[var(--primary-deep-blue)]/10 border border-[var(--primary-deep-blue)]/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-[var(--primary-deep-blue)]/40 mx-auto mb-4" />
                <p className="font-display font-semibold text-[var(--primary-deep-blue)]">
                  Tirana, Albania
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Serving clients worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
