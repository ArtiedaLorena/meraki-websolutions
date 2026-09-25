import Image from "next/image";
import { navItems, site, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppLink";

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="navy-mesh pb-20 text-white sm:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-sm">
            <a href="#inicio" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/brand/logo-mark.png"
                  alt="Meraki Web Solutions"
                  width={520}
                  height={305}
                  className="h-8 w-auto object-contain"
                  unoptimized
                />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold">Meraki</span>
                <span className="block text-[0.65rem] font-medium tracking-[0.18em] text-white/50 uppercase">
                  Web Solutions
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Páginas a medida, precio en pesos y trato directo.
            </p>
          </div>

          <nav aria-label="Pie de página" className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 transition hover:text-turquoise"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
              aria-label={`Instagram ${site.instagramHandle}`}
            >
              <InstagramIcon className="h-[22px] w-[22px]" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
              aria-label={`WhatsApp ${site.whatsappDisplay}`}
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-turquoise"
          >
            <InstagramIcon className="h-4 w-4" />
            {site.instagramHandle}
          </a>
          <p className="text-xs text-white/35">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
