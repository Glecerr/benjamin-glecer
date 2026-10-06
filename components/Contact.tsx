"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "benjaminglecer@gmail.com",
    href: "mailto:benjaminglecer@gmail.com",
    type: "gmail",
  },
  {
    label: "Teléfono",
    value: "11 5659-7765",
    href: "tel:+541156597765",
    type: "phone",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/benjaminglecer",
    href: "https://linkedin.com/in/benjaminglecer",
    type: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/Glecerr",
    href: "https://github.com/Glecerr",
    type: "github",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "gmail") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M2.5 6.7v10.6c0 .9.7 1.7 1.7 1.7h2.5V9.2L12 13l5.3-3.8V19h2.5c.9 0 1.7-.7 1.7-1.7V6.7L12 13 2.5 6.7Z"
        />
        <path
          fill="currentColor"
          d="M2.5 6.7 12 13l9.5-6.3c-.3-1-1.2-1.7-2.2-1.7H4.7c-1 0-1.9.7-2.2 1.7Z"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.7H3.3V9Zm6.1 0h3.6v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8v6.2h-3.8V15.2c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.6H9.4V9Z"
        />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.12c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.74 2.06 2.88 1.44.1-.73.39-1.23.71-1.51-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.75 10.75 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"
        />
      </svg>
    );
  }

  return <Phone size={18} />;
}

export default function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] md:items-end">
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400">
              05 · Contacto
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
              ¿Tenés una idea?
              <br />
              <span className="text-zinc-500">Hablemos.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
              Estoy abierto a oportunidades, proyectos y nuevas experiencias
              donde pueda seguir aprendiendo y ganar experiencia, aportar desde
              el desarrollo y formar parte de nuevos desafíos tecnológicos.
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Ubicación
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                CABA · Buenos Aires · Argentina
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(10px)",
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
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="space-y-3"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("mailto:") ||
                  link.href.startsWith("tel:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.href.startsWith("mailto:") ||
                  link.href.startsWith("tel:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-400/[0.04]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-500 transition duration-300 group-hover:border-blue-400/20 group-hover:text-blue-400">
                    <ContactIcon type={link.type} />
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
                  className="text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-20 flex flex-wrap gap-4"
        >
          <a
            href="mailto:benjaminglecer@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
          >
            Contactarme

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#proyectos"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-7 py-3.5 text-sm text-zinc-400 transition hover:border-blue-400/30 hover:bg-blue-400/[0.04] hover:text-white"
          >
            Ver proyectos
          </a>
        </motion.div>
      </div>
    </section>
  );
}