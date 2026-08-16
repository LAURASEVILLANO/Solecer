"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Analizamos tu consumo",
    desc: "Revisamos tus facturas, tu ubicación y tus hábitos de consumo para entender exactamente cuánta energía necesitas producir.",
  },
  {
    n: "02",
    title: "Diseñamos tu solución",
    desc: "Creamos un sistema a la medida según tu espacio disponible, tu presupuesto y tus objetivos financieros.",
  },
  {
    n: "03",
    title: "Instalamos y certificamos",
    desc: "Nuestro equipo técnico ejecuta el proyecto en tiempo récord y gestiona toda la certificación ante los entes correspondientes.",
  },
  {
    n: "04",
    title: "Comienzas a ahorrar",
    desc: "Tu sistema entra en operación y tu factura empieza a reflejar el cambio desde el primer ciclo de facturación.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-solar-dim eyebrow mb-4">
            EL PROCESO
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy tracking-tight">
            De la factura a la autonomía, en cuatro pasos.
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-navy/10" />
          <motion.div
            className="hidden lg:block absolute top-6 left-0 h-px bg-solar origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="grid lg:grid-cols-4 gap-10 lg:gap-8">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="relative w-12 h-12 rounded-full bg-navy grid place-items-center mb-6">
                  <span className="font-mono text-xs text-solar">{s.n}</span>
                </div>
                <h3 className="font-display font-semibold text-navy text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-text leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
