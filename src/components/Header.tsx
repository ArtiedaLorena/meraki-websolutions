"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems, whatsappUrl } from "@/lib/site";
import { ctaCompact, ctaPrimary, WhatsAppIcon } from "./WhatsAppLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-white/90 backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
        >
          <Image
            src="/brand/logo-mark.png"
            alt="Meraki Web Solutions"
            width={520}
            height={305}
            className="h-12 w-auto bg-transparent object-contain mix-blend-multiply sm:h-14"
            style={{ backgroundColor: "transparent" }}
            preload
            unoptimized
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight text-navy sm:text-xl">
              Meraki
            </span>
            <span className="block text-[0.65rem] font-medium tracking-[0.2em] text-navy/50 uppercase">
              Web Solutions
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/60 transition-colors hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaCompact} h-11 w-11 sm:hidden`}
            aria-label="Escribinos por WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`max-sm:hidden ${ctaPrimary} !h-11 px-6`}
          >
            Escribinos
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`block h-0.5 w-full bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-full bg-navy transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-full bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div id="menu-movil" hidden={!open} className="border-t border-line bg-white lg:hidden">
        <nav aria-label="Móvil" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-navy hover:bg-mist"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-2 ${ctaPrimary}`}
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon />
            Escribinos
          </a>
        </nav>
      </div>
    </header>
  );
}
