import { marqueeItems } from "@/lib/site";

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <section aria-hidden className="overflow-hidden border-y border-white/10 bg-navy py-4">
      <div className="flex w-max marquee-track">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="px-8 font-display text-sm font-medium tracking-[0.14em] text-white/55 uppercase"
          >
            {item}
            <span className="ml-8 text-turquoise">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
