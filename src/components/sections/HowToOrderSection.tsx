"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { PrimaryButton } from "../ui/Button";
import { getWhatsappUrl } from "@/lib/whatsapp";

const STEPS = [
  {
    icon: "📝", // Emoji de Pedido
    title: "Realizá tu Pedido",
    tag: "1 · PEDIDOS",
    description:
      "Tomamos pedidos durante la semana para entregar los <strong>viernes por la tarde</strong> y <strong>sábados por la mañana</strong>. Asegurate de consultar la disponibilidad actual.",
  },
  {
    icon: "✅", // Emoji de Confirmación
    title: "Confirmación y Seña",
    tag: "2 · CONFIRMACIÓN",
    description:
      "Para fechas especiales o pedidos grandes, escribinos con <strong>anticipación</strong>. Los pedidos se confirman con una <strong>seña del 50%</strong> del total.",
  },
  {
    icon: "🛵", // Emoji de Entrega
    title: "Recibí tu Encargo",
    tag: "3 · ENTREGA",
    description:
      "Coordinamos el punto y la hora de entrega por WhatsApp. Trabajamos siempre en <strong>lotes reducidos</strong> para garantizar la frescura y calidad.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Retraso secuencial
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Aseguramos que la exportación esté intacta
export function HowToOrderSection() {
  const WHATSAPP_MESSAGE =
    "Hola! Quiero hacer un pedido para este viernes/sábado 🙂";

  return (
    <section
      id="como-pedir"
      className="section bg-paprika-cream relative overflow-hidden py-16 md:py-24"
    >
      {/* Capa de decoración sutil */}
      <div className="absolute inset-0 bg-paprika-creamSoft/70" />

      <div className="section-inner relative">
        <SectionHeader
          title="Cómo hacer tu pedido"
          subtitle="Simple, rápido y directo por WhatsApp. Nos chateás, coordinamos y listo."
          align="center"
        />

        {/* Contenedor de pasos con animación secuencial */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-paprika-brown">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              className="card-3d bg-white p-6 md:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="text-5xl mb-4 text-paprika-caramel"
                aria-hidden="true"
              >
                {step.icon}
              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-paprika-caramel/70 font-semibold mb-2">
                {step.tag}
              </p>

              <h3 className="text-xl font-bold text-paprika-brown mb-3">
                {step.title}
              </h3>

              <p className="text-sm md:text-base text-paprika-brown/85">
                {/* Usamos dangerouslySetInnerHTML para renderizar <strong> sin asteriscos */}
                <span dangerouslySetInnerHTML={{ __html: step.description }} />
              </p>
            </motion.div>
          ))}
        </div>

        {/* Botón CTA destacado */}
        <div className="mt-12 flex justify-center">
          <PrimaryButton
            label="¡Quiero hacer mi pedido ahora!"
            href={getWhatsappUrl(WHATSAPP_MESSAGE)}
            className="shadow-xl hover:shadow-2xl py-3 text-base"
          />
        </div>
      </div>
    </section>
  );
}
