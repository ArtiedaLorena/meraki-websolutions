import { site, whatsappUrl } from "@/lib/site";
import { ctaCompact, WhatsAppIcon } from "./WhatsAppLink";

export function StickyCta() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${ctaCompact} fixed right-4 bottom-4 z-40 h-14 w-14 sm:right-6 sm:bottom-6`}
      aria-label={`Quiero mi web por WhatsApp al ${site.whatsappDisplay}`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
