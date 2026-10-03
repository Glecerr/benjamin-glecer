import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
} from "lucide-react";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} — Benjamín Glecer`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">

        <header className="flex items-center justify-between py-8">
          <Link
            href="/#proyectos"
            className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-lime-400"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Todos los proyectos
          </Link>

          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            BG<span className="text-lime-400">.</span>
          </Link>
        </header>

        <section className="border-t border-white/10 pt-24 md:pt-36">

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  {project.category}
                </span>

                <span className="h-1 w-1 rounded-full bg-zinc-700" />

                <span className="text-xs text-zinc-700">
                  {project.year}
                </span>
              </div>

              <h1 className="max-w-5xl text-6xl font-semibold tracking-[-0.07em] md:text-8xl lg:text-[9rem]">
                {project.title}
              </h1>
            </div>

            <span className="text-sm text-zinc-600">
              {project.role}
            </span>

          </div>

          <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[1.5fr_1fr]">

            <p className="max-w-4xl text-xl leading-relaxed text-zinc-400 md:text-3xl">
              {project.longDescription}
            </p>

            <div className="md:border-l md:border-white/10 md:pl-10">

              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                Proyecto
              </p>

              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Proyecto propio desarrollado como parte de mi proceso de
                aprendizaje y construcción de productos digitales reales.
              </p>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime-400"
                >
                  Visitar proyecto
                  <ExternalLink size={15} />
                </a>
              )}

            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-lime-300 hover:shadow-[0_0_35px_rgba(163,230,53,0.15)]"
              >
                Ver proyecto online
                <ArrowUpRight size={16} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-zinc-300 transition duration-300 hover:border-lime-400/30 hover:bg-lime-400/[0.05] hover:text-white"
              >
                GitHub
                <ArrowUpRight size={16} />
              </a>
            )}

          </div>

        </section>

        <section className="mt-24 md:mt-36">

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >

            <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.08),transparent_55%)]" />

              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:70px_70px]" />

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">

                  <p className="text-xs uppercase tracking-[0.4em] text-zinc-600">
                    Live project
                  </p>

                  <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] text-zinc-600 transition duration-500 group-hover:text-zinc-300 md:text-7xl">
                    {project.title}
                  </h2>

                  <div className="mt-7 inline-flex items-center gap-2 text-sm text-zinc-700 transition group-hover:text-lime-400">
                    Abrir proyecto
                    <ArrowUpRight size={16} />
                  </div>

                </div>

              </div>

            </div>

          </a>

        </section>

        <section className="grid gap-16 border-t border-white/10 py-24 md:grid-cols-[1fr_2fr] md:py-32">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500">
              01 · Contexto
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              El punto de partida.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">

            <p className="text-lg leading-relaxed text-zinc-400">
              {project.context}
            </p>

            <p className="text-lg leading-relaxed text-zinc-500">
              {project.approach}
            </p>

          </div>

        </section>

        <section className="border-t border-white/10 py-24 md:py-32">

          <div className="mb-16">

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500">
              02 · Highlights
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Lo más importante.
            </h2>

          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">

            {project.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="bg-black p-8 transition hover:bg-white/[0.03] md:p-10"
              >
                <span className="text-xs text-zinc-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-10 text-lg leading-relaxed text-zinc-300">
                  {highlight}
                </p>
              </div>
            ))}

          </div>

        </section>

        <section className="grid gap-16 border-t border-white/10 py-24 md:grid-cols-[1fr_2fr] md:py-32">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500">
              03 · Stack
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Tecnologías.
            </h2>

            <p className="mt-5 max-w-sm leading-relaxed text-zinc-600">
              Las herramientas utilizadas durante el desarrollo.
            </p>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {project.technologies.map((technology) => (
              <div
                key={technology}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-5 transition hover:border-lime-400/20 hover:bg-lime-400/[0.03]"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm text-zinc-300">
                    {technology}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-400"
                  />

                </div>

              </div>
            ))}

          </div>

        </section>

        <section className="grid gap-16 border-t border-white/10 py-24 md:grid-cols-[1fr_2fr] md:py-32">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500">
              04 · Desarrollo
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Qué construí.
            </h2>

          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">

            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="group flex items-center gap-5 py-6"
              >

                <span className="text-xs text-zinc-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 transition group-hover:border-lime-400/30">

                  <Check
                    size={14}
                    className="text-zinc-500 transition group-hover:text-lime-400"
                  />

                </span>

                <span className="text-zinc-300">
                  {feature}
                </span>

              </div>
            ))}

          </div>

        </section>

        <section className="border-t border-white/10 py-24 md:py-32">

          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
                05 · Mi rol
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                {project.role}
              </h2>

            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-zinc-500">
              Participé en el desarrollo del proyecto trabajando sobre su
              estructura, interfaz, funcionalidades y experiencia general.
            </p>

          </div>

        </section>

        <section className="border-t border-white/10 py-24 text-center md:py-36">

          <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
            Siguiente proyecto
          </p>

          <Link
            href={`/proyectos/${nextProject.slug}`}
            className="group mt-7 inline-flex items-center gap-5 text-4xl font-medium tracking-[-0.04em] transition hover:text-zinc-400 md:text-7xl"
          >
            {nextProject.title}

            <ArrowUpRight
              size={34}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </Link>

        </section>

        <div className="flex justify-between border-t border-white/10 py-10">

          <Link
            href="/#proyectos"
            className="group inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-lime-400"
          >
            <ArrowLeft size={15} />
            Todos los proyectos
          </Link>

          <Link
            href="/#contacto"
            className="group inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-lime-400"
          >
            Contacto
            <ArrowUpRight size={15} />
          </Link>

        </div>

      </div>
    </main>
  );
}