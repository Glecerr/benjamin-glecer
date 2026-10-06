"use client";

import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces web modernas, responsive y orientadas a la experiencia de usuario.",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description: "Lógica de aplicaciones, APIs, autenticación e integración de servicios.",
    icon: Layers3,
    skills: [
      "Node.js",
      "APIs",
      "Supabase",
      "Autenticación",
      "Integración de servicios",
    ],
  },
  {
    title: "Datos",
    description: "Bases de datos, organización y gestión de información.",
    icon: Database,
    skills: [
      "SQL",
      "Bases de datos",
      "Supabase",
      "Modelado de datos",
      "Gestión de información",
    ],
  },
  {
    title: "IA & Python",
    description: "Formación y proyectos orientados a inteligencia artificial y programación.",
    icon: BrainCircuit,
    skills: [
      "Python",
      "Inteligencia artificial",
      "IA generativa",
      "Llama",
    ],
  },
  {
    title: "UI & Motion",
    description: "Interacciones, animaciones y detalles visuales para mejorar la experiencia.",
    icon: Sparkles,
    skills: [
      "Framer Motion",
      "GSAP",
      "Responsive Design",
      "UI",
      "Microinteracciones",
    ],
  },
  {
    title: "Herramientas",
    description: "Herramientas que utilizo para desarrollar, versionar y publicar proyectos.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400">
            03 · Skills
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Desarrollo,
            <br />
            <span className="text-zinc-500">
              datos y tecnología.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
            Tecnologías y herramientas que fui incorporando a través de mi
            formación y de los proyectos que desarrollé.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.03]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-zinc-200">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
                    <Icon
                      size={18}
                      className="text-blue-400"
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}