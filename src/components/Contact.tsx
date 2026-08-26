"use client";

import { FormEvent, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ctaPrimary, WhatsAppIcon } from "./WhatsAppLink";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message) {
      setStatus("error");
      return;
    }

    const text = `Hola Meraki, soy ${name}. ${business ? `Mi negocio: ${business}. ` : ""}Quiero una página web. ${message}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-royal uppercase">Contacto</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Escribinos y arrancamos tu web.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            WhatsApp directo al {site.whatsappDisplay}. Un mensaje alcanza: te respondemos con cómo dejar tu página lista en pocos días.
          </p>
          <div className="mt-8 flex flex-col gap-3">
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
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-6 text-sm font-semibold text-navy"
            >
              También en Instagram {site.instagramHandle}
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-line bg-mist p-5 sm:p-7"
            noValidate
          >
            <p className="mb-4 text-sm font-medium text-navy">O dejanos estos datos y se abre WhatsApp con el mensaje listo.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-navy">
                Nombre
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-1.5 min-h-11 w-full rounded-xl border border-line bg-white px-3 text-navy outline-none focus:border-teal"
                />
              </label>
              <label className="block text-sm font-medium text-navy">
                Tu negocio
                <input
                  name="business"
                  type="text"
                  placeholder="Estética, consultorio, tienda…"
                  className="mt-1.5 min-h-11 w-full rounded-xl border border-line bg-white px-3 text-navy outline-none focus:border-teal"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-navy">
              Qué necesitás
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none focus:border-teal"
                placeholder="Contanos qué hacés y qué tiene que lograr la web."
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white transition hover:bg-royal"
            >
              <WhatsAppIcon />
              Enviar por WhatsApp
            </button>
            {status === "error" ? (
              <p className="mt-3 text-sm text-red-700" role="alert">
                Completá nombre y el mensaje para continuar.
              </p>
            ) : (
              <p className="mt-3 text-xs text-muted">Sin compromiso. Te respondemos por WhatsApp.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
