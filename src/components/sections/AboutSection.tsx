"use client";

import { SectionHeader } from "../ui/SectionHeader";
import { siteConfig } from "@/lib/siteConfig";
import { motion } from "framer-motion";

// --- Íconos de características (simulados con emojis para simplicidad) ---
const features = [
  {
    icon: "🌾", // Espiga/Ingrediente
    title: "Ingredientes Seleccionados",
    description:
      "Preferimos materias primas de calidad y combinaciones simples que siempre funcionan, priorizando el sabor natural.",
  },
  {
    icon: "🕰️", // Reloj/Tiempo
    title: "Elaboración Artesanal",
    description:
      "Procesos cuidados, tiempos de levado y recetas pensadas para lograr la mejor textura y un sabor profundo.",
  },
  {
    icon: "🍽️", // Cubiertos/Mesa
    title: "Pensado para la Mesa",
    description:
      "Productos listos para sumar a la picada, al plato principal, un brunch o el mate de la tarde. ¡Fáciles de compartir!",
  },
];

export function AboutSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="sobre"
      className="section bg-paprika-brown/5 relative overflow-hidden py-16 md:py-24" // Fondo más sutil y limpio
    >
      {/* Elemento decorativo suave */}
      <div className="absolute top-1/4 left-0 h-40 w-40 rounded-full bg-paprika-caramel/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-40 w-40 rounded-full bg-paprika-caramel/10 blur-3xl" />

      <div className="section-inner relative">
        <SectionHeader
          title="Hecho a mano, pensado para compartir"
          subtitle="Panes, focaccias y conservas artesanales elaboradas en tandas chicas, con tiempo y dedicación."
          align="center"
        />

        {/* Contenedor principal con efecto de tarjeta y animación */}
        <motion.div
          className="mt-12 card-3d bg-white p-6 md:p-10 shadow-xl border border-paprika-cream"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-[2fr_1fr] gap-10 md:gap-16 items-start">
            {/* 1. BLOQUE DE TEXTO NARRATIVO */}
            <div className="space-y-6 text-paprika-brown/90 text-base md:text-lg leading-relaxed">
              <motion.p variants={itemVariants}>
                <strong>{siteConfig.name}</strong> nace con una idea simple:
                acompañar momentos de todos los días con productos que se
                sientan especiales. Panes y focaccias hechos a mano, con recetas
                cuidadas y una estética cálida, ideal para la mesa de casa.
              </motion.p>

              <motion.p variants={itemVariants}>
                Trabajamos en <strong>lotes reducidos</strong> para cuidar la
                frescura y la calidad de cada tanda. Cada focaccia, pan
                ciabatta, hummus y frasco de confitados se prepara con atención
                al detalle, desde los ingredientes hasta la presentación final.
              </motion.p>

              <motion.p variants={itemVariants}>
                Nuestros productos funcionan igual de bien en una picada, una
                comida familiar, un brunch de fin de semana o una cena
                tranquila. La idea es que abrir algo de{" "}
                <strong>{siteConfig.name}</strong> se convierta en una excusa
                para compartir y disfrutar.
              </motion.p>
            </div>

            {/* 2. BLOQUE DE CARACTERÍSTICAS DESTACADAS (Mejora UX/UI) */}
            <div className="space-y-8 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-paprika-caramel/20 md:pl-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * index + 0.5 }}
                >
                  <span
                    className="text-3xl text-paprika-caramel flex-shrink-0"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-paprika-brown border-b border-paprika-caramel/10 pb-0.5 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-paprika-brown/80">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
