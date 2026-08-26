import { services } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="servicios" className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-royal uppercase">Servicios</p>
          <h2 className="mt-3 font-display max-w-2xl text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Lo que incluye tu página web.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Lo justo para vender: que te encuentren, te entiendan y te escriban.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delayMs={index * 60}>
              <article className="h-full rounded-3xl border border-line bg-white p-6 transition hover:border-teal sm:p-8">
                <p className="font-display text-sm font-semibold tracking-[0.16em] text-teal uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
