import { problems, textSectionPortraits } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SidePortrait } from "./People";

export function Problems() {
  return (
    <section id="desafios" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-5">
            <div className="min-w-0 max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-sky uppercase">
                Diseño web a medida
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-5xl">
                Qué destrabamos cuando{" "}
                <em className="italic text-primary">tu negocio tiene web</em>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy/55">
                No es un folleto online. Es el lugar donde te entienden, te creen y te escriben.
                Más claridad para vos, más confianza para quien llega
              </p>
            </div>
            <SidePortrait
              src={textSectionPortraits.problems.src}
              alt={textSectionPortraits.problems.alt}
            />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {problems.map((item, index) => (
            <Reveal key={item.n} delayMs={index * 60}>
              <article className="flex h-full flex-col rounded-[1.5rem] border border-line bg-mist/40 p-6 sm:p-8">
                <p className="font-display text-xs font-semibold tracking-[0.18em] text-turquoise">
                  {item.n}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-navy">
                  “{item.said}”
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/55">{item.reply}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
