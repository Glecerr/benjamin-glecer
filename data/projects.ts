export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  image: string;
  demo?: string;
  github?: string;
  featured?: boolean;
  year: string;
  role: string;
  features: string[];
  context: string;
  approach: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "decoandi",
    title: "DecoAndi",
    description:
      "E-commerce de productos personalizados y decorativos, pensado para ofrecer una experiencia de compra moderna, clara y simple.",
    longDescription:
      "DecoAndi es un proyecto de e-commerce desarrollado para llevar una propuesta de productos personalizados al entorno digital. La idea fue construir una experiencia de compra cuidada, responsive y preparada para evolucionar junto con el negocio.",
    category: "E-commerce",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "GSAP",
      "Lucide React",
    ],
    image: "/projects/logo decoandi.jpg",
    demo: "https://decoandi.vercel.app",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    context:
      "DecoAndi parte de una necesidad concreta: convertir una propuesta de productos personalizados en una experiencia digital clara, visual y preparada para vender.",
    approach:
      "La aplicación está pensada alrededor del recorrido del usuario, desde la exploración del catálogo hasta el carrito, utilizando una estructura modular que permite seguir incorporando funcionalidades.",
    highlights: [
      "Experiencia de e-commerce completa",
      "Catálogo organizado",
      "Carrito de compras",
      "Arquitectura basada en componentes",
      "Animaciones e interacciones",
      "Diseño responsive",
    ],
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Experiencia responsive",
      "Componentes reutilizables",
      "Animaciones e interacciones",
      "Arquitectura preparada para escalar",
    ],
  },

  {
    id: 2,
    slug: "trip-music",
    title: "Trip Music",
    description:
      "Aplicación web musical enfocada en descubrir música y construir una experiencia interactiva alrededor del contenido.",
    longDescription:
      "Trip Music es un proyecto experimental centrado en la música y la exploración de contenido. El objetivo es combinar una interfaz atractiva con una experiencia interactiva que pueda seguir creciendo con nuevas funcionalidades.",
    category: "Web App",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
    ],
    image: "/projects/logo trip.jpg",
    demo: "https://trip-musica.vercel.app",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    context:
      "Trip Music nace de la idea de construir una experiencia web alrededor de la música, poniendo el foco en la interacción y la exploración.",
    approach:
      "El proyecto se plantea como una base sobre la que se puedan sumar nuevas experiencias musicales sin perder una interfaz simple y fácil de recorrer.",
    highlights: [
      "Experiencia centrada en música",
      "Interfaz interactiva",
      "Exploración de contenido",
      "Componentización",
      "Diseño responsive",
      "Arquitectura preparada para crecer",
    ],
    features: [
      "Interfaz musical interactiva",
      "Exploración de contenido",
      "Diseño responsive",
      "Componentización",
      "Experiencia orientada al usuario",
      "Arquitectura escalable",
    ],
  },

  {
    id: 3,
    slug: "maldito-cafe",
    title: "Maldito Café",
    description:
      "Menú digital moderno diseñado para presentar productos de forma clara y adaptada principalmente a dispositivos móviles.",
    longDescription:
      "Maldito Café es un proyecto orientado a resolver una necesidad concreta: transformar una carta tradicional en una experiencia digital rápida, clara y accesible desde cualquier dispositivo.",
    category: "Web App",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
    ],
    image: "/projects/logo maldito.jpg",
    demo: "https://malditocafe.vercel.app",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    context:
      "El objetivo es que una persona pueda entrar desde el celular, entender rápidamente la propuesta del café y encontrar los productos sin fricción.",
    approach:
      "La interfaz prioriza velocidad de navegación, legibilidad y una estructura pensada principalmente para pantallas móviles.",
    highlights: [
      "Experiencia mobile-first",
      "Acceso rápido al menú",
      "Presentación clara de productos",
      "Navegación simple",
      "Diseño responsive",
      "Interfaz enfocada en una necesidad concreta",
    ],
    features: [
      "Menú digital",
      "Diseño mobile-first",
      "Navegación simple",
      "Presentación de productos",
      "Interfaz responsive",
      "Experiencia optimizada para móvil",
    ],
  },
];