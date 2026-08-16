"use client";

import { motion } from "framer-motion";
import { Building2, UtensilsCrossed, Factory, Warehouse, Flame } from "lucide-react";
import PanelPattern from "./PanelPattern";

const SECTORS = [
  {
    icon: Building2,
    title: "Hoteles",
    desc: "Climatización, iluminación y zonas comunes operando con energía propia, sin sacrificar la experiencia del huésped.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    desc: "Cocinas y equipos de refrigeración con un costo energético predecible, mes tras mes.",
  },
  {
    icon: Flame,
    title: "Empresas de soldadura",
    desc: "Cargas eléctricas intensivas cubiertas con un sistema dimensionado para picos de consumo reales.",
  },
  {
    icon: Factory,
    title: "Industrias manufactureras",
    desc: "Líneas de producción respaldadas por energía propia, reduciendo el costo por unidad producida.",
  },
  {
    icon: Warehouse,
    title: "Bodegas",
    desc: "Iluminación, refrigeración y sistemas logísticos operando con menor dependencia de la red.",
  },
];

export default function BusinessSolutions() {
  return (
    <section id="empresas" className="bg-navy py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines bg-grid opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
      <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black,transparent)]">
        <PanelPattern id="business-panel-pattern" opacity={0.4} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-solar eyebrow mb-4">
            SOLUCIONES PARA EMPRESAS
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white tracking-tight">
            Diseñado para negocios con facturas que ya duelen.
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Si tu factura de energía supera los $4.000.000 COP mensuales,
            probablemente estás pagando más de lo necesario. Diseñamos tu
            sistema según tu operación real.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-xl2 border border-white/10 bg-white/[0.03] p-7 hover:border-solar/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-solar/10 grid place-items-center mb-6">
                <s.icon className="w-5 h-5 text-solar" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-semibold text-white text-lg">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl2 bg-sun-gradient p-7 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-semibold text-navy text-lg">
                ¿Tu factura supera los $4.000.000 COP?
              </h3>
              <p className="mt-3 text-sm text-navy/80 leading-relaxed">
                Agenda una asesoría y te mostramos el retorno estimado de tu
                proyecto, sin costo.
              </p>
            </div>
            <a
              href="#contacto"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
            >
              Agendar asesoría
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
