"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { PrimaryButton } from "../ui/Button";
import { siteConfig } from "@/lib/siteConfig";

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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-paprika-cream/95 shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 md:py-5">
        {/* Logo + nombre */}
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="h-11 w-11 md:h-12 md:w-12 rounded-xl bg-paprika-creamSoft shadow-soft-3d flex items-center justify-center overflow-hidden">
            <Image
              src="/images/logo-paprika.png"
              alt="Paprika logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-sm md:text-base text-paprika-brown">
              {siteConfig.name}
            </p>
            <p className="text-xs text-paprika-brown/70">
              {siteConfig.tagline}
            </p>
          </div>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paprika-brown/80 hover:text-paprika-brown font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <PrimaryButton
            label="Pedir por WhatsApp"
            href={getWhatsappUrl()}
            className="text-xs md:text-sm"
          />
        </div>

        {/* Botón mobile */}
        <div className="md:hidden">
          <PrimaryButton
            label="Pedir"
            href={getWhatsappUrl()}
            className="text-xs px-4 py-2"
          />
        </div>
      </nav>
    </header>
  );
}
