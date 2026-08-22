"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const POINTS = [
  "Sistemas dimensionados para viviendas de estrato 5 y 6.",
  "Diseño discreto que se integra a la arquitectura de tu hogar.",
  "Ideal si tu factura supera los $600.000 COP mensuales.",
  "Instalación certificada con garantía extendida.",
];

export default function HomeSolutions() {
  return (
    <section id="hogares" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/logo.png"
            alt="Logo Solecer"
            className="w-full h-auto max-h-[420px] object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs text-solar-dim eyebrow mb-4">
            SOLUCIONES PARA HOGARES
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy tracking-tight">
            Tu casa también puede generar su propia energía.
          </h2>
          <p className="mt-4 text-slate-text leading-relaxed">
            Diseñamos sistemas solares residenciales que se ajustan a tu
            consumo real, tu techo y tu presupuesto, para que dejes de ver tu
            factura de energía como un gasto fijo.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-navy/5 grid place-items-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-navy" strokeWidth={2.5} />
                </span>
                <span className="text-sm text-navy/80 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-navy px-7 py-3.5 font-semibold text-white hover:bg-navy-light transition-colors"
          >
            Cotizar mi hogar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
