"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const goToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 90;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.10] blur-[130px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="pointer-events-none absolute right-[5%] top-[45%] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.94,
            filter: "blur(18px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-7 text-xs font-medium uppercase tracking-[0.35em] text-blue-400"
          >
            Desarrollo web · Full Stack
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(4rem,11vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.075em]"
          >
            Benjamín
            <br />
            <span className="text-zinc-500">Glecer.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-xl font-medium text-zinc-300 md:text-2xl">
                Desarrollador Full Stack · Software, datos e IA
              </p>

              <p className="mt-4 max-w-xl text-base leading-8 text-zinc-500 md:text-lg">
                Diseño y desarrollo aplicaciones web de principio a fin,
                combinando interfaces, lógica de negocio e integración de
                servicios. Me interesa transformar ideas y necesidades reales
                en productos digitales útiles, funcionales y bien diseñados.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <motion.button
                type="button"
                onClick={() => goToSection("proyectos")}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]"
              >
                Ver proyectos
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => goToSection("contacto")}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm text-zinc-300 transition hover:border-blue-400/30 hover:bg-blue-400/[0.05] hover:text-white"
              >
                Hablemos
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => goToSection("proyectos")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-600 transition hover:text-blue-400"
        >
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={15} />
          </motion.span>
          Proyectos
        </motion.button>
      </div>
    </section>
  );
}