import Image from "next/image";
import { navItems, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-mist pb-20 sm:pb-8">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3.5">
            <Image
              src="/brand/logo-mark.png"
              alt=""
              width={520}
              height={305}
              className="h-16 w-auto bg-transparent object-contain mix-blend-multiply sm:h-20"
              style={{ backgroundColor: "transparent" }}
              unoptimized
            />
            <span>
              <span className="block font-display text-xl font-semibold text-navy sm:text-2xl">Meraki</span>
              <span className="block text-xs font-medium tracking-[0.18em] text-muted uppercase">
                Web Solutions
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Páginas web accesibles, listas en pocos días.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-end sm:gap-12">
          <nav aria-label="Pie de página" className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-navy/80 hover:text-royal">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-royal hover:underline"
            >
              WhatsApp {site.whatsappDisplay}
            </a>
            <p className="text-muted">
              {site.location.city}, {site.location.region}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {year}</p>
          <p>
            Sitio de{" "}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy hover:text-royal"
            >
              {site.name}
            </a>
            {" · "}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-royal hover:underline"
            >
              {site.instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
