import Image from "next/image";
import { testimonials } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-sky uppercase">Casos</p>
          <h2 className="mt-4 font-display max-w-2xl text-3xl font-semibold tracking-tight text-navy sm:text-5xl">
            Lo que se siente al entrar
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/55">
            Cinco negocios reales — cada uno con una web hecha a su medida
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delayMs={index * 70}
              className={`h-full xl:col-span-2 ${index === 3 ? "xl:col-start-2" : ""}`}
            >
              <blockquote className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-line bg-mist/60">
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1280px) 50vw, 360px"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <p className="font-display text-lg leading-snug font-medium tracking-tight text-navy">
                    “{item.quote}”
                  </p>
                  <footer className="mt-6 flex items-center gap-3">
                    <Image
                      src={item.photo}
                      alt={item.photoAlt}
                      width={96}
                      height={96}
                      className="h-12 w-12 rounded-full object-cover object-top"
                    />
                    <cite className="not-italic">
                      <span className="block text-sm font-semibold text-navy">{item.name}</span>
                      <span className="mt-0.5 block text-xs text-navy/45">{item.role}</span>
                    </cite>
                  </footer>
                </div>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
