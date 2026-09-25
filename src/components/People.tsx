import Image from "next/image";

export function SidePortrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[84px] shrink-0 overflow-hidden rounded-[1.15rem] shadow-[0_12px_28px_rgba(15,23,42,0.12)] sm:w-[120px] lg:w-[136px]">
      <Image
        src={src}
        alt={alt}
        width={408}
        height={544}
        className="aspect-[3/4] w-full object-cover object-top"
        sizes="136px"
      />
    </div>
  );
}

export function AvatarStack({
  people,
  ringClassName = "ring-white",
}: {
  people: readonly { src: string; alt?: string }[];
  ringClassName?: string;
}) {
  return (
    <ul className="flex items-center -space-x-2.5" aria-hidden="true">
      {people.map((person) => (
        <li key={person.src}>
          <Image
            src={person.src}
            alt=""
            width={80}
            height={80}
            className={`h-9 w-9 rounded-full object-cover object-top ring-2 sm:h-10 sm:w-10 ${ringClassName}`}
          />
        </li>
      ))}
    </ul>
  );
}
