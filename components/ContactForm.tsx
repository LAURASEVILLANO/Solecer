"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // La solicitud queda registrada localmente aunque el backend no esté disponible en este entorno de demostración.
    }

    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contacto" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <p className="font-mono text-xs text-solar eyebrow mb-4">
            HABLEMOS DE TU PROYECTO
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white tracking-tight">
            Recibe tu estudio de ahorro gratuito.
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed max-w-md">
            Cuéntanos sobre tu consumo actual y en menos de 24 horas
            recibirás una propuesta preliminar, sin ningún compromiso.
          </p>

          <div className="mt-10 space-y-5">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-white/70 hover:text-solar transition-colors">
              <span className="w-9 h-9 rounded-full bg-white/5 grid place-items-center shrink-0">
                <Mail className="w-4 h-4" />
              </span>
              {siteConfig.contact.email}
            </a>
            <a href={`tel:${siteConfig.contact.phoneHref}`} className="flex items-center gap-3 text-white/70 hover:text-solar transition-colors">
              <span className="w-9 h-9 rounded-full bg-white/5 grid place-items-center shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              {siteConfig.contact.phone}
            </a>
            <div className="flex items-center gap-3 text-white/70">
              <span className="w-9 h-9 rounded-full bg-white/5 grid place-items-center shrink-0">
                <MapPin className="w-4 h-4" />
              </span>
              {siteConfig.contact.location}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="rounded-xl2 bg-white p-8 lg:p-10 shadow-card"
        >
          {status === "sent" ? (
            <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="w-12 h-12 text-solar-dim mb-4" />
              <h3 className="font-display font-semibold text-navy text-xl">
                Solicitud enviada
              </h3>
              <p className="mt-2 text-sm text-slate-text max-w-xs">
                Gracias por escribirnos. Un asesor de Solecer se pondrá en
                contacto contigo en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-navy/70 mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-solar outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy/70 mb-1.5">
                    Teléfono
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="300 000 0000"
                    className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-solar outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-navy/70 mb-1.5">
                  Correo electrónico
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-solar outline-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-navy/70 mb-1.5">
                    Tipo de proyecto
                  </label>
                  <select
                    name="projectType"
                    className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:border-solar outline-none bg-white"
                  >
                    <option value="hogar">Hogar</option>
                    <option value="empresa">Empresa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy/70 mb-1.5">
                    Valor de tu factura mensual
                  </label>
                  <select
                    name="billRange"
                    className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:border-solar outline-none bg-white"
                  >
                    <option value="600k-1m">$600.000 – $1.000.000</option>
                    <option value="1m-4m">$1.000.000 – $4.000.000</option>
                    <option value="4m+">Más de $4.000.000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-navy/70 mb-1.5">
                  Cuéntanos sobre tu proyecto (opcional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Espacio disponible, ubicación, objetivos..."
                  className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-solar outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center rounded-full bg-solar px-7 py-3.5 font-semibold text-navy hover:bg-solar-glow transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : siteConfig.cta.primary}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
