import { whatsappUrl } from "@/lib/site";

type WhatsAppLinkProps = {
  className?: string;
  children: React.ReactNode;
  message?: string;
};

export function WhatsAppLink({ className, children, message }: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.91 4.43-9.91 9.88 0 1.74.46 3.45 1.32 4.95L2 22l5.35-1.4a9.9 9.9 0 0 0 4.69 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.72 14.16c-.24.67-1.4 1.23-1.94 1.28-.5.05-1.12.07-1.81-.11-.42-.12-.95-.3-1.64-.59-2.88-1.25-4.76-4.16-4.9-4.35-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.04-2.47.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.24.6.82 2.07.89 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.18.3.79 1.3 1.7 2.11 1.16 1.03 2.14 1.36 2.44 1.51.3.15.48.13.66-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.34.08.13.08.73-.16 1.4Z" />
    </svg>
  );
}

export const ctaPrimary =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-7 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(18,32,71,0.22)] transition hover:bg-royal";

export const ctaOnDark =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-navy transition hover:bg-mist";

export const ctaCompact =
  "inline-flex items-center justify-center rounded-full bg-navy text-white shadow-sm transition hover:bg-royal";
