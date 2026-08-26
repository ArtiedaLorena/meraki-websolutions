export const site = {
  name: "Meraki Web Solutions",
  shortName: "Meraki",
  tagline: "WEB SOLUTIONS",
  description:
    "Páginas web accesibles, mobile first y listas en pocos días. Tu sitio, online y listo para que te escriban.",
  locale: "es_AR",
  language: "es-AR",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  instagramUrl: "https://www.instagram.com/meraki.responsivewebs/",
  instagramHandle: "@meraki.responsivewebs",
  instagramDm: "https://ig.me/m/meraki.responsivewebs",
  whatsapp: "542214097909",
  whatsappDisplay: "+54 221 409-7909",
  whatsappMessage:
    "Hola Meraki! Vi su web y quiero una página para mi emprendimiento, lista en pocos días. ¿Me cuentan cómo arrancamos?",
  location: {
    city: "Bernal",
    region: "Buenos Aires",
    area: "Zona Sur",
    country: "Argentina",
    countryCode: "AR",
  },
} as const;

export const navItems = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Trabajos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const heroChips = ["Accesible", "Pocos días", "Mobile first", "WhatsApp"] as const;

export const stats = [
  { value: "Pocos días", label: "Tu web al aire, sin esperas de meses" },
  { value: "Accesible", label: "Pensada para tu emprendimiento" },
  { value: "Mobile first", label: "Se ve impecable en el celular" },
  { value: "Trato directo", label: "Hablás con quien hace la web" },
] as const;

export const problems = [
  {
    title: "Tu Instagram está vivo. Tu web, no.",
    description:
      "El algoritmo esconde el perfil. Una web es el lugar estable donde Google y tus clientes te encuentran siempre.",
  },
  {
    title: "Creés que una web es cara y tarda meses",
    description:
      "No tiene que ser así: sitios claros, accesibles y listos en pocos días, para que empieces a recibir consultas.",
  },
  {
    title: "Se ve bien en la compu y se rompe en el celu",
    description:
      "La mayoría entra desde el teléfono. Si hay que hacer zoom para tocar un botón, se van.",
  },
] as const;

export const outcomes = [
  {
    title: "Una web que vende",
    description:
      "Clara, rápida y con un camino obvio para que te escriban. Sin paquetes inflados ni letra chica.",
  },
  {
    title: "Lista en pocos días",
    description:
      "Diseño, desarrollo y publicación en un sprint corto. Arrancás a recibir consultas rápido.",
  },
  {
    title: "Perfecta en el celular",
    description:
      "Mobile first de verdad: se lee bien, carga rápido y el botón de WhatsApp está a un toque.",
  },
] as const;

export const services = [
  {
    title: "Tu página web",
    description:
      "Landing o sitio claro para que te encuentren, entiendan qué hacés y te escriban. Accesible, sin recortar calidad.",
  },
  {
    title: "Entrega en pocos días",
    description:
      "No esperás un trimestre. Coordinamos por WhatsApp, diseñamos, desarrollamos y publicamos en días.",
  },
  {
    title: "Hecha para que te contacten",
    description:
      "WhatsApp, Instagram y un formulario o turnos, según lo que necesites. El visitante no tiene que adivinar.",
  },
  {
    title: "Mobile first y SEO",
    description:
      "Se ve impecable en el celu, carga rápido y sale con bases de SEO para que Google te encuentre.",
  },
] as const;

export const projects = [
  {
    tag: "Estudio de belleza",
    title: "Studiocrazy — Uñas & Pestañas",
    description:
      "Turnos online, servicios y una estética dark con glow rosa para un estudio de uñas y pestañas.",
    href: "https://crazy-studio.vercel.app/",
    host: "crazy-studio.vercel.app",
    image: "/projects/crazy-studio.webp",
    imageAlt: "Captura del sitio Studiocrazy: uñas y pestañas",
  },
  {
    tag: "Consultorio médico",
    title: "Dra. Elena Vidal — Dermatología",
    description:
      "Sitio médico con patologías, control de lunares, coberturas y reserva de turnos. Profesional, cálido y pensado para convertir consultas.",
    href: "https://dermatologia-vidal.vercel.app/",
    host: "dermatologia-vidal.vercel.app",
    image: "/projects/dermatologia-vidal.webp",
    imageAlt: "Captura del sitio de la Dra. Elena Vidal, dermatóloga en Palermo",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    time: "Hoy",
    title: "Nos escribís",
    description:
      "Un WhatsApp alcanza: qué hacés y si ya tenés logo o Instagram. Te respondemos con cómo arrancar.",
  },
  {
    step: "02",
    time: "1–2 días",
    title: "Diseñamos",
    description:
      "Estructura mobile first y una propuesta visual alineada a tu marca. Lo ves, lo comentás, avanzamos.",
  },
  {
    step: "03",
    time: "Pocos días",
    title: "Desarrollamos",
    description:
      "Código moderno, SEO y WhatsApp. Probamos en celu y escritorio.",
  },
  {
    step: "04",
    time: "Al aire",
    title: "Publicamos",
    description:
      "Tu web queda online y lista para recibir consultas. Seguimos cerca por si hay un ajuste.",
  },
] as const;

export const reasons = [
  {
    title: "Trato directo",
    description:
      "Hablás con quien hace la web. Sin capas, sin demoras: coordinamos por WhatsApp y avanzamos.",
  },
  {
    title: "Accesible, sin recortar calidad",
    description:
      "El foco son emprendimientos que necesitan una web seria ya: clara, rápida y que se vea bien en el celular.",
  },
  {
    title: "Pocos días, no meses",
    description:
      "Un proceso corto. Vemos avances rápido y publicamos cuando está lista para traerte consultas.",
  },
] as const;

export const faqs = [
  {
    question: "¿Cómo arrancamos?",
    answer:
      "Escribinos por WhatsApp al +54 221 409-7909. Contanos qué hacés y si ya tenés logo o Instagram. Con eso te decimos cómo sigue, sin compromiso.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "Páginas web en pocos días. No trabajamos con plazos de meses: el espíritu es que salgas al aire rápido y empieces a recibir consultas.",
  },
  {
    question: "¿Qué incluye?",
    answer:
      "Diseño, desarrollo, publicación, versión mobile, bases de SEO y el contacto que uses (WhatsApp, Instagram, turnos). Lo justo para que la web trabaje por vos.",
  },
  {
    question: "¿La web se ve bien en el celular?",
    answer:
      "Sí. Diseñamos primero para el teléfono —donde entra la mayoría del tráfico— y después adaptamos tablet y escritorio.",
  },
  {
    question: "¿Incluye SEO?",
    answer:
      "Cada sitio sale con títulos, descripciones, datos estructurados, sitemap y velocidad. Google tiene que entender qué hacés desde el primer día.",
  },
  {
    question: "¿Puedo seguir usando Instagram?",
    answer:
      "Sí. Instagram es el escaparate; la web es la casa. Las vinculamos con botones, galería y un lugar estable para servicios y contacto.",
  },
] as const;

export function whatsappUrl(text: string = site.whatsappMessage) {
  const number = site.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
