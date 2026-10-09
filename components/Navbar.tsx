
"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Inicio", id: "inicio" },
  { name: "Proyectos", id: "proyectos" },
  { name: "Sobre mí", id: "sobre-mi" },
  { name: "Skills", id: "skills" },
  { name: "Formación", id: "formacion" },
  { name: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 90;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });

    setOpen(false);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#05070d]/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <button
          type="button"
          onClick={() => scrollToSection("inicio")}
          aria-label="Benjamín Glecer, ir al inicio"
          className="rounded-md text-lg font-semibold tracking-tight outline-none transition focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          BG<span className="text-blue-400">.</span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="rounded-sm text-sm text-zinc-400 outline-none transition hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {link.name}
            </button>
          ))}

          <button
            type="button"
            onClick={() => scrollToSection("contacto")}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-200 outline-none transition hover:border-blue-400/40 hover:bg-blue-400/10 focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Hablemos
            <ArrowUpRight
              size={15}
              className="text-blue-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-zinc-200 outline-none transition hover:border-blue-400/40 hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#05070d]/95 px-6 py-5 backdrop-blur-xl lg:hidden"
        >
          <nav
            aria-label="Navegación móvil"
            className="mx-auto flex max-w-6xl flex-col gap-1"
          >
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="rounded-md border-b border-white/5 py-4 text-left text-base text-zinc-300 outline-none transition hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {link.name}
              </button>
            ))}

            <button
              type="button"
              onClick={() => scrollToSection("contacto")}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white outline-none transition hover:bg-blue-400 focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Hablemos
              <ArrowUpRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
