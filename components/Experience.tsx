"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2026 — Actualidad",
    title: "Licenciatura en Ciencia de Datos",
    place: "Universidad de Buenos Aires · CBC",
    description:
      "Formación orientada al análisis de datos, programación, matemática, estadística e inteligencia artificial.",
  },
  {
    year: "2020 — 2025",
    title: "Bachillerato Físico-Matemático",
    place: "Escuela Normal Superior N.º 4 “Estanislao Severo Zeballos”",
    description:
      "Finalización de la educación secundaria y comienzo de una etapa enfocada en la tecnología y el desarrollo en la Universidad de Buenos Aires.",
  },
];

const courses = [
  "Desarrollo Web Full Stack · Aprende Programando",
  "Desarrollo Web · Nivel 1",
  "Desarrollo Web · Nivel 2",
  "Desarrollo Web · Nivel 3",
  "Desarrollo Web · Nivel 4",
  "Inteligencia Artificial · Aprende Programando",
  "Python",
  "Modelado 3D con Blender",
  "Desarrollo de videojuegos con Unity",
  "Soporte e instalación de sistemas · CFP",
  "Seguridad informática",
  "Redes",
  "Hardware",
];

export default function Experience() {
  return (
    <section
      id="formacion"
      className="scroll-mt-24 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400">
            04 · Formación
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Mi aprendizaje,
            <br />
            <span className="text-zinc-500">
              siempre en movimiento.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
            Mi formación combina la carrera que estoy cursando con cursos y
            proyectos que fui haciendo por mi cuenta para seguir desarrollando
            habilidades prácticas.
          </p>
        </div>

        <div className="mt-16 grid gap-4">
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.025] md:grid-cols-[180px_1fr] md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                {item.year}
              </p>

              <div>
                <h3 className="text-xl font-medium text-zinc-200">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {item.place}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-14"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            Cursos y formación complementaria
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {courses.map((course) => (
              <span
                key={course}
                className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-500 transition-colors hover:border-blue-400/20 hover:text-zinc-300"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}