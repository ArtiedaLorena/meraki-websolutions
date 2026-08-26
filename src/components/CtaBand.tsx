import { whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ctaOnDark, WhatsAppIcon } from "./WhatsAppLink";

export function CtaBand() {
  return (
    <section className="bg-navy-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-aqua uppercase">Siguiente paso</p>
          <h2 className="mt-3 font-display max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ¿Listo para tener tu página web?
          </h2>
          <p className="mt-3 text-sm text-white/65">
            Escribinos hoy. En pocos días puede estar online y trayéndote consultas.
          </p>
        </Reveal>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaOnDark}
        >
          <WhatsAppIcon />
          Quiero mi página web
        </a>
      </div>
    </section>
  );
}
