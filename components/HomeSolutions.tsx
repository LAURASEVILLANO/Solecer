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
          <svg
            viewBox="0 0 480 320"
            className="w-full h-auto"
            role="img"
            aria-label="Ilustración de una vivienda con paneles solares en el techo"
          >
            <rect x="40" y="180" width="400" height="110" rx="4" fill="#F4F5F7" />
            <polygon points="40,180 240,60 440,180" fill="#0B1F3A" />
            <rect x="90" y="210" width="60" height="80" fill="#0B1F3A" opacity="0.08" />
            <rect x="330" y="210" width="60" height="80" fill="#0B1F3A" opacity="0.08" />

            {/* solar panel array on the roof */}
            {[0, 1, 2, 3].map((col) =>
              [0, 1].map((row) => (
                <rect
                  key={`${col}-${row}`}
                  x={130 + col * 46}
                  y={112 + row * 26}
                  width={40}
                  height={22}
                  rx={2}
                  fill="#F5B400"
                  opacity={0.9 - row * 0.12}
                  transform={`skewY(${-8 + row * 2})`}
                />
              ))
            )}
            <line x1="40" y1="180" x2="240" y2="60" stroke="#F5B400" strokeWidth="2" />
            <line x1="440" y1="180" x2="240" y2="60" stroke="#F5B400" strokeWidth="2" />

            {/* sun */}
            <circle cx="410" cy="55" r="22" fill="#F5B400" opacity="0.9" />
            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI) / 4;
              const x1 = 410 + Math.cos(angle) * 32;
              const y1 = 55 + Math.sin(angle) * 32;
              const x2 = 410 + Math.cos(angle) * 42;
              const y2 = 55 + Math.sin(angle) * 42;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#F5B400"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              );
            })}
          </svg>
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
