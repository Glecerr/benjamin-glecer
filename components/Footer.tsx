import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            BG<span className="text-lime-400">.</span>
          </p>

          <p className="mt-2 text-xs text-zinc-600">
            Benjamín Glecer · Full Stack Developer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#inicio"
            className="text-xs text-zinc-600 transition hover:text-lime-400"
          >
            Inicio
          </a>

          <a
            href="#proyectos"
            className="text-xs text-zinc-600 transition hover:text-lime-400"
          >
            Proyectos
          </a>

          <a
            href="#contacto"
            className="group inline-flex items-center gap-1.5 text-xs text-zinc-600 transition hover:text-lime-400"
          >
            Contacto
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Benjamín Glecer
        </p>
      </div>
    </footer>
  );
}