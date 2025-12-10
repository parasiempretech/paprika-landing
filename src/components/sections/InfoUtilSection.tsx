"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";

// Definimos los tips con íconos y estructura mejorada
const focacciaTips = [
  {
    icon: "🥶", // Emoji de Frío/Heladera
    tip: "Conservación",
    details:
      "Guardala en la heladera, bien envuelta o en un recipiente hermético para mantener la humedad y frescura.",
  },
  {
    icon: "🔥", // Emoji de Fuego/Horno
    tip: "Recalentar (Clave)",
    details:
      "Calentala en el horno (180°C) por unos 5 minutos. Esto reactivará el aroma, la textura crujiente de la base y su suavidad interna.",
  },
  {
    icon: "🧊", // Emoji de Hielo/Freezer
    tip: "Freezer",
    details:
      "Podés freezarla sin problema. Para consumirla, descongelá a temperatura ambiente y dale un toque final de 5 minutos al horno.",
  },
];

const extrasTips = [
  {
    icon: "⏳", // Emoji de Tiempo
    tip: "Hummus: Siempre frío",
    details:
      "Mantené el hummus siempre refrigerado y consumilo dentro de los días recomendados en la etiqueta para asegurar su calidad y sabor.",
  },
  {
    icon: "🍞", // Emoji de Pan
    tip: "Ciabatta: Tostado es mejor",
    details:
      "El pan ciabatta se disfruta mejor levemente tostado en sartén o calentado en el horno. Ideal para sándwiches o acompañar salsas.",
  },
  {
    icon: "🍅", // Emoji de Tomate
    tip: "Cherrys: Versatilidad",
    details:
      "Los tomates cherry confitados son el complemento perfecto para pastas, pizzas caseras, sándwiches gourmet y tablas de picada.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const TipItem = ({
  icon,
  tip,
  details,
}: {
  icon: string;
  tip: string;
  details: string;
}) => (
  <motion.li
    className="flex items-start gap-4 p-4 border-b border-paprika-caramel/10 last:border-b-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div
      className="flex-shrink-0 text-2xl text-paprika-caramel pt-1"
      aria-hidden="true"
    >
      {icon}
    </div>
    <div>
      <p className="font-bold text-paprika-brown text-base">{tip}</p>
      <p className="text-sm text-paprika-brown/80">{details}</p>
    </div>
  </motion.li>
);

export function InfoUtilSection() {
  return (
    <section
      id="info-util"
      className="section bg-paprika-brown/5 py-16 md:py-24"
    >
      <div className="section-inner">
        <SectionHeader
          title="Info útil para que disfrutes al máximo"
          subtitle="Tips de conservación, recalentado y maridaje para focaccias y extras."
          align="center"
        />

        {/* Contenedor principal con estilo de tarjeta */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 text-paprika-brown">
          {/* Tarjeta 1: Focaccia */}
          <motion.div
            className="card-3d bg-white p-6 md:p-8 space-y-4 shadow-xl border border-paprika-cream overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-extrabold text-paprika-caramel border-b border-paprika-caramel/20 pb-3 mb-2">
              🍞 Focaccia
            </h3>
            <ul className="space-y-1">
              {focacciaTips.map((tip, index) => (
                <TipItem key={index} {...tip} />
              ))}
            </ul>
          </motion.div>

          {/* Tarjeta 2: Extras */}
          <motion.div
            className="card-3d bg-white p-6 md:p-8 space-y-4 shadow-xl border border-paprika-cream overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-extrabold text-paprika-caramel border-b border-paprika-caramel/20 pb-3 mb-2">
              🥗 Hummus, Ciabatta y Cherrys
            </h3>
            <ul className="space-y-1">
              {extrasTips.map((tip, index) => (
                <TipItem key={index} {...tip} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
