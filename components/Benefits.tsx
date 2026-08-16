"use client";

import { motion } from "framer-motion";
import { TrendingDown, ShieldCheck, Rocket, Leaf } from "lucide-react";

const BENEFITS = [
  {
    icon: TrendingDown,
    title: "Ahorro desde el primer mes",
    desc: "Tu sistema empieza a generar energía apenas se enciende. El ahorro no es una promesa a futuro: aparece en tu próxima factura.",
  },
  {
    icon: ShieldCheck,
    title: "Protección frente a las alzas tarifarias",
    desc: "Cada incremento en la tarifa eléctrica te afecta menos, porque una parte creciente de tu consumo la produces tú mismo.",
  },
  {
    icon: Rocket,
    title: "Retorno de inversión acelerado",
    desc: "Diseñamos cada sistema para maximizar tu rentabilidad, apoyándonos en incentivos tributarios vigentes en Colombia.",
  },
  {
    icon: Leaf,
    title: "Energía limpia y sostenible",
    desc: "Reduces tu huella de carbono mientras fortaleces la reputación ambiental de tu hogar o tu empresa.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-solar-dim eyebrow mb-4">
            POR QUÉ SOLECER
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy tracking-tight">
            Más que un cliente, un generador de energía.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-xl2 border border-navy/10 p-7 hover:border-solar/40 hover:shadow-card transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-navy/5 grid place-items-center mb-6">
                <b.icon className="w-5 h-5 text-navy" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-semibold text-navy text-lg leading-snug">
                {b.title}
              </h3>
              <p className="mt-3 text-sm text-slate-text leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
