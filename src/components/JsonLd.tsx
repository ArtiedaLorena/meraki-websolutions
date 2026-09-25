import { faqs, plans, site } from "@/lib/site";

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#negocio`,
        name: site.name,
        alternateName: "Meraki desarrollo web Zona Sur",
        url: site.url,
        image: `${site.url}/brand/logo-meraki.jpg`,
        logo: `${site.url}/brand/logo-meraki.jpg`,
        description: site.description,
        inLanguage: site.language,
        telephone: `+${site.whatsapp}`,
        priceRange: "$$",
        sameAs: [site.instagramUrl, `https://wa.me/${site.whatsapp}`],
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location.city,
          addressRegion: site.location.region,
          addressCountry: site.location.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -34.7102,
          longitude: -58.2804,
        },
        areaServed: [
          { "@type": "City", name: "Bernal" },
          { "@type": "City", name: "Quilmes" },
          { "@type": "AdministrativeArea", name: "Zona Sur, Gran Buenos Aires" },
          { "@type": "AdministrativeArea", name: "Buenos Aires" },
          { "@type": "Country", name: "Argentina" },
        ],
        makesOffer: plans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          priceCurrency: "ARS",
          price: Number(plan.price.replaceAll(".", "")),
          description: plan.note,
        })),
        knowsAbout: [
          "Desarrollo web en Bernal",
          "Desarrollo web en Quilmes",
          "Desarrollo web en Zona Sur",
          "Diseño web Buenos Aires",
          "Páginas web a medida",
          "SEO local",
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
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
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
