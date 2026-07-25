# Solecer Inversiones — Sitio web

Landing page premium para Solecer Inversiones, construida con Next.js 14 (App Router), React, Tailwind CSS y Framer Motion.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** con tokens de marca personalizados (`tailwind.config.ts`)
- **Framer Motion** para las animaciones de entrada, scroll y el medidor de ahorro animado
- **lucide-react** para iconografía
- Ilustraciones y el medidor de ahorro construidos en SVG nativo (sin dependencias de imágenes externas)

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

> Nota: `next/font/google` descarga las tipografías (Space Grotesk, Inter, IBM Plex Mono) en tiempo de build/dev, así que se necesita acceso a internet la primera vez.

## Desplegar en Vercel

1. Sube este proyecto a un repositorio de GitHub/GitLab/Bitbucket.
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta Next.js automáticamente — no se necesita configuración adicional.
4. Deploy.

También puedes desplegar directo desde tu máquina con la CLI de Vercel:

```bash
npm install -g vercel
vercel
```

## Estructura del proyecto

```
app/
  layout.tsx        Fuentes, metadata y SEO global
  page.tsx           Ensambla todas las secciones
  globals.css         Estilos base, foco de accesibilidad, reduced-motion
  api/contact/route.ts  Endpoint del formulario de contacto (placeholder)
components/
  Header.tsx          Navegación fija + menú móvil
  Hero.tsx             Sección principal con titular y CTAs
  SunGauge.tsx         Medidor de ahorro animado (elemento de firma visual)
  Benefits.tsx         4 beneficios principales
  HowItWorks.tsx       Proceso de 4 pasos
  BusinessSolutions.tsx  Casos de uso B2B (hoteles, restaurantes, industria...)
  HomeSolutions.tsx    Sección B2C con ilustración SVG de vivienda solar
  TaxIncentives.tsx    Incentivos tributarios (Ley 1715 de 2014)
  Testimonials.tsx     Testimonios de clientes
  FAQ.tsx              Acordeón de preguntas frecuentes
  ContactForm.tsx      Formulario de cotización / agendamiento
  Footer.tsx           Pie de página
```

## Conectar el formulario de contacto a un backend real

`app/api/contact/route.ts` actualmente solo registra la solicitud en la consola del servidor. Antes de producción, conéctalo a:

- Un servicio de correo transaccional (Resend, SendGrid, Postmark), y/o
- Tu CRM (HubSpot, Pipedrive) vía su API, y/o
- Una base de datos (Supabase, Postgres) para guardar los leads.

## Personalización rápida

- **Colores de marca**: `tailwind.config.ts` → `theme.extend.colors`
- **Datos de contacto**: `components/ContactForm.tsx` y `components/Footer.tsx`
- **Copy e imágenes**: cada sección vive en su propio archivo dentro de `components/`
