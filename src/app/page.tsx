import { Hero } from "@/components/sections/Hero";
import { TechTickerSection } from "@/components/sections/TechTickerSection";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { Services } from "@/components/sections/Services";
import { WhyAiProjectsFail } from "@/components/sections/WhyAiProjectsFail";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import type { Metadata } from "next";
import { SITE_URL, siteDescription, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "AI Development Agency US & EU | Enterprise AI | AgitexAI",
  },
  description: siteDescription,
  alternates: { canonical: SITE_URL },
  keywords: [
    "AI development agency",
    "enterprise AI solutions",
    "AI agents development",
    "RAG pipeline development",
    "voice AI development",
    "AI consulting services",
  ],
  openGraph: {
    title: `AI Development Agency & Enterprise AI | ${siteName}`,
    description: siteDescription,
    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TechTickerSection />
      <SocialProof />
      <WhoWeWorkWith />
      <div className="divider-agitex" aria-hidden />
      <Services />
      <div className="divider-agitex" aria-hidden />
      <WhyAiProjectsFail />
      <div className="divider-agitex" aria-hidden />
      <WhyUs />
      <div className="divider-agitex" aria-hidden />
      <Process />
      <div className="divider-agitex" aria-hidden />
      <InsightsSection />
      <CtaBand />
      <div className="divider-agitex" aria-hidden />
      <Location />
      <Contact />
    </main>
  );
}
