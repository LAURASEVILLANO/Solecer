# Cómo agregar tus propias fotos

Este proyecto usa ilustraciones dibujadas en SVG (paneles, viviendas, arreglos
solares) en lugar de fotos de bancos de imágenes, para evitar problemas de
licencias. Cuando tengas fotos reales de tus instalaciones, sigue estos pasos:

## 1. Agrega el archivo de imagen

Copia tu foto (formato .jpg, .png o .webp) dentro de esta carpeta `public/images/`.
Por ejemplo: `public/images/hotel-altamira.jpg`.

## 2. Úsala en un componente

Dentro del archivo del componente que quieras editar (por ejemplo
`components/HomeSolutions.tsx`), importa `Image` de Next.js y reemplaza el
bloque `<svg>...</svg>` por:

```tsx
import Image from "next/image";

<Image
  src="/images/hotel-altamira.jpg"
  alt="Instalación solar en Hotel Altamira"
  width={480}
  height={320}
  className="rounded-xl2 w-full h-auto"
/>
```

La ruta empieza en `/images/...` (sin `public`), porque Next.js sirve todo lo
que está en `public/` directamente desde la raíz del sitio.

## 3. Si prefieres usar fotos alojadas externamente (ej. Unsplash)

Puedes usar una URL externa directamente:

```tsx
<Image
  src="https://images.unsplash.com/photo-xxxxxxx"
  alt="Paneles solares"
  width={480}
  height={320}
/>
```

Esto ya funciona porque `images.unsplash.com` está permitido en
`next.config.mjs`. Si usas otro sitio, agrega su dominio ahí en
`images.remotePatterns`.
