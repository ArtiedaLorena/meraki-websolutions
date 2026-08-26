import { outcomes, problems } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Problems() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-royal uppercase">Dónde estás hoy</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              El producto es bueno. La web no lo muestra.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {problems.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 70}>
                <article className="rounded-2xl border border-line bg-mist p-5">
                  <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-royal uppercase">Qué hacemos</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Una web clara que pide la consulta.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {outcomes.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 70}>
                <article className="rounded-2xl border border-navy/10 bg-navy-deep p-5 text-white">
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
