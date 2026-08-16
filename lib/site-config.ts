// ============================================================
// DATOS DE LA EMPRESA — edita aquí, no necesitas tocar nada más
// ============================================================
// Este es el único archivo que necesitas modificar para actualizar
// el teléfono, correo, dirección, redes sociales o el texto de los
// botones principales del sitio. Todos los componentes leen de aquí.

export const siteConfig = {
  // Nombre de la empresa (aparece en el logo/header y footer)
  companyName: "Solecer",
  companyNameHighlight: "Inversiones", // la parte que se pinta de amarillo

  // Contacto — se usa en el footer y la sección de contacto
  contact: {
    email: "contacto@solecerinversiones.com",
    phone: "+57 300 000 0000",
    phoneHref: "+573000000000", // mismo número, sin espacios, para el link "tel:"
    location: "Medellín, Colombia — cobertura nacional",
  },

  // Redes sociales — pon aquí tus links reales (o deja "#" si aún no tienes)
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },

  // Textos de los botones de llamada a la acción (CTA)
  cta: {
    primary: "Solicitar estudio gratuito",
    secondary: "Calcular mi ahorro",
  },

  // Copyright del footer
  copyrightHolder: "Solecer Inversiones",
} as const;
