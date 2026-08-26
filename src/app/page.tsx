import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { Why } from "@/components/Why";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main id="contenido" className="flex-1">
      <JsonLd />
      <Hero />
      <TrustBar />
      <Problems />
      <Services />
      <Work />
      <Process />
      <Why />
      <Faq />
      <CtaBand />
      <Contact />
    </main>
  );
}
