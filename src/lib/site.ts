export const site = {
  name: "Meraki Web Solutions",
  shortName: "Meraki",
  tagline: "WEB SOLUTIONS",
  description:
    "Desarrollo web en Bernal, Quilmes y Zona Sur. Páginas a medida para que te encuentren en Google y te escriban por WhatsApp",
  locale: "es_AR",
  language: "es-AR",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  instagramUrl: "https://www.instagram.com/meraki.websolutionsok/",
  instagramHandle: "@meraki.websolutionsok",
  instagramDm: "https://ig.me/m/meraki.websolutionsok",
  whatsapp: "542214097909",
  whatsappDisplay: "+54 221 409-7909",
  whatsappMessage:
    "Hola Meraki, quiero una página web para mi negocio. ¿Me cuentan precios y cómo arrancamos?",
  currency: "ARS",
  location: {
    city: "Bernal",
    region: "Buenos Aires",
    area: "Zona Sur",
    country: "Argentina",
    countryCode: "AR",
    nearby: ["Quilmes", "Berazategui", "Avellaneda", "Lanús", "Lomas de Zamora", "Temperley"],
  },
} as const;

export const navItems = [
  { href: "#proyectos", label: "Trabajos" },
  { href: "#precios", label: "Precios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const heroChips = [
  "A medida",
  "WhatsApp",
  "SEO",
  "Sin plantillas",
  "Trato directo",
  "Precio en pesos",
  "Mobile first",
  "Diseño propio",
] as const;

export const stats = [
  { value: "Desde $150.000", label: "Landing page en pesos" },
  { value: "Pocos días", label: "De WhatsApp a web al aire" },
  { value: "Diseño propio", label: "Sin plantillas genéricas" },
  { value: "Trato directo", label: "Hablás con quien diseña" },
] as const;

export const marqueeItems = [
  "Maison Dorée",
  "Estudio Merlo",
  "Studiocrazy",
  "Dra. Elena Vidal",
  "Aurea Detail",
  "A medida",
  "WhatsApp",
  "SEO",
  "Diseño propio",
] as const;

export const services = [
  {
    n: "01",
    title: "Diseño web",
    description:
      "Una página clara para presentar tu negocio, generar confianza y que te escriban. Nada de plantilla genérica",
  },
  {
    n: "02",
    title: "Sitios que venden",
    description:
      "Servicios, trabajos y un camino obvio al WhatsApp. Pensado para consultas reales, no para verse lindo y quedarse quieto",
  },
  {
    n: "03",
    title: "Aparecé en Google",
    description:
      "SEO desde el día uno: títulos, datos estructurados, velocidad y sitemap",
  },
  {
    n: "04",
    title: "Mobile first",
    description:
      "La mayoría entra desde el celular. Se lee, se toca y carga bien acá, en el bondi o en el local",
  },
] as const;

export const projects = [
  {
    tag: "Estética vehicular",
    title: "Aurea Detail",
    subtitle: "Detailing",
    description:
      "Servicios, turnos por WhatsApp y una estética precisa. Hecha para el negocio, no para un portfolio genérico",
    href: "https://aurea-detail.vercel.app/",
    host: "aurea-detail.vercel.app",
    image: "/projects/aurea-detail-desktop.png",
    imageMobile: "/projects/aurea-detail-mobile.png",
    imageAlt: "Sitio web de Aurea Detail, estética vehicular en Temperley, Zona Sur",
  },
  {
    tag: "Estudio de belleza",
    title: "Studiocrazy",
    subtitle: "Uñas y pestañas",
    description:
      "Turnos, servicios y un look dark con glow rosa. El estudio se entiende en diez segundos desde el celu",
    href: "https://crazy-studio.vercel.app/",
    host: "crazy-studio.vercel.app",
    image: "/projects/crazy-studio-desktop.png",
    imageMobile: "/projects/crazy-studio-mobile.png",
    imageAlt: "Sitio web de Studiocrazy, estudio de uñas y pestañas",
  },
  {
    tag: "Consultorio médico",
    title: "Dra. Elena Vidal",
    subtitle: "Dermatología",
    description:
      "Patologías, coberturas y reserva de turnos. Un sitio que transmite confianza y pide la consulta",
    href: "https://dermatologia-vidal.vercel.app/",
    host: "dermatologia-vidal.vercel.app",
    image: "/projects/dermatologia-vidal-desktop.png",
    imageMobile: "/projects/dermatologia-vidal-mobile.png",
    imageAlt: "Sitio web de la Dra. Elena Vidal, dermatóloga",
  },
  {
    tag: "Estudio jurídico",
    title: "Estudio Merlo",
    subtitle: "Derecho corporativo",
    description:
      "Landing para una abogada: societario, inmobiliario y patrimonial, con consulta clara y un tono serio que transmite confianza",
    href: "https://landing-estudio-merlo.vercel.app/",
    host: "landing-estudio-merlo.vercel.app",
    image: "/projects/estudio-merlo-desktop.png",
    imageMobile: "/projects/estudio-merlo-mobile.png",
    imageAlt: "Sitio web de Estudio Merlo, derecho corporativo e inmobiliario en Buenos Aires",
  },
  {
    tag: "Restaurante",
    title: "Maison Dorée",
    subtitle: "Fine dining",
    description:
      "Carta, reservas por WhatsApp y una estética premium. Un sitio que invita a reservar mesa, no a mirar y salir",
    href: "https://maison-doree-psi.vercel.app/",
    host: "maison-doree-psi.vercel.app",
    image: "/projects/maison-doree-desktop.png",
    imageMobile: "/projects/maison-doree-mobile.png",
    imageAlt: "Sitio web de Maison Dorée, restaurante de fine dining en Recoleta, Buenos Aires",
  },
] as const;

function projectByHost(host: string) {
  const project = projects.find((item) => item.host === host);
  if (!project) {
    throw new Error(`Unknown project host: ${host}`);
  }
  return project;
}

export const heroProject = projectByHost("maison-doree-psi.vercel.app");

export const authorityShots = {
  featured: projectByHost("landing-estudio-merlo.vercel.app"),
  second: projectByHost("crazy-studio.vercel.app"),
  third: projectByHost("dermatologia-vidal.vercel.app"),
  phones: [
    projectByHost("maison-doree-psi.vercel.app"),
    projectByHost("crazy-studio.vercel.app"),
    projectByHost("aurea-detail.vercel.app"),
    projectByHost("dermatologia-vidal.vercel.app"),
  ],
} as const;

export const processSteps = [
  {
    step: "01",
    time: "Hoy",
    title: "Charlamos",
    description:
      "WhatsApp o una llamada corta. Qué vendés, a quién, y qué tiene que lograr la web",
  },
  {
    step: "02",
    time: "1–2 días",
    title: "Diseñamos",
    description:
      "Estructura y visuales con tu marca. Lo ves, lo comentás, avanzamos",
  },
  {
    step: "03",
    time: "Pocos días",
    title: "Desarrollamos",
    description:
      "Código propio, SEO local y WhatsApp. Probamos en celu y escritorio",
  },
  {
    step: "04",
    time: "Al aire",
    title: "Publicamos",
    description:
      "Dominio, velocidad y un sitio listo para que te escriban",
  },
] as const;

export const plans = [
  {
    name: "Landing",
    price: "150.000",
    note: "Una página para captar consultas",
    time: "Lista en pocos días",
    featured: false,
    items: [
      "Diseño a medida",
      "Adaptada a celular",
      "Botón de WhatsApp",
      "SEO básico local",
      "Publicación incluida",
    ],
  },
  {
    name: "Web de negocio",
    price: "450.000",
    note: "La más pedida",
    time: "Sitio completo",
    featured: true,
    items: [
      "Hasta 5 secciones",
      "Diseño 100% a medida",
      "SEO técnico de base",
      "WhatsApp en toda la web",
      "Google Analytics",
      "Publicación y ajustes de arranque",
    ],
  },
  {
    name: "Web con turnos",
    price: "520.000",
    note: "Para estudios, consultorios y locales",
    time: "Reservas y contacto",
    featured: false,
    items: [
      "Todo lo de Web de negocio",
      "Turnos o reservas",
      "Servicios y galería",
      "Integración con Instagram",
      "Pensada para convertir consultas",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "La web se siente tan prolija como el trabajo sobre el auto. Oscura, precisa y con el turno a un toque",
    name: "Aurea Detail",
    role: "Estética vehicular",
    photo: "/people/portrait-detailer.png",
    photoAlt: "Retrato ilustrativo para un negocio de estética vehicular",
    image: "/projects/aurea-detail-desktop.png",
    imageAlt: "Sitio web de Aurea Detail, estética vehicular en Temperley, Zona Sur",
  },
  {
    quote:
      "El glow, los turnos y el tono del estudio quedaron como los teníamos en la cabeza, sobre todo en el celular",
    name: "Studiocrazy",
    role: "Uñas y pestañas",
    photo: "/people/portrait-beauty.png",
    photoAlt: "Retrato ilustrativo para un estudio de belleza",
    image: "/projects/crazy-studio-desktop.png",
    imageAlt: "Sitio web de Studiocrazy, estudio de uñas y pestañas",
  },
  {
    quote:
      "Pasa confianza desde el primer scroll. Clara, cálida y hecha para que pidan un turno",
    name: "Dra. Elena Vidal",
    role: "Dermatología",
    photo: "/people/portrait-clinic.png",
    photoAlt: "Retrato ilustrativo para un consultorio de dermatología",
    image: "/projects/dermatologia-vidal-desktop.png",
    imageAlt: "Sitio web de la Dra. Elena Vidal, dermatóloga",
  },
  {
    quote:
      "Entrá y se entiende que es un estudio serio. La consulta está a un toque, sin plantilla de abogado genérica",
    name: "Estudio Merlo",
    role: "Derecho corporativo",
    photo: "/people/portrait-lawyer.png",
    photoAlt: "Retrato ilustrativo para un estudio jurídico",
    image: "/projects/estudio-merlo-desktop.png",
    imageAlt: "Sitio web de Estudio Merlo, derecho corporativo e inmobiliario en Buenos Aires",
  },
  {
    quote:
      "Se siente el restaurante desde el primer scroll. Carta, reserva y una estética que pide mesa",
    name: "Maison Dorée",
    role: "Fine dining",
    photo: "/people/portrait-chef.png",
    photoAlt: "Retrato ilustrativo para un restaurante de fine dining",
    image: "/projects/maison-doree-desktop.png",
    imageAlt: "Sitio web de Maison Dorée, restaurante de fine dining en Recoleta, Buenos Aires",
  },
] as const;

export const textSectionPortraits = {
  problems: {
    src: "/people/portrait-shop-owner.png",
    alt: "Retrato ilustrativo de una dueña de negocio revisando consultas en el celular",
  },
  services: {
    src: "/people/portrait-cafe.png",
    alt: "Retrato ilustrativo de un profesional trabajando en su sitio web",
  },
} as const;

export const problems = [
  {
    n: "01",
    said: "Me escriben por redes y después se enfría",
    reply:
      "La web ordena lo que hacés, muestra prueba y deja un WhatsApp a un toque. El interesado no tiene que adivinar si sos serio",
  },
  {
    n: "02",
    said: "Quiero que me encuentren, pero no entiendo el SEO",
    reply:
      "Dejamos títulos, estructura y velocidad listos para Google. Si más adelante hay pauta, la web ya está preparada para convertir el clic",
  },
  {
    n: "03",
    said: "Con una plantilla no me alcanza",
    reply:
      "Turnos, servicios, catálogo o un flujo raro: lo armamos a medida. Hablás con quien diseña, sin un formulario eterno",
  },
  {
    n: "04",
    said: "Sé que necesito web, no sé por dónde entrar",
    reply:
      "Te ordenamos qué conviene ahora, qué puede esperar, y te vamos con un plan en pesos, claro",
  },
] as const;

export const faqs = [
  {
    question: "¿Cuánto sale una página web?",
    answer:
      "Landing desde $150.000, web de negocio $450.000 y web con turnos $520.000. Precio final en pesos argentinos, sin sorpresas en dólares",
  },
  {
    question: "¿Puedo pagar en pesos?",
    answer:
      "Sí. Todos los planes se cotizan y se cobran en pesos argentinos",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "Páginas web en pocos días, no en meses. El plazo lo cerramos cuando vemos el alcance y tu contenido",
  },
  {
    question: "¿La web aparece en Google?",
    answer:
      "Sale con SEO técnico: títulos, descripciones, datos estructurados, sitemap y velocidad. Google entiende qué hacés y cómo contactarte",
  },
  {
    question: "¿Usan plantillas o inteligencia artificial para diseñar?",
    answer:
      "No. Cada sitio se arma a medida de tu marca. La IA no reemplaza el criterio ni el ojo de quien diseña y habla con vos",
  },
] as const;

export function formatArs(amount: string) {
  return `$ ${amount}`;
}

export function whatsappUrl(text: string = site.whatsappMessage) {
  const number = site.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
