import { processSteps, testimonials } from "@/lib/site";
import { Reveal } from "./Reveal";
import { AvatarStack } from "./People";

export function Process() {
  return (
    <section id="proceso" className="navy-mesh text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-turquoise uppercase">Proceso</p>
              <h2 className="mt-4 font-display max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                Un WhatsApp y, en pocos días, tu web al aire
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
                Sin reuniones eternas — coordinamos, diseñamos y publicamos
              </p>
            </div>
            <AvatarStack
              people={testimonials.slice(0, 4).map((item) => ({ src: item.photo }))}
              ringClassName="ring-white/25"
            />
          </div>
        </Reveal>
        <ol className="mt-14 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <li key={item.step} className="h-full min-h-0 transition-transform duration-300 hover:z-20">
              <Reveal delayMs={index * 70} className="h-full">
                <div className="flex h-full min-h-[240px] origin-center flex-col rounded-[1.6rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:scale-[1.07] hover:border-turquoise/70 hover:bg-white/10 hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-sm font-semibold tracking-[0.2em] text-turquoise">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-sky">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
