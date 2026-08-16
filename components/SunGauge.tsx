"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function useCountUp(target: number, active: boolean, decimals = 0, duration = 1.6) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const controls = animate(0, target, {
      duration,
      delay: 0.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [active, target, duration]);
  return value.toFixed(decimals);
}

// Semi-circular arc geometry
const RADIUS = 120;
const CIRCUMFERENCE = Math.PI * RADIUS; // half circle length

export default function SunGauge() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const ahorro = useCountUp(68, inView, 0);
  const roi = useCountUp(3.2, inView, 1);
  const kwh = useCountUp(1140, inView, 0);

  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto select-none">
      {/* ambient glow */}
      <div className="absolute inset-0 blur-3xl bg-solar/20 rounded-full scale-75 -z-10" />

      <div className="relative rounded-xl2 border border-white/10 bg-navy-light/40 backdrop-blur-xl px-8 pt-10 pb-8 shadow-card">
        <p className="font-mono text-[11px] tracking-[0.2em] text-solar/80 eyebrow mb-6">
          SIMULADOR DE AHORRO — TIEMPO REAL
        </p>

        <svg viewBox="0 0 280 160" className="w-full h-auto overflow-visible">
          {/* track (factura tradicional) */}
          <path
            d="M 20 150 A 120 120 0 0 1 260 150"
            fill="none"
            stroke="#8C4632"
            strokeOpacity={0.35}
            strokeWidth={14}
            strokeLinecap="round"
          />
          {/* animated savings arc */}
          <motion.path
            d="M 20 150 A 120 120 0 0 1 260 150"
            fill="none"
            stroke="url(#sunStroke)"
            strokeWidth={14}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={
              inView ? { strokeDashoffset: CIRCUMFERENCE * (1 - 0.68) } : {}
            }
            transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <defs>
            <linearGradient id="sunStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B8860B" />
              <stop offset="100%" stopColor="#FFD873" />
            </linearGradient>
          </defs>
        </svg>

        <div className="-mt-6 text-center">
          <span className="font-mono text-5xl font-medium text-white tabular-nums">
            {ahorro}%
          </span>
          <p className="text-white/60 text-sm mt-1">de ahorro proyectado en tu factura</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
          <div>
            <p className="font-mono text-2xl text-solar tabular-nums">{kwh}</p>
            <p className="text-white/50 text-xs mt-1">kWh generados / mes</p>
          </div>
          <div>
            <p className="font-mono text-2xl text-solar tabular-nums">{roi} años</p>
            <p className="text-white/50 text-xs mt-1">retorno de inversión</p>
          </div>
        </div>
      </div>
    </div>
  );
}
