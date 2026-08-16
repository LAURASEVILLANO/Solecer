import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solecer Inversiones | Energía solar para hogares y empresas en Colombia",
  description:
    "Convierte tu factura de energía en una inversión rentable. Diseñamos, instalamos y certificamos sistemas solares fotovoltaicos a la medida para hogares y empresas en Colombia.",
  keywords: [
    "energía solar Colombia",
    "paneles solares",
    "sistemas solares fotovoltaicos",
    "ahorro energético empresas",
    "SSFV",
    "incentivos tributarios energía solar",
  ],
  openGraph: {
    title: "Solecer Inversiones | Convierte tu factura en inversión",
    description:
      "Soluciones solares a la medida para hogares y empresas que buscan ahorrar, producir su propia energía y aumentar su rentabilidad.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
