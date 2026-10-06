export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  image: string;
  demo: string;
  github?: string;
  featured: boolean;
  year: string;
  role: string;
  features: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "decoandi",
    title: "DecoAndi",
    description:
      "Sitio web para un emprendimiento de productos personalizados, pensado para mostrar el catálogo y facilitar el contacto con cada cliente.",
    longDescription:
      "Desarrollé una página para DecoAndi donde el emprendimiento puede mostrar sus productos de una forma más ordenada y atractiva. El catálogo está organizado mediante tarjetas con nombre, descripción e información del producto, además de un slider para destacar contenido. Cada producto tiene un acceso directo a WhatsApp con un mensaje preparado para iniciar la consulta con el vendedor. También integré los accesos a las redes sociales del emprendimiento y trabajé la experiencia para que funcione correctamente desde distintos dispositivos.",
    category: "E-commerce / Catálogo",
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
    image: "/projects/logo%20decoandi.jpg",
    demo: "https://decoandi.vercel.app",
    featured: true,
    year: "2026",
    role: "Desarrollo Full Stack",
    features: [
      "Catálogo de productos",
      "Tarjetas con información de cada producto",
      "Slider de contenido",
      "Contacto directo por WhatsApp",
      "Mensajes de WhatsApp predefinidos",
      "Integración con redes sociales",
      "Diseño responsive",
      "Animaciones e interacciones",
    ],
  },

  {
    id: 2,
    slug: "trip-music",
    title: "Trip Music",
    description:
      "Aplicación web para publicar y administrar noticias, eventos y contenido multimedia relacionado con la cobertura de Trip Music.",
    longDescription:
      "Desarrollé Trip Music pensando en una necesidad concreta: que el contenido de la página pueda gestionarse sin tener que modificar el código cada vez que aparece una nueva noticia o evento. La aplicación cuenta con una parte pública donde se muestran las publicaciones y un panel de administración desde el que se pueden crear y gestionar contenidos. Para la autenticación, base de datos y almacenamiento de archivos utilicé Supabase.",
    category: "Aplicación web",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Supabase Auth",
      "Supabase Storage",
    ],
    image: "/projects/logo%20trip.jpg",
    demo: "https://trip-musica.vercel.app",
    featured: true,
    year: "2026",
    role: "Desarrollo Full Stack",
    features: [
      "Sitio público de noticias",
      "Panel de administración",
      "Inicio de sesión para administradores",
      "Creación y gestión de noticias",
      "Gestión de eventos",
      "Contenido multimedia",
      "Base de datos con Supabase",
      "Autenticación con Supabase",
      "Almacenamiento de archivos",
      "Diseño responsive",
    ],
  },

  {
    id: 3,
    slug: "maldito-cafe",
    title: "Maldito Café",
    description:
      "Sitio web para un café, pensado como una presencia digital simple, clara y adaptada a dispositivos móviles.",
    longDescription:
      "Desarrollé Maldito Café como un sitio de presentación para el negocio, buscando que la información importante sea fácil de encontrar y que la experiencia funcione bien especialmente desde el celular. Trabajé la estructura del sitio, la presentación de los productos, la navegación y los componentes reutilizables para conseguir una página simple y responsive.",
    category: "Sitio web",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/projects/logo%20maldito.jpg",
    demo: "https://malditocafe.vercel.app",
    featured: true,
    year: "2026",
    role: "Desarrollo Frontend",
    features: [
      "Página de presentación",
      "Presentación de productos",
      "Navegación simple",
      "Componentes reutilizables",
      "Diseño mobile-first",
      "Diseño responsive",
      "Interacciones de interfaz",
    ],
  },
];