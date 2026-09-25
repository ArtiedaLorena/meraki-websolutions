"use client";

import { FormEvent, type ReactNode, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ctaPrimary, WhatsAppIcon } from "./WhatsAppLink";

const fieldClass =
  "mt-1.5 min-h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/28 outline-none transition focus:border-turquoise";

const labelClass = "block text-[11px] font-semibold tracking-[0.16em] text-white/40 uppercase";

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.6 4.8c.4-.4.9-.6 1.4-.6h2.2c.5 0 1 .3 1.2.8l1 2.4c.2.5.1 1.1-.3 1.5l-1.3 1.3a12.4 12.4 0 0 0 5.4 5.4l1.3-1.3c.4-.4 1-.5 1.5-.3l2.4 1c.5.2.8.7.8 1.2v2.2c0 .5-.2 1-.6 1.4-.4.4-1 .6-1.6.6C11.6 20.2 3.8 12.4 3.8 6.4c0-.6.2-1.2.6-1.6Z"
      />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function Channel({
  href,
  label,
  value,
  icon,
  external,
}: {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-3 rounded-2xl bg-white/5 px-3.5 py-3.5 transition hover:bg-white/8"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-turquoise/15 text-turquoise">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-white/40">{label}</span>
        <span className="mt-0.5 block truncate text-sm font-medium text-white">{value}</span>
      </span>
    </a>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (String(data.get("website") ?? "").trim()) return;

    const name = String(data.get("name") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message) {
      setStatus("error");
      return;
    }

    const text = [
      `Hola Meraki, soy ${name}.`,
      business ? `Negocio: ${business}.` : "",
      email ? `Mail: ${email}.` : "",
      phone ? `Tel: ${phone}.` : "",
      `Quiero una página web. ${message}`,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="contact-mesh">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:px-8">
        <Reveal>
          <div className="rounded-[1.8rem] border border-white/8 bg-[#0c1018] p-6 sm:p-8 lg:p-10">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-turquoise uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-turquoise" aria-hidden />
              Contacto
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/50">
              Completá el formulario. Se abre WhatsApp con el mensaje armado, y te respondemos enseguida
            </p>

            <form onSubmit={onSubmit} className="mt-8" noValidate>
              <div className="sr-only">
                <label>
                  No completar
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className={labelClass}>
                  Nombre
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Tu nombre"
                    className={fieldClass}
                  />
                </label>
                <label className={labelClass}>
                  Empresa
                  <input
                    name="business"
                    type="text"
                    autoComplete="organization"
                    placeholder="Nombre de tu negocio"
                    className={fieldClass}
                  />
                </label>
                <label className={labelClass}>
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="hola@tudominio.com"
                    className={fieldClass}
                  />
                </label>
                <label className={labelClass}>
                  Teléfono
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+54"
                    className={fieldClass}
                  />
                </label>
              </div>
              <label className={`mt-4 ${labelClass}`}>
                Mensaje
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Contanos brevemente sobre el proyecto"
                  className={`${fieldClass} min-h-[132px] resize-y py-3`}
                />
              </label>
              <button
                type="submit"
                className={`mt-6 ${ctaPrimary}`}
              >
                Enviar consulta
              </button>
              {status === "error" ? (
                <p className="mt-3 text-sm text-sky" role="alert">
                  Completá nombre y el mensaje para continuar
                </p>
              ) : (
                <p className="mt-3 text-xs text-white/35">Sin compromiso · Te respondemos por WhatsApp</p>
              )}
            </form>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <aside className="flex h-full flex-col rounded-[1.8rem] border border-white/8 bg-[#0c1018] p-6 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-turquoise uppercase">
              Trato directo
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-[1.85rem] sm:leading-snug">
              Escribinos. Te contesta quien diseña, no un formulario eterno
            </h3>
            <div className="mt-8 flex flex-col gap-3">
              <Channel
                href={whatsappUrl()}
                label="WhatsApp"
                value="Escribinos ahora"
                icon={<WhatsAppIcon className="h-4 w-4" />}
                external
              />
              <Channel
                href={`tel:+${site.whatsapp}`}
                label="Teléfono"
                value={site.whatsappDisplay}
                icon={<PhoneIcon />}
              />
              <Channel
                href={site.instagramUrl}
                label="Instagram"
                value={site.instagramHandle}
                icon={<InstagramIcon />}
                external
              />
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
              <p className="text-xs text-white/40">Seguinos</p>
              <div className="flex items-center gap-2">
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient flex h-10 w-10 items-center justify-center rounded-full text-white"
                  aria-label={`Instagram ${site.instagramHandle}`}
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient flex h-10 w-10 items-center justify-center rounded-full text-white"
                  aria-label={`WhatsApp ${site.whatsappDisplay}`}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
