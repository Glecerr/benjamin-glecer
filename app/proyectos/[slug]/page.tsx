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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-400/[0.035] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a
            href="/#inicio"
            className="text-lg font-semibold tracking-tight"
          >
            BG<span className="text-blue-400">.</span>
          </a>

          <a
            href="/#proyectos"
            className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-blue-400"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Volver a proyectos
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.05] px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-blue-400">
              {project.category}
            </span>

            <span className="text-xs text-zinc-700">/</span>

            <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              {project.year}
            </span>
          </div>

          <h1 className="mt-8 text-6xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-8xl">
            {project.title}
            <span className="text-blue-400">.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
            {project.longDescription}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-blue-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]"
              >
                Ver proyecto online

                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            )}

            <a
              href="/#contacto"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm text-zinc-300 transition hover:border-blue-400/30 hover:bg-blue-400/[0.04] hover:text-white"
            >
              Contactarme
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-6xl gap-px bg-white/10 md:grid-cols-3">
          <div className="bg-black p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
              Rol
            </p>

            <p className="mt-4 text-lg text-zinc-300">
              {project.role}
            </p>
          </div>

          <div className="bg-black p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
              Categoría
            </p>

            <p className="mt-4 text-lg text-zinc-300">
              {project.category}
            </p>
          </div>

          <div className="bg-black p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
              Año
            </p>

            <p className="mt-4 text-lg text-zinc-300">
              {project.year}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.6fr] md:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400">
              01 · El proyecto
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              De dónde
              <br />
              <span className="text-zinc-500">partió la idea.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-400 md:text-xl">
              {project.context}
            </p>

            <div className="mt-10 border-l border-blue-400/30 pl-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
                Cómo lo encaré
              </p>

              <p className="mt-4 text-base leading-8 text-zinc-500 md:text-lg">
                {project.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400">
              02 · Funcionalidades
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Lo que permite
              <br />
              <span className="text-zinc-500">hacer el proyecto.</span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex gap-4 bg-black p-7 transition hover:bg-white/[0.025]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/[0.05]">
                  <Check size={14} className="text-blue-400" />
                </div>

                <p className="pt-1 text-sm leading-relaxed text-zinc-400">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.6fr] md:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400">
              03 · Tecnologías
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Cómo está
              <br />
              <span className="text-zinc-500">construido.</span>
            </h2>
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-zinc-400 transition hover:border-blue-400/25 hover:text-zinc-200"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <p className="text-sm text-zinc-400">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
              Seguimos
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              ¿Te interesa lo que hago?
            </h2>

            <p className="mt-3 text-sm text-zinc-600">
              Podemos hablar sobre un proyecto, una oportunidad o una idea.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-blue-300"
              >
                Visitar proyecto

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            )}

            <a
              href="/#contacto"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm text-zinc-400 transition hover:border-blue-400/30 hover:text-white"
            >
              Hablemos
            </a>

            <a
              href="/#proyectos"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm text-zinc-400 transition hover:border-blue-400/30 hover:text-white"
            >
              Otros proyectos
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold">
            BG<span className="text-blue-400">.</span>
          </p>

          <p className="text-xs text-zinc-700">
            Benjamín Glecer · Full Stack Developer · CABA, Argentina
          </p>
        </div>
      </footer>
    </main>
  );
}