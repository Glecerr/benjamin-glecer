import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 border-t border-white/10 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1fr_1.5fr] md:gap-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-lime-400">
            01 · Sobre mí
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Construyo cosas
            <br />
            <span className="text-zinc-500">que tienen sentido.</span>
          </h2>
        </div>

        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-zinc-300 md:text-2xl">
            Soy Benjamín Glecer, estudiante de Ingeniería en Sistemas y
            desarrollador Full Stack de Buenos Aires.
          </p>

          <p className="max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
            Me interesa crear productos digitales que no solamente funcionen,
            sino que también tengan una buena experiencia de usuario. Disfruto
            transformar una idea en una aplicación real, desde la estructura
            y la lógica hasta la interfaz y los detalles finales.
          </p>

          <p className="max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
            Actualmente estoy profundizando mis conocimientos en desarrollo
            web, software, inteligencia artificial y nuevas tecnologías,
            mientras construyo proyectos propios para seguir aprendiendo y
            llevar mis ideas a producción.
          </p>

          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 transition duration-300 hover:border-lime-400/30 hover:bg-lime-400/[0.05] hover:text-white"
          >
            Hablemos

            <ArrowUpRight
              size={16}
              className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-400"
            />
          </a>
        </div>
      </div>
    </section>
  );
}