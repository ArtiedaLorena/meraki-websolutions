"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-sky uppercase">Preguntas</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-5xl">
            Antes de escribirnos
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="font-display text-base font-semibold text-navy">
                      {item.question}
                    </span>
                    <span
                      className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mist text-primary transition ${open ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div hidden={!open} className="pb-5">
                  <p className="max-w-prose text-sm leading-relaxed text-navy/55">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
