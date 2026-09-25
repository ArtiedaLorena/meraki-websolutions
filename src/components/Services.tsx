import { services, textSectionPortraits } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SidePortrait } from "./People";

export function Services() {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-5">
            <div className="min-w-0 max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-sky uppercase">
                Qué hacemos
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-5xl">
                Más confianza. Más consultas
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/55">
                Cada decisión —del texto al botón de WhatsApp— está orientada a que te escriban
              </p>
            </div>
            <SidePortrait
              src={textSectionPortraits.services.src}
              alt={textSectionPortraits.services.alt}
            />
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[1.4rem] border border-line bg-line sm:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="bg-white p-8 sm:p-10">
              <Reveal delayMs={index * 60}>
                <p className="font-display text-sm font-semibold tracking-[0.18em] text-turquoise">
                  {service.n}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-navy/55">{service.description}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
