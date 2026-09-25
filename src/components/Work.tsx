import Image from "next/image";
import { projects } from "@/lib/site";
import { Reveal } from "./Reveal";

const count = projects.length;

const carouselCss = projects
  .map((_, index) => {
    return `
.work-carousel:has(#trabajo-${index}:checked) .work-slide-${index} { display: flex; }
.work-carousel:has(#trabajo-${index}:checked) .work-caption-${index} { display: block; }
.work-carousel:has(#trabajo-${index}:checked) .work-prev-${index},
.work-carousel:has(#trabajo-${index}:checked) .work-next-${index} { display: flex; }
.work-carousel:has(#trabajo-${index}:checked) .work-dot-${index} {
  width: 1.75rem;
  background: var(--turquoise);
}
`;
  })
  .join("");

function ArrowLabel({
  htmlFor,
  direction,
  className,
}: {
  htmlFor: string;
  direction: "prev" | "next";
  className: string;
}) {
  const isPrev = direction === "prev";

  return (
    <label
      htmlFor={htmlFor}
      aria-label={isPrev ? "Trabajo anterior" : "Trabajo siguiente"}
      className={`absolute top-1/2 z-40 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full btn-gradient text-lg text-white sm:h-12 sm:w-12 ${
        isPrev ? "left-0 sm:left-1" : "right-0 sm:right-1"
      } ${className}`}
    >
      {isPrev ? "←" : "→"}
    </label>
  );
}

export function Work() {
  return (
    <section id="proyectos" className="overflow-x-hidden bg-navy text-white">
      <style>{carouselCss}</style>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-turquoise uppercase">
            Trabajos realizados
          </p>
          <h2 className="mt-3 font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Proyectos que hablan por nosotros
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
            Así se ve cada proyecto en escritorio y en el teléfono
          </p>
        </Reveal>

        <div className="work-carousel relative isolate mx-auto mt-8 max-w-5xl sm:mt-10">
          {projects.map((project, index) => (
            <input
              key={`radio-${project.host}`}
              type="radio"
              name="meraki-trabajos"
              id={`trabajo-${index}`}
              defaultChecked={index === 0}
              className="sr-only"
            />
          ))}

          <div className="relative">
            {projects.map((project, index) => (
              <div
                key={project.host}
                className={`work-slide work-slide-${index} pointer-events-none mx-auto hidden max-w-[900px] items-end justify-center px-12 pb-6 sm:max-w-[940px] sm:px-14`}
              >
                <div className="min-w-0 flex-[1_1_68%] overflow-hidden rounded-[1.1rem] border border-white/10 bg-[#0b1220] shadow-[0_28px_70px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center gap-1.5 bg-[#070b14] px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" aria-hidden />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" aria-hidden />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" aria-hidden />
                    <span className="ml-2 truncate text-[10px] text-white/40">{project.host}</span>
                    <span className="ml-auto text-[10px] font-semibold tracking-[0.14em] text-white/30 uppercase">
                      PC
                    </span>
                  </div>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.image}
                      alt={`${project.imageAlt} en computadora`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 70vw, 560px"
                      priority={index === 0}
                      loading={index === 1 ? "eager" : undefined}
                    />
                  </div>
                </div>

                <figure className="relative z-20 -ml-7 w-[136px] shrink-0 translate-y-5 sm:-ml-9 sm:w-[164px] sm:translate-y-6 lg:w-[176px]">
                  <div className="relative rounded-[2.1rem] bg-[#111827] p-[8px] pt-[22px] shadow-[0_22px_50px_rgba(0,0,0,0.55)] ring-1 ring-white/20">
                    <span
                      className="absolute left-1/2 top-[7px] z-10 h-[12px] w-[56px] -translate-x-1/2 rounded-full bg-black"
                      aria-hidden
                    />
                    <div className="overflow-hidden rounded-[1.65rem] bg-white">
                      <Image
                        src={project.imageMobile}
                        alt={`${project.imageAlt} en celular`}
                        width={1170}
                        height={2532}
                        className="block h-auto w-full"
                        sizes="176px"
                        priority={index === 0}
                        unoptimized
                      />
                    </div>
                  </div>
                </figure>
              </div>
            ))}

            {projects.map((_, index) => {
              const prev = (index - 1 + count) % count;
              const next = (index + 1) % count;
              return (
                <div key={`arrows-${index}`}>
                  <ArrowLabel
                    htmlFor={`trabajo-${prev}`}
                    direction="prev"
                    className={`work-prev-${index}`}
                  />
                  <ArrowLabel
                    htmlFor={`trabajo-${next}`}
                    direction="next"
                    className={`work-next-${index}`}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2" aria-label="Proyectos">
            {projects.map((project, index) => (
              <label
                key={`${project.host}-dot`}
                htmlFor={`trabajo-${index}`}
                aria-label={project.title}
                className={`work-dot work-dot-${index} h-2.5 w-2.5 cursor-pointer rounded-full bg-white/40 transition-all hover:bg-white/70`}
              />
            ))}
          </div>

          {projects.map((project, index) => (
            <div
              key={`${project.host}-caption`}
              className={`work-caption work-caption-${index} mx-auto mt-6 hidden max-w-2xl text-center`}
            >
              <p className="text-[11px] font-semibold tracking-[0.16em] text-sky uppercase">
                {project.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
