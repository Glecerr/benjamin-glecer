"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative scroll-mt-24 overflow-hidden py-28 md:py-40"
    >
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-blue-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.5fr] md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -45, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400">
            02 · Sobre mí
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Me gusta hacer
            <br />
            <span className="text-zinc-500">
              que las ideas funcionen.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="space-y-8"
        >
          <p className="text-xl leading-relaxed text-zinc-200 md:text-2xl">
            Soy Benjamín Glecer y estudio Licenciatura en Ciencia de Datos.
            Desarrollo proyectos web de principio a fin.
          </p>

          <p className="max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
            Cuando arranco un proyecto me gusta meterme de lleno. No solamente
            pensar cómo se va a hacer, sino también cómo va a funcionar, qué
            necesita por detrás y cómo hacer que sea cómodo para quien lo usa.
          </p>

          <p className="max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
            Hasta ahora fui trabajando en proyectos bastante distintos entre
            sí: páginas para emprendimientos, sitios para negocios y
            aplicaciones con usuarios, contenido y bases de datos. Cada uno me
            fue llevando a aprender algo nuevo.
          </p>

          <p className="max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
            Me interesa seguir creciendo en desarrollo de software, datos e
            inteligencia artificial y, sobre todo, seguir haciendo proyectos
            que me obliguen a aprender y resolver problemas nuevos.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.035]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                Lo que hago
              </p>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-500">
                <li>• Desarrollo Full Stack</li>
                <li>• Interfaces web</li>
                <li>• Backend y bases de datos</li>
                <li>• Integración de servicios</li>
                <li>• Puesta en producción</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.035]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                En qué estoy metido
              </p>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-500">
                <li>• Licenciatura en Ciencia de Datos</li>
                <li>• Inteligencia artificial</li>
                <li>• Datos</li>
                <li>• Arquitectura de software</li>
                <li>• Nuevas tecnologías</li>
              </ul>
            </motion.div>
          </div>

          <motion.a
            href="#contacto"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 transition duration-300 hover:border-blue-400/30 hover:bg-blue-400/[0.05] hover:text-white"
          >
            Hablemos

            <ArrowUpRight
              size={16}
              className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}