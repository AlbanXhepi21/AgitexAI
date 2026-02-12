import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowCanWeHelp } from "@/components/sections/HowCanWeHelp";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowCanWeHelp />
        <Services />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Process />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
