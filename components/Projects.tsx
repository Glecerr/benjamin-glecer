import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-24 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400">
              01 · Proyectos destacados
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Lo que fui
              <br />
              <span className="text-zinc-500">
                construyendo.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-zinc-500 md:text-lg">
              Proyectos desarrollados a partir de necesidades concretas,
              combinando interfaces, lógica, datos e integración de servicios.
            </p>
          </div>

          <p className="max-w-xs text-sm leading-7 text-zinc-600 md:text-right">
            Una selección de proyectos donde fui llevando ideas a productos
            web funcionales.
          </p>
        </div>

        <div className="mt-16 grid gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}