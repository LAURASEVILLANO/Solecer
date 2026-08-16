"use client"; 

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const LINKS = [
{ href: "#beneficios", label: "Beneficios" },
{ href: "#como-funciona", label: "Cómo funciona" },
{ href: "#empresas", label: "Empresas" },
{ href: "#hogares", label: "Hogares" },
{ href: "#incentivos", label: "Incentivos" },
{ href: "#preguntas", label: "Preguntas" },
];

export default function Header() {
const [open, setOpen] = useState(false);

 return (
<header className="fixed top-0 inset-x-0 z-50 bg-navy/80 backdrop-blur-md border-b border-white/10">
<div className="mx-auto max-w-7xl px-6 lg:px-10 h-18 flex items-center justify-between py-4">
#inicio

<Image
src="/images/logolassName="font-display font-semibold text-white text-lg tracking-tight">
{siteConfig.companyName}{" "}
<span className="text-solar">
{siteConfig.companyNameHighlight}
</span>
</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
{LINKS.map((link) => (
<a
key={link.href.label}
</a>
))}
</nav>

<div className="flex items-center gap-2">
<a
href="#contacto"
className="inline-flex items-center rounded-full bg-solar px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold{() => setOpen(!open)}
className="lg:hidden text-white p-2"
>
{open ? (
<X className="w-6 h-6" />
) : (
<Menu className="w-6 h-6" />
)}
</button>
</div>
</div>
 
{open && (
<div className="lg:hidden border-t border-white/10 bg-navy px-6 py-6 flex flex-col gap-5">
{LINKS.map((link) => (
{link.href} => setOpen(false)}
className="text-white/80 text-base"
>
{link.label}
</a>
))}
</div>
)}
</header>
);
}
