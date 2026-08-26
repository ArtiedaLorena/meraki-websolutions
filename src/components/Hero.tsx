import Image from "next/image";
import { heroChips, site, whatsappUrl } from "@/lib/site";
import { ctaPrimary, WhatsAppIcon } from "./WhatsAppLink";

export function Hero() {
  return (
    <section id="inicio" className="circuit-bg relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-8 lg:py-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-royal uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
            Páginas web responsive
          </p>
          <h1 className="font-display text-[2.35rem] leading-[1.05] font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.45rem]">
            Tu página web,{" "}
            <span className="gradient-text">lista en pocos días</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Diseño y desarrollo para que te encuentren, te entiendan y te escriban. Accesible, mobile first y pensada para tu emprendimiento.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaPrimary}
            >
              <WhatsAppIcon />
              Quiero mi página web
            </a>
            <a
              href="#proyectos"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-7 text-sm font-semibold text-navy transition hover:border-teal"
            >
              Ver trabajos
            </a>
          </div>
          <p className="mt-3 text-xs text-muted">Respondemos por WhatsApp. Sin compromiso.</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {heroChips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-line bg-white/80 px-3 py-1 text-xs font-semibold text-navy/80"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}

function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-lg sm:max-w-none">
      <div
        className="absolute -inset-8 rounded-[2.5rem] bg-linear-to-br from-royal/12 via-teal/10 to-transparent blur-2xl"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_28px_80px_rgba(18,32,71,0.14)]">
        <div className="flex items-center gap-1.5 border-b border-line bg-mist px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7e4ef]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7e4ef]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7e4ef]" />
          <span className="ml-3 truncate rounded-full bg-white px-3 py-1 text-[11px] tracking-wide text-muted">
            tu-marca.com
          </span>
        </div>

        <div className="bg-linear-to-b from-[#f7fafc] to-white px-5 py-5 sm:px-6 sm:py-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/brand/logo-mark.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                preload
              />
              <span className="font-display text-sm font-semibold text-navy">{site.shortName}</span>
            </div>
            <div className="hidden items-center gap-4 text-[11px] font-medium text-muted sm:flex">
              <span>Inicio</span>
              <span>Servicios</span>
              <span>Contacto</span>
            </div>
            <span className="rounded-full bg-navy px-3 py-1 text-[10px] font-semibold text-white">
              Escribime
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
            <div>
              <div className="h-2 w-16 rounded-full bg-teal/50" />
              <p className="mt-3 font-display text-xl leading-tight font-semibold tracking-tight text-navy sm:text-2xl">
                Una web clara que pide la consulta.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                Estructura mobile first, carga rápida y un camino obvio para que te contacten.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="h-8 w-24 rounded-full bg-navy" />
                <span className="h-8 w-20 rounded-full border border-line bg-white" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-navy-deep p-4">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal/25 blur-2xl" aria-hidden />
              <div className="absolute -bottom-8 left-4 h-20 w-20 rounded-full bg-royal/40 blur-2xl" aria-hidden />
              <div className="relative space-y-2.5">
                <div className="h-2.5 w-3/4 rounded-full bg-white/20" />
                <div className="h-2.5 w-1/2 rounded-full bg-teal/70" />
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="font-display text-lg font-semibold text-white">SEO</p>
                    <p className="mt-1 text-[10px] text-white/55">Listo desde el día uno</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="font-display text-lg font-semibold text-aqua">Celu</p>
                    <p className="mt-1 text-[10px] text-white/55">Se ve impecable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {["Accesible", "Pocos días", "WhatsApp"].map((item) => (
              <div key={item} className="rounded-xl border border-line bg-white px-2 py-2.5 text-center">
                <p className="text-[10px] font-semibold tracking-wide text-navy uppercase sm:text-[11px]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
