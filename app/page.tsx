"use client";

import { motion } from "framer-motion";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MatrixBackground from "@/components/MatrixBackground";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function SectionReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.97,
        filter: "blur(16px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      <MatrixBackground />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          <SectionReveal>
            <Projects />
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <About />
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <Skills />
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <Experience />
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <Contact />
          </SectionReveal>
        </main>

        <Footer />
      </div>
    </div>
  );
}