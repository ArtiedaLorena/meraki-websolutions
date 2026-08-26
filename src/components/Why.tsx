import { reasons } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Why() {
  return (
    <section id="nosotros" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-royal uppercase">Por qué Meraki</p>
          <h2 className="mt-3 font-display max-w-2xl text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Páginas web con el alma, accesibles y rápidas.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Hacemos sitios claros, mobile first y listos en pocos días — para que tu emprendimiento se vea serio y reciba consultas.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {reasons.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 70}>
              <article className="h-full rounded-3xl border border-line bg-mist p-6">
                <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
