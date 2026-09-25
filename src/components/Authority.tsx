import Image from "next/image";
import { authorityShots, whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ctaPrimary, WhatsAppIcon } from "./WhatsAppLink";

const consultMessage =
  "Hola Meraki, quiero la consultoría gratuita. ¿Cuándo podemos hablar?";

export function Authority() {
  const { featured, second, third, phones } = authorityShots;

  return (
    <section id="autoridad" className="bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-sky uppercase">
              Sitios estratégicos
            </p>
            <h2 className="mt-4 font-display max-w-xl text-3xl font-semibold tracking-tight text-navy sm:text-[2.75rem] sm:leading-[1.12]">
              Páginas web que proyectan autoridad{" "}
              <em className="italic text-primary">y convierten visitas en clientes</em>
            </h2>
            <p className="mt-5 max-w-xl font-display text-lg leading-snug font-medium text-navy/75">
              Credibilidad que se percibe. Resultados que se cuentan. Crecimiento que se mide.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/60">
              Diseñamos sitios estratégicos que transmiten solidez, generan confianza entre tus
              visitantes y están optimizados para que el tráfico se transforme en consultas reales
              y en ventas.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/60">
              Todo lo que incluimos —diseño, estructura y contenido— tiene un único objetivo: que tu
              negocio obtenga mejores resultados.
            </p>
            <div className="mt-10 rounded-[1.4rem] border border-line bg-white p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">
                ¿Hablamos sin compromiso?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/55">
                Te ofrecemos una consultoría gratuita, analizamos tus metas y te proponemos cambios
                concretos para que tu web impulse tu negocio.
              </p>
              <a
                href={whatsappUrl(consultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 ${ctaPrimary}`}
              >
                <WhatsAppIcon />
                Pedir consultoría gratuita
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="relative">
              <div className="overflow-hidden rounded-[1.3rem] border border-line bg-white shadow-[0_24px_60px_color-mix(in_srgb,var(--navy)_12%,transparent)]">
                <div className="relative aspect-[16/10]">
                    <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 520px"
                    priority
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-[1.1rem] border border-line bg-white shadow-sm">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={second.image}
                      alt={second.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 50vw, 260px"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-[1.1rem] border border-line bg-white shadow-sm">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={third.image}
                      alt={third.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 50vw, 260px"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-end justify-center gap-2 sm:gap-3">
                {phones.map((project) => (
                  <div
                    key={project.host}
                    className="w-[76px] shrink-0 sm:w-[96px]"
                  >
                    <div className="rounded-[1.6rem] bg-navy p-[6px] pt-[16px] shadow-[0_16px_36px_rgba(15,23,42,0.28)] ring-1 ring-navy/20">
                      <span
                        className="mx-auto mb-2 block h-1.5 w-8 rounded-full bg-white/20"
                        aria-hidden
                      />
                      <div className="overflow-hidden rounded-[1.15rem] bg-white">
                        <Image
                          src={project.imageMobile}
                          alt={`${project.title} en celular`}
                          width={1170}
                          height={2532}
                          className="block h-auto w-full"
                          sizes="86px"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
