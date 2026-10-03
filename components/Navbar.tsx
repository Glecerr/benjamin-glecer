"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Skills", href: "#skills" },
  { name: "Formación", href: "#formacion" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        "fixed left-0 top-0 z-50 w-full transition-all duration-500 " +
        (scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-2xl"
          : "bg-transparent")
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="text-lg font-semibold tracking-tight"
        >
          BG<span className="text-lime-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-500 transition hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contacto"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-lime-400/30 hover:bg-lime-400/[0.05] hover:text-white"
          >
            Hablemos
            <span className="text-zinc-600 transition group-hover:text-lime-400">
              ↗
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="rounded-full border border-white/10 bg-white/[0.02] p-2 text-zinc-300 transition hover:border-lime-400/30 hover:text-lime-400 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-7 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 text-base text-zinc-400 transition hover:text-lime-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-lime-400 px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-lime-300"
            >
              Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}