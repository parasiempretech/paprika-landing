"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "../ui/Button";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section
      id="inicio"
      className="section pt-28 md:pt-36 bg-gradient-to-b from-paprika-creamSoft via-paprika-cream to-paprika-creamSoft relative overflow-hidden"
    >
      {/* Decoración de fondo suave */}
      <div className="absolute top-0 left-1/3 h-80 w-80 rounded-full bg-paprika-caramel/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-paprika-accent/10 blur-3xl" />

      <div className="section-inner relative grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* TEXTO PRINCIPAL */}
        <motion.div
          className="space-y-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-paprika-brown/70">
            Sabores artesanales · Hecho con dedicación
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-paprika-brown leading-tight">
            Panes y focaccias
            <span className="block text-paprika-caramel">
              para acompañar cada momento
            </span>
          </h1>

          <p className="text-base md:text-lg text-paprika-brown/80 max-w-xl leading-relaxed">
            Focaccia, hummus, pan ciabatta y tomates cherry confitados pensados
            para disfrutar en la picada, el mate, una cena especial o una mesa
            compartida en casa. Productos elaborados de manera artesanal, en
            tandas chicas y con atención al detalle.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <PrimaryButton
              label="Hacé tu pedido por WhatsApp"
              href={getWhatsappUrl(
                "Hola! Vengo desde la web de Paprika y quiero hacer un pedido 🙂"
              )}
              className="shadow-soft-3d"
            />
            <PrimaryButton
              label="Ver productos"
              href="#productos"
              variant="outline"
            />
          </div>

          <div className="flex flex-wrap gap-6 text-xs md:text-sm text-paprika-brown/70 pt-2">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-paprika-caramel" />
              Elaboración artesanal en tandas reducidas
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-paprika-caramel" />
              Entregas viernes (tarde) y sábados (mañana)
            </span>
          </div>
        </motion.div>

        {/* BLOQUE VISUAL DESTACADO */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-3d p-4 md:p-6 relative overflow-hidden">
            <div className="absolute -top-16 -right-20 h-40 w-40 rounded-full bg-paprika-caramel/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-paprika-accent/15 blur-3xl" />

            <div className="relative rounded-2xl overflow-hidden border border-white/40 aspect-[4/5] bg-[url('/images/hero-brick.jpg')] bg-cover bg-center shadow-soft-3d">
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-paprika-cream space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] opacity-80">
                  {siteConfig.name}
                </p>
                <p className="text-lg md:text-xl font-semibold leading-snug">
                  Productos pensados para compartir, disfrutar y volver a
                  elegir.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
