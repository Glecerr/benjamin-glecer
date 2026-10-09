"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({
  project,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] transition duration-500 group-hover:border-blue-400/20 group-hover:bg-white/[0.035]">
        <Link
          href={`/proyectos/${project.slug}`}
          className="block"
        >
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-zinc-950 px-8 py-12 md:min-h-[440px] md:px-16 md:py-16">
            <Image
              src={project.image}
              alt={`Logo de ${project.title}`}
              width={project.imageWidth}
              height={project.imageHeight}
              className="h-auto max-h-[300px] w-full max-w-[1000px] object-contain transition duration-700 ease-out group-hover:scale-[1.025] md:max-h-[390px]"
              sizes="(max-width: 768px) calc(100vw - 64px), 1000px"
              priority={index === 0}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <div className="pointer-events-none absolute inset-0 bg-blue-500/[0.03] opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 md:bottom-7 md:left-7 md:right-7">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-300">
                  {project.category}
                </p>

                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  {project.title}
                </h3>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500">
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </div>
        </Link>

        <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:p-8">
          <div>
            <p className="max-w-3xl text-sm leading-7 text-zinc-500 md:text-base">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-start md:justify-end">
            <Link
              href={`/proyectos/${project.slug}`}
              className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-400 transition hover:border-blue-400/30 hover:bg-blue-400/[0.05] hover:text-white"
            >
              Ver proyecto

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}