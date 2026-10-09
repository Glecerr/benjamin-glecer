export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  context: string;
  approach: string;
  category: string;
  technologies: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  demo: string;
  github?: string;
  featured: boolean;
  year: string;
  role: string;
  features: string[];
  highlights: string[];
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

    context:
      "El proyecto surgió de la necesidad de tener una forma más clara y atractiva de mostrar el catálogo del emprendimiento y facilitar el contacto con quienes consultan por los productos.",

    approach:
      "Organicé el catálogo en componentes reutilizables, incorporé las interacciones necesarias y conecté cada producto con WhatsApp para que la consulta pudiera iniciarse directamente desde la página.",

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
    image: "/projects/decoandi-pag.png",
    imageWidth: 1905,
      imageHeight: 946,
 
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

    highlights: [
      "Catálogo organizado por productos",
      "Contacto directo mediante WhatsApp",
      "Mensajes predefinidos según el producto",
      "Diseño responsive",
    ],
  },

  {
    id: 2,
    slug: "trip-musica",
    title: "Trip Musica",

    description:
      "Aplicación web para publicar y administrar noticias, eventos y contenido multimedia relacionado con la cobertura de Trip Music.",

    longDescription:
      "Desarrollé Trip Musica pensando en una necesidad concreta: que el contenido de la página pueda gestionarse sin tener que modificar el código cada vez que aparece una nueva noticia o evento. La aplicación cuenta con una parte pública donde se muestran las publicaciones y un panel de administración desde el que se pueden crear y gestionar contenidos. Para la autenticación, base de datos y almacenamiento de archivos utilicé Supabase.",

    context:
      "El proyecto nació de la necesidad de que Trip Musica pudiera publicar y administrar sus propias noticias, eventos y contenido multimedia sin depender de modificar el código cada vez que aparece una nueva publicación.",

    approach:
      "Construí una aplicación con una parte pública y un panel de administración, integrando autenticación, base de datos y almacenamiento mediante Supabase.",

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

       image: "/projects/trip-musica.png",
    imageWidth: 1910,
    imageHeight: 944,

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

    highlights: [
      "Panel de administración",
      "Autenticación de administradores",
      "Gestión de noticias y eventos",
      "Base de datos y almacenamiento con Supabase",
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

    context:
      "El proyecto fue pensado para darle al café una presencia digital simple y clara, con la información importante disponible desde cualquier dispositivo.",

    approach:
      "Trabajé la estructura de la página y sus componentes para priorizar una navegación sencilla, una buena visualización de los productos y una experiencia responsive.",

    category: "Sitio web",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    image: "/projects/maldito-cafe.png",
    imageWidth: 1905,
    imageHeight: 985,

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

    highlights: [
      "Diseño mobile-first",
      "Presentación de productos",
      "Navegación simple",
      "Componentes reutilizables",
    ],
  },
];