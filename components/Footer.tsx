import { Instagram, Facebook, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const COLUMNS = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre Solecer", href: "#inicio" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Preguntas frecuentes", href: "#preguntas" },
    ],
  },
  {
    title: "Soluciones",
    links: [
      { label: "Para hogares", href: "#hogares" },
      { label: "Para empresas", href: "#empresas" },
      { label: "Incentivos tributarios", href: "#incentivos" },
    ],
  },
  {
    title: "Contacto",
    links: [
      {
        label: siteConfig.contact.email,
        href: `mailto:${siteConfig.contact.email}`,
      },
      {
        label: siteConfig.contact.phone,
        href: `tel:${siteConfig.contact.phoneHref}`,
      },
      { label: siteConfig.cta.primary, href: "#contacto" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <a href="#inicio" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Logo Solecer"
                className="h-10 w-auto object-contain"
              />

              <span className="font-display font-semibold text-white text-lg">
                {siteConfig.companyName}{" "}
                <span className="text-solar">
                  {siteConfig.companyNameHighlight}
                </span>
              </span>
            </a>

            <p className="mt-4 text-sm text-white/50 max-w-xs leading-relaxed">
              Transformamos tu factura de energía en ahorro, estabilidad y
              autonomía, con sistemas solares diseñados a la medida en toda
              Colombia.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, href: siteConfig.social.instagram },
                { Icon: Facebook, href: siteConfig.social.facebook },
                { Icon: Linkedin, href: siteConfig.social.linkedin },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label="Red social de Solecer Inversiones"
                  className="w-9 h-9 rounded-full bg-white/5 grid place-items-center text-white/60 hover:text-solar hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs text-white/40 eyebrow mb-5">
                {col.title.toUpperCase()}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/70 hover:text-solar transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.copyrightHolder}. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
