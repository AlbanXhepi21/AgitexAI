import { Hero } from "@/components/sections/Hero";
import { TechTickerSection } from "@/components/sections/TechTickerSection";
import { HowCanWeHelp } from "@/components/sections/HowCanWeHelp";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import type { Metadata } from "next";
import { SITE_URL, siteDescription, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Engineering, RAG & Agents for US & EU",
  description: siteDescription,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `AI Engineering & RAG | ${siteName}`,
    description: siteDescription,
    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TechTickerSection />
      <HowCanWeHelp />
      <div className="divider-agitex" aria-hidden />
      <Services />
      <div className="divider-agitex" aria-hidden />
      <Portfolio />
      <div className="divider-agitex" aria-hidden />
      <Process />
      <div className="divider-agitex" aria-hidden />
      <WhyUs />
      <div className="divider-agitex" aria-hidden />
      <InsightsSection />
      <CtaBand />
      <div className="divider-agitex" aria-hidden />
      <Location />
      <Contact />
    </main>
  );
}
