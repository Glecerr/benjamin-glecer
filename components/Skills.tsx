import {
  BrainCircuit,
  Code2,
  Database,
  Globe2,
  Layers3,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces modernas, responsive y centradas en la experiencia.",
    icon: Globe2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    description: "Lógica, APIs y estructuras para aplicaciones escalables.",
    icon: Code2,
    skills: ["Node.js", "Express", "APIs REST", "JavaScript", "TypeScript"],
  },
  {
    title: "Datos",
    description: "Trabajo con información, persistencia y estructuras de datos.",
    icon: Database,
    skills: ["SQL", "Bases de datos", "Modelado", "Consultas"],
  },
  {
    title: "IA",
    description: "Exploración y desarrollo de soluciones utilizando inteligencia artificial.",
    icon: BrainCircuit,
    skills: ["IA generativa", "APIs de IA", "Integración de modelos", "Automatización"],
  },
  {
    title: "UI & Motion",
    description: "Diseño visual, interacción y movimiento para productos digitales.",
    icon: Layers3,
    skills: ["Framer Motion", "GSAP", "Lucide", "Responsive Design"],
  },
  {
    title: "Herramientas",
    description: "Herramientas utilizadas para desarrollar, probar y desplegar proyectos.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "VS Code", "npm", "PowerShell"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-lime-400">
            02 · Skills
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Las herramientas
            <br />
            <span className="text-zinc-500">con las que construyo.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
            Un stack que sigo ampliando constantemente mientras desarrollo
            proyectos reales y profundizo mis conocimientos.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group bg-black p-8 transition duration-300 hover:bg-white/[0.025] md:p-9"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition group-hover:border-lime-400/30 group-hover:bg-lime-400/[0.05]">
                    <Icon
                      size={19}
                      className="text-zinc-500 transition group-hover:text-lime-400"
                    />
                  </div>

                  <span className="text-xs text-zinc-700">
                    {String(skillGroups.indexOf(group) + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em]">
                  {group.title}
                </h3>

                <p className="mt-3 min-h-[56px] text-sm leading-relaxed text-zinc-600">
                  {group.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500 transition hover:border-lime-400/20 hover:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}