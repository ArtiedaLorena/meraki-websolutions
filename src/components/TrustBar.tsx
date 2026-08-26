import { stats } from "@/lib/site";

export function TrustBar() {
  return (
    <section aria-label="Por qué Meraki" className="border-y border-line bg-navy-deep">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((item) => (
          <p key={item.value} className="text-center md:text-left">
            <span className="block font-display text-lg font-semibold text-white sm:text-xl">{item.value}</span>
            <span className="mt-1 block text-xs leading-relaxed text-white/60">{item.label}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
