import { ArrowDownRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="proyectos"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-20 grid gap-10 md:grid-cols-[1fr_320px] md:items-end">
            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-zinc-500">
                01 · Proyectos
              </p>

              <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Lo que estoy
                <br />
                <span className="text-zinc-500">
                  construyendo.
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-zinc-600 md:justify-self-end">
              Proyectos propios donde llevo ideas a productos digitales
              funcionales, desde la interfaz hasta la implementación.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.1}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-600">
              {featuredProjects.length} proyectos destacados
            </span>

            <ArrowDownRight
              size={20}
              className="text-zinc-600"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}