import { processSteps } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="proceso" className="bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-aqua uppercase">Proceso</p>
          <h2 className="mt-3 font-display max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Cómo va: un WhatsApp y, en pocos días, tu web al aire.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65">
            Sin reuniones eternas. Coordinamos, diseñamos, publicamos.
          </p>
        </Reveal>
        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <li key={item.step} className="h-full">
              <Reveal delayMs={index * 70}>
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-sm font-semibold tracking-[0.2em] text-teal">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-aqua">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
