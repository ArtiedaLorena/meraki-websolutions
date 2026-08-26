import { site } from "@/lib/site";

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#negocio`,
        name: site.name,
        alternateName: "Meraki páginas web",
        url: site.url,
        image: `${site.url}/brand/logo-meraki.jpg`,
        logo: `${site.url}/brand/logo-meraki.jpg`,
        description: site.description,
        inLanguage: site.language,
        telephone: `+${site.whatsapp}`,
        sameAs: [site.instagramUrl, `https://wa.me/${site.whatsapp}`],
        areaServed: { "@type": "City", name: site.location.city },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location.city,
          addressRegion: site.location.region,
          addressCountry: site.location.countryCode,
        },
        knowsAbout: [
          "Páginas web",
          "Diseño web responsive",
          "Desarrollo web mobile first",
          "SEO",
          "Landing pages",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#sitio`,
        url: site.url,
        name: site.name,
        inLanguage: site.language,
        publisher: { "@id": `${site.url}/#negocio` },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo arrancamos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Escribinos por WhatsApp al +54 221 409-7909. Contanos qué hacés y te decimos cómo seguir.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuánto tarda?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Páginas web en pocos días. El espíritu es salir al aire rápido y empezar a recibir consultas.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué incluye?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Diseño, desarrollo, publicación, versión mobile, bases de SEO y contacto por WhatsApp.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
