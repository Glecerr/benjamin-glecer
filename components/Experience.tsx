import { ArrowUpRight, GraduationCap } from "lucide-react";

const formation = [
  {
    period: "2026 — Actualidad",
    title: "Ingeniería en Sistemas",
    place: "Universidad Tecnológica Nacional",
    description:
      "Formación universitaria orientada al desarrollo de software, programación, sistemas y resolución de problemas tecnológicos.",
  },
  {
    period: "2025",
    title: "Educación Secundaria",
    place: "Buenos Aires, Argentina",
    description:
      "Finalización de estudios secundarios y comienzo de una nueva etapa enfocada en tecnología y desarrollo de software.",
  },
];

export default function Experience() {
  return (
    <section
      id="formacion"
      className="scroll-mt-24 border-t border-white/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-lime-400">
              03 · Formación
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Aprender,
              <br />
              <span className="text-zinc-500">construir y mejorar.</span>
            </h2>

            <p className="mt-6 max-w-sm leading-relaxed text-zinc-600">
              Mi formación combina estudios universitarios con aprendizaje
              práctico a través de proyectos propios.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {formation.map((item) => (
              <article
                key={item.title}
                className="group py-9 first:pt-8 last:pb-8"
              >
                <div className="grid gap-6 md:grid-cols-[140px_1fr]">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    {item.period}
                  </span>

                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition group-hover:border-lime-400/30">
                          <GraduationCap
                            size={18}
                            className="text-zinc-600 transition group-hover:text-lime-400"
                          />
                        </div>

                        <div>
                          <h3 className="text-2xl font-medium tracking-[-0.03em]">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-zinc-500">
                            {item.place}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-400"
                      />
                    </div>

                    <p className="mt-6 max-w-2xl leading-relaxed text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}