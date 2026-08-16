"use client";

import { motion } from "framer-motion";
import { Percent, Receipt, TrendingUp } from "lucide-react";

const INCENTIVES = [
  {
    icon: Percent,
    title: "Deducción en renta",
    desc: "Deduce hasta el 50% de la inversión en tu declaración de renta durante los 15 años siguientes al proyecto.",
  },
  {
    icon: Receipt,
    title: "Exclusión de IVA",
    desc: "Los equipos, elementos y maquinaria para producción de energía solar están excluidos de IVA.",
  },
  {
    icon: TrendingUp,
    title: "Depreciación acelerada",
    desc: "Deprecia los activos de tu sistema hasta en un 20% anual, mejorando el flujo de caja de tu empresa.",
  },
];

export default function TaxIncentives() {
  return (
    <section id="incentivos" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <p className="font-mono text-xs text-solar-dim eyebrow mb-4">
              INCENTIVOS TRIBUTARIOS
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy tracking-tight">
              El Estado colombiano también premia tu decisión.
            </h2>
            <p className="mt-4 text-slate-text leading-relaxed">
              La Ley 1715 de 2014 creó beneficios tributarios específicos para
              proyectos de energía solar. Nos encargamos de toda la gestión
              documental para que accedas a ellos sin complicaciones.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {INCENTIVES.map((inc, i) => (
              <motion.div
                key={inc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl2 bg-white border border-navy/10 p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/5 grid place-items-center mb-5">
                  <inc.icon className="w-5 h-5 text-navy" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-semibold text-navy">
                  {inc.title}
                </h3>
                <p className="mt-2 text-sm text-slate-text leading-relaxed">
                  {inc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
