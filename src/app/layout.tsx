import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCta } from "@/components/StickyCta";
import { site } from "@/lib/site";
import "./globals.css";

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#122047",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Meraki Web Solutions | Páginas web accesibles en pocos días",
    template: "%s | Meraki Web Solutions",
  },
  description: site.description,
  keywords: [
    "páginas web",
    "páginas web accesibles",
    "diseño web",
    "web en pocos días",
    "mobile first",
    "Meraki Web Solutions",
  ],
  authors: [{ name: site.name, url: site.instagramUrl }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Meraki Web Solutions | Páginas web accesibles en pocos días",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Meraki Web Solutions | Páginas web accesibles en pocos días",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.language}
      className={`${body.variable} ${display.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-navy">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
