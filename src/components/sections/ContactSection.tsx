"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/siteConfig";

// Ícono WhatsApp (Mantenemos el ícono, pero le cambiamos el color de relleno si lo usamos en el botón modificado)
const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    // EL FILL AHORA ES PAPRIKA-CARAMEL (o el color del texto)
    className="w-5 h-5 fill-paprika-caramel"
    {...props}
  >
    <path d="M380.9 97.1C339.7 54.7 283.4 32 224 32S108.3 54.7 67.1 97.1 0 191.3 0 256s14.7 122.9 45.4 153.6L32 480l93.7-27.4c29.1 12.8 61.9 19.4 95 19.4s65.9-6.6 95-19.4L416 480l-13.4-38.4C417.3 378.9 448 314.7 448 256s-14.7-122.9-45.4-153.6zm-132 228.5c-7.6 2.2-12.3 3.5-20.8-.4-10.8-5-35.4-16.4-67.4-46.5-24.9-23.8-41.7-53-46.5-61.9-1.9-3.4-7.2-12.1-7.2-22.9 0-10.8 6.6-16.1 8.9-18.3 2.3-2.2 5.1-2.7 6.8-2.7 1.7 0 3.4 0 4.9.1 1.5.1 3.7-.6 5.8 4.4 2.2 5.3 7.4 18.4 8.1 19.7.6 1.3 1 2.8.2 4.5-.8 1.7-1.3 2.7-2.5 4.1-1.1 1.3-2.3 3-3.3 4-1.1 1.1-2.2 2.3-1 4.5 1.1 2.2 4.8 7.9 10.3 12.8 7.1 6.3 13.1 13.1 23.6 21.3 16.2 12.8 28.9 16.8 32.3 18.6 3.4 1.7 5.4 1.5 7.4-.9 2-2.4 8.5-9.9 10.8-13.3 2.3-3.4 4.6-2.8 7.6-1.7 3.1 1.1 19.4 9.1 22.7 10.7 3.4 1.7 5.6 2.5 6.4 3.9.8 1.4.8 8.2-1.8 16.1-2.6 7.9-15.1 14.8-20.7 16.8z" />
  </svg>
);

// Ícono Instagram
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-5 h-5 fill-paprika-brown"
  >
    <path d="M224 202.7c-28.3 0-51.3 23-51.3 51.3s23 51.3 51.3 51.3 51.3-23 51.3-51.3-23-51.3-51.3-51.3zm124.7-41c-1.3-9.4-5-17.7-10.9-24.6-5.9-6.9-13.4-11.6-22.8-12.9-9.4-1.3-37.6-2-70.9-2h-40c-33.3 0-61.5.7-70.9 2-9.4 1.3-16.9 6-22.8 12.9-5.9 6.9-9.6 15.2-10.9 24.6-1.3 9.4-2 37.6-2 70.9v40c0 33.3.7 61.5 2 70.9 1.3 9.4 5 17.7 10.9 24.6 5.9 6.9 13.4 11.6 22.8 12.9 9.4 1.3 37.6 2 70.9 2h40c33.3 0 61.5-.7 70.9-2 9.4-1.3 16.9-6 22.8-12.9 5.9-6.9 9.6-15.2 10.9-24.6 1.3-9.4 2-37.6 2-70.9v-40c0-33.3-.7-61.5-2-70.9zm-48.3 149c-1.1 7.4-3.9 13.7-8.9 18.7-5 5-11.3 7.8-18.7 8.9-12.9 1.8-51.6 1.8-69.8 1.8-18.2 0-56.9 0-69.8-1.8-7.4-1.1-13.7-3.9-18.7-8.9-5-5-7.8-11.3-8.9-18.7-1.8-12.9-1.8-51.6-1.8-69.8 0-18.2 0-56.9 1.8-69.8 1.1-7.4 3.9-13.7 8.9-18.7 5-5 11.3-7.8 18.7-8.9 12.9-1.8 51.6-1.8 69.8-1.8 18.2 0 56.9 0 69.8 1.8 7.4 1.1 13.7 3.9 18.7 8.9 5 5 7.8 11.3 8.9 18.7 1.8 12.9 1.8 51.6 1.8 69.8 0 18.2 0 56.9-1.8 69.8z" />
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// Extendemos el tipo de siteConfig solo para que acepte phone opcional
type SiteConfigWithPhone = typeof siteConfig & { phone?: string };

