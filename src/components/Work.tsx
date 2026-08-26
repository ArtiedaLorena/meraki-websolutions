import Image from "next/image";
import { projects } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="proyectos" className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-royal uppercase">Trabajos</p>
          <h2 className="mt-3 font-display max-w-2xl text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Sitios reales, ya online.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Así se ve una web Meraki: clara, rápida y hecha para que te escriban.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((item, index) => (
            <Reveal key={item.href} delayMs={index * 80}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-0.5 hover:border-teal hover:shadow-[0_16px_40px_rgba(18,32,71,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-deep">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-navy shadow-sm">
                    En vivo
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-royal uppercase">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  <p className="mt-5 text-sm font-semibold text-royal">
                    Ver sitio en vivo →
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
