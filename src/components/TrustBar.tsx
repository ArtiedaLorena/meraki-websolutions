import { stats } from "@/lib/site";

export function TrustBar() {
  return (
    <section aria-label="Enfoque de trabajo" className="border-y border-white/10 bg-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.value} className="px-4 py-7 text-center sm:py-8">
            <p className="font-display text-sm font-semibold tracking-tight text-white sm:text-base">
              {item.value}
            </p>
            <p className="mt-1 text-[11px] leading-snug text-white/50 sm:text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