export function ContactSection() {
  const formattedPhoneNumber = "+54 9 351 696-7126";
  const config = siteConfig as SiteConfigWithPhone;
  const phoneNumber = config.phone ?? formattedPhoneNumber;

  const whatsappMessage =
    "Hola! Quiero consultar por productos y disponibilidad 🙂";

  // Aseguramos que siteConfig.city exista antes de usarlo o proporcionamos un fallback.
  const city = config.city ?? "Córdoba, Argentina";
  const mainParagraph = `Estamos en <strong>${city}</strong>. Consultá por los sabores artesanales de esta semana y reservá tu pedido con anticipación.`;

  return (
    <section
      id="contacto"
      className="section bg-paprika-brown/5 py-16 md:py-24"
    >
      <div className="section-inner relative">
        <SectionHeader
          title="Hablemos de tu próximo pedido"
          subtitle="Coordinamos por WhatsApp qué querés probar y para qué día."
          align="center"
        />

        <motion.div
          className="max-w-xl mx-auto mt-10 card-3d bg-gradient-to-b from-white to-paprika-creamSoft p-8 md:p-10 shadow-2xl border border-paprika-caramel/20 text-center space-y-6 rounded-3xl"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {/* Texto principal */}
          <p
            className="text-base md:text-lg text-paprika-brown/90 font-medium leading-relaxed"
            dangerouslySetInnerHTML={{ __html: mainParagraph }}
          />

          {/* CTA WhatsApp - ¡ESTILO MEJORADO PARA LEGIBILIDAD! */}
          <Link
            href={getWhatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            // CLASES PARA BOTÓN DE CONTORNO (OUTLINE) USANDO COLORES DE MARCA
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-full
                       bg-white border-2 border-paprika-caramel
                       px-8 py-3 text-base md:text-lg font-semibold text-paprika-caramel
                       shadow-md hover:shadow-lg hover:bg-paprika-caramel hover:text-white
                       transition-all duration-300 transform"
          >
            {/* El Ícono ahora hereda el color del texto (paprika-caramel) y cambia a blanco en hover */}
            <WhatsappIcon className="w-5 h-5 fill-paprika-caramel group-hover:fill-white transition-colors" />
            <span>Hacer pedido por WhatsApp</span>
          </Link>

          {/* Datos de contacto */}
          <div className="pt-4 space-y-4 text-sm text-paprika-brown">
            {/* Contacto directo (Teléfono) */}
            <div className="flex flex-col items-center gap-1 text-paprika-brown/90">
              <span className="uppercase tracking-[0.2em] text-[11px] text-paprika-brown/60">
                Contacto directo
              </span>
              <a
                href={`tel:${phoneNumber.replace(/[\s-]/g, "")}`}
                className="font-mono text-base hover:text-paprika-caramel transition-colors"
              >
                {phoneNumber}
              </a>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center gap-1 text-paprika-brown/80">
              <span className="uppercase tracking-[0.2em] text-[11px] text-paprika-brown/60">
                Instagram
              </span>
              <div className="flex items-center gap-2">
                <InstagramIcon />
                <Link
                  href={config.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4 hover:text-paprika-caramel transition-colors"
                >
                  {/* Aquí asumo que siteConfig.instagram es un URL y extraigo el handle para mostrarlo */}
                  @
                  {config.instagram.split("/").filter(Boolean).pop() ??
                    "paprikadateelgusto"}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
