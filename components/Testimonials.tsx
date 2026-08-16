"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "En cuatro meses ya veíamos la diferencia en la factura del hotel. El equipo de Solecer se encargó de todo, desde el diseño hasta la certificación.",
    name: "Marcela Uribe",
    role: "Gerente General, Hotel Altamira",
  },
  {
    quote:
      "Necesitábamos un sistema que soportara los picos de consumo de nuestros equipos de soldadura. Lo dimensionaron con precisión y hoy pagamos mucho menos.",
    name: "Jorge Restrepo",
    role: "Director de Operaciones, Estructuras JR",
  },
  {
    quote:
      "Nos acompañaron en todo el trámite de los incentivos tributarios. La inversión se pagó más rápido de lo que esperábamos.",
    name: "Laura Gómez",
    role: "Propietaria, Vivienda estrato 6, Envigado",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-solar-dim eyebrow mb-4">
            CASOS DE ÉXITO
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy tracking-tight">
            Clientes que ya son generadores de energía.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl2 border border-navy/10 p-8 flex flex-col justify-between"
            >
              <blockquote className="text-navy/85 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-navy grid place-items-center font-mono text-xs text-solar shrink-0">
                  {t.name
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy">
                    {t.name}
                  </span>
                  <span className="block text-xs text-slate-text">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
