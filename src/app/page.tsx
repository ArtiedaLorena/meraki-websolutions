import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { Pricing } from "@/components/Pricing";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Authority } from "@/components/Authority";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main id="contenido" className="flex-1">
      <JsonLd />
      <Hero />
      <Marquee />
      <TrustBar />
      <Work />
      <Authority />
      <Problems />
      <Services />
      <Pricing />
      <Process />
      <Testimonials />
      <Faq />
      <CtaBand />
      <Contact />
    </main>
  );
}
