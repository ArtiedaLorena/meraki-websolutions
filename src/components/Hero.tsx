import Image from "next/image";
import { heroChips, heroProject, whatsappUrl } from "@/lib/site";
import { ctaPrimary, ctaSecondary, WhatsAppIcon } from "./WhatsAppLink";

export function Hero() {
  return (
    <section id="inicio" className="hero-mesh relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.08fr] lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-turquoise" aria-hidden />
            Estudio de diseño · A medida
          </p>
          <h1 className="font-display text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
            Desarrollo web{" "}
            <em className="not-italic sm:italic sm:text-primary">que atrae consultas</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/60 sm:text-lg">
            Páginas a medida para tu negocio: claras, pensadas para Google y con un camino obvio al
            WhatsApp. Hechas para que te escriban, no para verse lindas y quedarse quietas
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaPrimary}
            >
              <WhatsAppIcon />
              Quiero mi web
            </a>
            <a href="#proyectos" className={ctaSecondary}>
              Ver trabajos
            </a>
          </div>
          <ul className="mt-7 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-4">
            {heroChips.map((chip) => (
              <li key={chip}>
                <span className="flex min-h-8 w-full items-center justify-center rounded-full border border-line bg-white/80 px-2.5 text-center text-xs font-semibold text-navy/70">
                  {chip}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <a href="#proyectos" className="group relative mx-auto block w-full max-w-[640px] lg:max-w-none">
          <div className="relative px-1 py-4 sm:px-2 sm:py-6">
            <span
              className="absolute top-[8%] right-[-4%] h-[84%] w-[78%] rounded-full bg-[color-mix(in_srgb,var(--sky)_38%,transparent)]"
              aria-hidden
            />
            <div className="relative">
              <span
                className="absolute inset-0 translate-x-[5px] translate-y-[8px] rounded-[1.7rem] bg-[#0b0c10] sm:rounded-[1.95rem]"
                aria-hidden
              />
              <div className="relative rounded-[1.7rem] bg-[#1c1d22] p-[14px] shadow-[0_30px_50px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-2px_3px_rgba(0,0,0,0.45)] sm:rounded-[1.95rem] sm:p-[18px]">
                <span
                  className="pointer-events-none absolute inset-[6px] rounded-[1.4rem] ring-1 ring-white/15 sm:inset-[7px] sm:rounded-[1.6rem]"
                  aria-hidden
                />
                <span
                  className="absolute left-1/2 top-[7px] z-20 flex h-[10px] w-[10px] -translate-x-1/2 items-center justify-center rounded-full bg-black shadow-[inset_0_0_0_2px_#2a2b31] sm:top-[8px] sm:h-[11px] sm:w-[11px]"
                  aria-hidden
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-[#1a2740] shadow-[inset_-1px_-1px_2px_rgba(130,180,230,0.55)] sm:h-[6px] sm:w-[6px]" />
                </span>
                <div className="relative overflow-hidden rounded-[1.05rem] bg-black ring-1 ring-black/80 sm:rounded-[1.2rem]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={heroProject.image}
                      alt={heroProject.imageAlt}
                      fill
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 640px"
                      priority
                    />
                  </div>
                  <span
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.04)_18%,transparent_40%)]"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1 flex items-center justify-between gap-3 px-3">
            <div>
              <p className="font-display text-sm font-semibold text-navy">{heroProject.title}</p>
              <p className="text-xs text-navy/45">{heroProject.subtitle}</p>
            </div>
            <span className="text-sm font-semibold text-primary">Ver trabajos →</span>
          </div>
        </a>
      </div>
    </section>
  );
}
