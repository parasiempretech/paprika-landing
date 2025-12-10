import Link from "next/link";
import { SectionHeader } from "../ui/SectionHeader";
import { PrimaryButton } from "../ui/Button";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/siteConfig";

export function ContactSection() {
  return (
    <section id="contacto" className="section bg-paprika-creamSoft">
      <div className="section-inner">
        <SectionHeader
          title="Hablemos de tu próximo pedido"
          subtitle="Escribinos por WhatsApp y coordinamos lo que tengas ganas de probar."
          align="center"
        />
        <div className="max-w-lg mx-auto text-center space-y-4 text-sm md:text-base text-paprika-brown">
          <p>
            Estamos en <strong>{siteConfig.city}</strong>. Podés escribirnos por
            WhatsApp para consultar disponibilidad, sabores de la semana y
            fechas especiales.
          </p>
          <PrimaryButton
            label="Escribir por WhatsApp"
            href={getWhatsappUrl(
              "Hola! Quiero consultar por productos y disponibilidad 🙂"
            )}
          />
          <div className="space-y-1 text-xs md:text-sm text-paprika-brown/70">
            <p>
              Instagram:{" "}
              <Link
                href={siteConfig.instagram}
                className="underline underline-offset-2"
                target="_blank"
              >
                @paprikadateelgusto
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}