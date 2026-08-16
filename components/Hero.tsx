"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import SunGauge from "./SunGauge";
import { siteConfig } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy pt-40 pb-28 lg:pt-48 lg:pb-36"
    >
      {/* circuit / grid texture */}
      <div className="absolute inset-0 bg-grid-lines bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />
      <div className="absolute -top-40 right-0 w-[36rem] h-[36rem] bg-solar/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="font-mono text-xs text-solar eyebrow mb-6"
          >
            SISTEMAS SOLARES FOTOVOLTAICOS · COLOMBIA
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold text-white leading-[1.08] tracking-tight"
          >
            Convierte tu factura de energía en una{" "}
            <span className="text-solar">inversión rentable</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed"
          >
            Instalamos soluciones solares para hogares y empresas que buscan
            ahorrar, producir su propia energía y aumentar su rentabilidad.
            Proyectos completos, certificados y ejecutados en tiempo récord.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-solar px-7 py-3.5 font-semibold text-navy hover:bg-solar-glow transition-colors"
            >
              {siteConfig.cta.primary}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white hover:border-solar/60 hover:text-solar transition-colors"
            >
              <Calculator className="w-4 h-4" />
              {siteConfig.cta.secondary}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-white/50 text-sm"
          >
            <span>Certificación garantizada</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" />
            <span>Gestión de incentivos tributarios</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" />
            <span>Acompañamiento de extremo a extremo</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <SunGauge />
        </motion.div>
      </div>
    </section>
  );
}
