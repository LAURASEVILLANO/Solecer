"use client";

import { motion } from "framer-motion";

// Genera filas de paneles en perspectiva aérea, estilo "granja solar".
function PanelRows() {
  const rows = 5;
  const cols = 9;
  return (
    <>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const rowOffset = r * 16;
          const x = 20 + c * 58 + (r % 2) * 10;
          const y = 30 + rowOffset;
          const scale = 1 - r * 0.06;
          return (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width={44 * scale}
              height={20 * scale}
              rx={2}
              fill="#0B1F3A"
              stroke="#F5B400"
              strokeWidth="1"
              strokeOpacity={0.5}
              opacity={0.85 - r * 0.08}
            />
          );
        })
      )}
    </>
  );
}

const STATS = [
  { value: "+320", label: "proyectos instalados" },
  { value: "18", label: "departamentos con cobertura" },
  { value: "100%", label: "sistemas certificados" },
];

export default function SolarArrayShowcase() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl2 bg-navy px-8 py-14 lg:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-lines bg-grid opacity-10" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs text-solar eyebrow mb-4">
                CADA PROYECTO, A ESCALA REAL
              </p>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                Desde un techo residencial hasta una cubierta industrial completa.
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed max-w-md">
                Diseñamos cada arreglo fotovoltaico según el espacio real
                disponible, con la orientación e inclinación que maximizan la
                generación durante todo el año.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-mono text-2xl sm:text-3xl text-solar tabular-nums">
                      {s.value}
                    </p>
                    <p className="text-xs text-white/50 mt-1 leading-snug">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <svg viewBox="0 0 560 260" className="w-full h-auto">
                <PanelRows />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
