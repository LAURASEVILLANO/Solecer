"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "¿Cuánto tiempo toma instalar un sistema solar?",
    a: "Depende del tamaño del proyecto, pero la mayoría de instalaciones residenciales y comerciales se completan entre 2 y 6 semanas, desde el diseño hasta la puesta en marcha.",
  },
  {
    q: "¿Qué pasa en días nublados o de noche?",
    a: "Tu sistema queda interconectado a la red eléctrica. Cuando tu producción no cubre el consumo, la red complementa automáticamente, sin que notes la diferencia.",
  },
  {
    q: "¿Necesito comprar baterías?",
    a: "No es obligatorio. La mayoría de nuestros proyectos operan interconectados a la red, lo que reduce el costo de inversión. Evaluamos baterías solo si tu objetivo es independencia total.",
  },
  {
    q: "¿Cómo funciona la certificación del sistema?",
    a: "Nos encargamos de toda la gestión ante el operador de red y las entidades correspondientes, para que tu sistema quede certificado y habilitado para facturación neta.",
  },
  {
    q: "¿Cómo accedo a los incentivos tributarios?",
    a: "Preparamos toda la documentación técnica que exige la Ley 1715 de 2014 y te acompañamos durante el proceso de solicitud ante la UPME y la DIAN.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="font-mono text-xs text-solar-dim eyebrow mb-4 text-center">
          PREGUNTAS FRECUENTES
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy tracking-tight text-center">
          Resolvemos tus dudas antes de empezar.
        </h2>

        <div className="mt-14 divide-y divide-navy/10 border-y border-navy/10">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display font-medium text-navy">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-white border border-navy/10 grid place-items-center"
                  >
                    <Plus className="w-4 h-4 text-navy" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-slate-text leading-relaxed pr-12">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
