"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { PrimaryButton } from "../ui/Button";
import { siteConfig } from "@/lib/siteConfig";

// Definimos el mensaje predeterminado aquí, copiado de la variable .env.local.example
const WHATSAPP_MESSAGE =
  "Hola! Vengo desde la web de Paprika y quiero hacer un pedido 🙂";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#como-pedir", label: "Cómo pedir" },
  { href: "#info-util", label: "Info útil" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- CORRECCIÓN ---
  // Llamamos a getWhatsappUrl() pasando explícitamente el mensaje
  // para garantizar que se incluya en la URL, como sucede en Hero.tsx.
  const whatsappLink = useMemo(() => getWhatsappUrl(WHATSAPP_MESSAGE), []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-paprika-cream/95 shadow-lg border-b border-paprika-caramel/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        {/* Logo + nombre (Diseño más limpio) */}
        <Link href="#inicio" className="flex items-center gap-3 group">
          <div className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-paprika-caramel/10 shadow-soft-3d flex items-center justify-center overflow-hidden transition-all group-hover:scale-105">
            <Image
              src="/images/logo-paprika.png"
              alt="Paprika logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-base md:text-lg text-paprika-brown">
              {siteConfig.name}
            </p>
            <p className="text-xs text-paprika-brown/60">
              {siteConfig.tagline}
            </p>
          </div>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paprika-brown/70 hover:text-paprika-caramel font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-paprika-caramel after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
          <PrimaryButton
            label="Pedir por WhatsApp"
            href={whatsappLink}
            className="text-sm shadow-md hover:shadow-lg"
            // Se omiten target y rel para evitar errores de TypeScript
          />
        </div>

        {/* Botón mobile */}
        <div className="md:hidden">
          <PrimaryButton
            label="Pedir"
            href={whatsappLink}
            className="text-xs px-4 py-2 shadow-md"
            // Se omiten target y rel para evitar errores de TypeScript
          />
        </div>
      </nav>
    </header>
  );
}
