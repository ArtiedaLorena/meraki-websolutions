import Link from "next/link";

export default function NotFound() {
  return (
    <main id="contenido" className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-royal uppercase">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-navy">Esta página no existe.</h1>
      <p className="mt-3 text-muted">Volvé al inicio para ver servicios, proceso y contacto de Meraki Web Solutions.</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-6 text-sm font-semibold text-white"
      >
        Ir al inicio
      </Link>
    </main>
  );
}
