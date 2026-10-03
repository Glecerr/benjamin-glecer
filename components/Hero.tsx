"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/[0.045] blur-[120px]" />

        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-violet-500/[0.035] blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="hero-content max-w-5xl">

          <div className="mb-8 flex items-center gap-3">
            <span className="pulse-dot h-2 w-2 rounded-full bg-lime-400" />

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Disponible para oportunidades
            </p>
          </div>

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-600">
            Buenos Aires · Argentina
          </p>

          <h1 className="text-[clamp(4rem,11vw,9rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
            Benjamín
            <br />
            <span className="text-zinc-500">Glecer.</span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

            <p className="max-w-2xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
              Full Stack Developer enfocado en crear productos digitales,
              aplicaciones web y experiencias modernas con tecnología actual.
            </p>

            <div className="hidden text-right md:block">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Focus
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                <span className="text-lime-400">Web</span>
                {" · "}
                Software
                {" · "}
                IA
              </p>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#proyectos"
              className="group flex items-center gap-3 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.15)]"
            >
              Ver proyectos

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contacto"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-7 py-3.5 text-sm text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-lime-400/30 hover:bg-lime-400/[0.05] hover:text-white"
            >
              Contactarme

              <ArrowUpRight
                size={16}
                className="text-zinc-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime-400"
              />
            </a>

          </div>

        </div>

        <a
          href="#proyectos"
          className="absolute bottom-8 left-6 flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-600 transition hover:text-lime-400"
        >
          <ArrowDown size={15} />
          Explorar
        </a>

      </div>
    </section>
  );
}