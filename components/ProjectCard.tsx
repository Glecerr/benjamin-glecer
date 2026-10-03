"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const projectUrl = "/proyectos/" + project.slug;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition-colors duration-300 hover:border-lime-400/20"
    >
      <Link href={projectUrl} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.08),transparent_60%)]" />

          <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
            <Image
              src={project.image}
              alt={"Logo de " + project.title}
              width={1200}
              height={700}
              quality={100}
              className="h-auto max-h-full w-auto max-w-[90%] object-contain transition duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

          <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </div>

          <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-md">
            {project.category}
          </div>
        </div>
      </Link>

      <div className="p-7 md:p-8">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              {project.category}
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <span className="text-xs text-zinc-700">
              {project.year}
            </span>
          </div>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={"Abrir " + project.title + " online"}
              onClick={(event) => event.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-zinc-600 transition hover:text-lime-400"
            >
              Live
              <ExternalLink size={13} />
            </a>
          )}
        </div>

        <Link href={projectUrl}>
          <h3 className="text-2xl font-medium tracking-[-0.03em] transition group-hover:text-lime-300 md:text-3xl">
            {project.title}
          </h3>
        </Link>

        <p className="mt-3 max-w-2xl leading-relaxed text-zinc-500">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500 transition hover:border-lime-400/20 hover:text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <Link
          href={projectUrl}
          className="group/link mt-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-lime-400"
        >
          Ver caso completo

          <ArrowUpRight
            size={15}
            className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}