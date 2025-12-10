"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "../ui/Button";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/siteConfig";

// Definimos la variable de mensaje aquí para consistencia
const WHATSAPP_MESSAGE =
  "Hola! Vengo desde la web de Paprika y quiero hacer un pedido 🙂";

// Contenedor de la animación del texto para organizar la secuencia
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Retraso entre cada elemento hijo
    },
  },
};

// Variantes de animación para cada elemento de texto (Hijo)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="section pt-32 md:pt-40 bg-paprika-creamSoft relative overflow-hidden"
    >
      {/* Decoración de fondo suave */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-paprika-caramel/10 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-paprika-accent/10 blur-3xl opacity-40" />

      <div className="section-inner relative grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        {/* TEXTO PRINCIPAL - Contenedor con secuencia de animación (Siempre visible, aparece primero) */}
        <motion.div
          className="space-y-8 order-1" // order-1: Aparece primero en móvil y desktop
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Tagline mejorado */}
          <motion.p
            className="text-sm uppercase tracking-[0.3em] font-medium text-paprika-caramel/80"
            variants={itemVariants}
          >
            Sabores artesanales · Hecho con dedicación
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-paprika-brown leading-none"
            variants={itemVariants}
          >
            Panes y focaccias
            <span className="block text-paprika-caramel font-black">
              para acompañar cada momento
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-paprika-brown/85 max-w-xl leading-relaxed pt-2"
            variants={itemVariants}
          >
            Focaccia, hummus, pan ciabatta y tomates cherry confitados pensados
            para disfrutar en la picada, el mate, una cena especial o una mesa
            compartida en casa. Productos elaborados de manera artesanal, en
            tandas chicas y con atención al detalle.
          </motion.p>

          {/* BOTONES */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-4"
            variants={itemVariants}
          >
            <PrimaryButton
              label="Hacé tu pedido por WhatsApp"
              href={getWhatsappUrl(WHATSAPP_MESSAGE)}
              className="shadow-xl hover:shadow-2xl py-3 text-base"
            />
            <PrimaryButton
              label="Ver productos"
              href="#productos"
              variant="outline"
              className="text-base"
            />
          </motion.div>

          {/* Características destacadas */}
          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-paprika-brown/70 pt-4 border-t border-paprika-caramel/10"
            variants={itemVariants}
          >
            <span className="inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-paprika-caramel animate-pulse"
                aria-hidden="true"
              />
              Elaboración artesanal en tandas reducidas
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-paprika-caramel"
                aria-hidden="true"
              />
              Entregas viernes (tarde) y sábados (mañana)
            </span>
          </motion.div>
        </motion.div>

        {/* BLOQUE VISUAL DESTACADO - Ahora es visible en todas las pantallas */}
        <motion.div
          className="relative order-2 w-full max-w-sm mx-auto md:max-w-none md:mx-0" // order-2: Aparece después en móvil. Añadimos un max-width para centrarlo en pantallas pequeñas.
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.div
            className="p-4 md:p-6 relative bg-paprika-cream rounded-3xl shadow-soft-3d-lg border-2 border-paprika-caramel/20 cursor-pointer"
            whileHover={{ y: -10, rotate: 0.5, scale: 1.02 }} // Efecto "flotante" al pasar el ratón
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/40 aspect-[4/5] shadow-2xl">
              {/* Animación de la imagen de fondo (pequeño zoom al inicio) */}
              {/* **IMPORTANTE:** Aquí se usa bg-[url('/images/hero-brick.jpg')] */}
              <motion.div
                className="absolute inset-0 bg-[url('/images/hero-brick.jpg')] bg-cover bg-center"
                initial={{ scale: 1.1, y: 10 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Contenido superpuesto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-paprika-cream space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] font-medium opacity-90 border-b border-paprika-cream/30 pb-1 inline-block">
                  {siteConfig.name}
                </p>
                <p className="text-xl md:text-2xl font-bold leading-snug">
                  Productos pensados para compartir, disfrutar y volver a
                  elegir.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
