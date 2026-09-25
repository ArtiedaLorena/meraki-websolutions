import Link from "next/link";
import { ctaPrimary } from "@/components/WhatsAppLink";

export default function NotFound() {
  return (
    <main id="contenido" className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-sky uppercase">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-navy">Esta página no existe</h1>
      <p className="mt-3 text-navy/55">Volvé al inicio para ver trabajos, oferta y contacto de Meraki</p>
      <Link
        href="/"
        className={`mt-8 ${ctaPrimary}`}
      >
        Ir al inicio
      </Link>
    </main>
  );
}
