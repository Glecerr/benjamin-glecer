import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "Escribime directamente",
    href: "mailto:",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Mis proyectos y código",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Perfil profesional",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    value: "También estoy por acá",
    href: "https://www.instagram.com/",
    icon: Instagram,
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-white/10 py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-lime-400">
              04 · Contacto
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
              ¿Tenés una idea?
              <br />
              <span className="text-zinc-500">Hablemos.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
              Estoy abierto a oportunidades, proyectos y nuevas experiencias
              donde pueda seguir aprendiendo y aportar desde el desarrollo.
            </p>
          </div>

          <div className="space-y-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-lime-400/25 hover:bg-lime-400/[0.04]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
                      <Icon
                        size={18}
                        className="text-zinc-500 transition group-hover:text-lime-400"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-zinc-300">
                        {link.label}
                      </p>

                      <p className="mt-1 text-xs text-zinc-600">
                        {link.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-400"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-4">
          <a
            href="#inicio"
            className="group inline-flex items-center gap-3 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-lime-300 hover:shadow-[0_0_35px_rgba(163,230,53,0.15)]"
          >
            Volver arriba

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#proyectos"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-7 py-3.5 text-sm text-zinc-400 transition hover:border-lime-400/30 hover:bg-lime-400/[0.04] hover:text-white"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}