import { formatArs, plans, whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ctaPrimary, WhatsAppIcon } from "./WhatsAppLink";

export function Pricing() {
  return (
    <section id="precios" className="bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-sky uppercase">
            Precios claros
          </p>
          <h2 className="mt-4 font-display max-w-3xl text-3xl font-semibold tracking-tight text-navy sm:text-5xl">
            Precio final en pesos, sin sorpresas
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/55">
            Cotizamos en pesos argentinos. El número que ves es el que pagás
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delayMs={index * 70}>
              <article
                className={`flex h-full flex-col rounded-[1.5rem] border p-7 sm:p-8 ${
                  plan.featured
                    ? "border-primary bg-navy text-white"
                    : "border-line bg-white text-navy"
                }`}
              >
                <p
                  className={`text-[11px] font-semibold tracking-[0.16em] uppercase ${plan.featured ? "text-turquoise" : "text-sky"}`}
                >
                  {plan.note}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-4 font-display text-4xl font-semibold tracking-tight">
                  {formatArs(plan.price)}
                </p>
                <p className={`mt-1 text-sm ${plan.featured ? "text-white/50" : "text-navy/45"}`}>
                  {plan.time}
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-2.5">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${plan.featured ? "text-white/75" : "text-navy/70"}`}
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${plan.featured ? "bg-turquoise" : "bg-primary"}`}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(
                    `Hola Meraki, me interesa el plan ${plan.name} (${formatArs(plan.price)}). ¿Cómo arrancamos?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 ${ctaPrimary}`}
                >
                  <WhatsAppIcon />
                  Quiero este plan
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-navy/45">
          ¿Necesitás algo distinto? Escribinos y lo vemos en pesos, a medida
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaPrimary}
          >
            <WhatsAppIcon />
            Pedir presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
