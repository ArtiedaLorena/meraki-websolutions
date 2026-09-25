import { testimonials, whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { AvatarStack } from "./People";
import { ctaOnDark, WhatsAppIcon } from "./WhatsAppLink";

export function CtaBand() {
  return (
    <section className="navy-mesh">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-turquoise uppercase">
            Charlemos
          </p>
          <h2 className="mt-4 font-display max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ¿Listo para una web que traiga consultas?
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/55">
            Precio en pesos, trato directo y un sitio hecho a tu medida
          </p>
        </Reveal>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <AvatarStack
            people={testimonials.slice(0, 4).map((item) => ({ src: item.photo }))}
            ringClassName="ring-white/25"
          />
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaOnDark}
          >
            <WhatsAppIcon />
            Quiero mi web
          </a>
        </div>
      </div>
    </section>
  );
}
