import { SectionHeader } from "../ui/SectionHeader";
import { PrimaryButton } from "../ui/Button";
import { getWhatsappUrl } from "@/lib/whatsapp";

export function HowToOrderSection() {
  return (
    <section
      id="como-pedir"
      className="section bg-[url('/images/texture-wood.jpg')] bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-paprika-cream/85 backdrop-blur-[2px]" />
      <div className="section-inner relative">
        <SectionHeader
          title="Cómo hacer tu pedido"
          subtitle="Simple, por WhatsApp. Nos chateás, coordinamos y listo."
          align="center"
        />
        <div className="grid md:grid-cols-3 gap-6 text-sm md:text-base text-paprika-brown">
          <div className="card-3d p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-paprika-brown/60 mb-2">
              1 · Pedidos
            </p>
            <p>
              Tomamos pedidos durante la semana para entregar los{" "}
              <strong>viernes por la tarde</strong> y{" "}
              <strong>sábados por la mañana</strong>.
            </p>
          </div>
          <div className="card-3d p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-paprika-brown/60 mb-2">
              2 · Confirmación
            </p>
            <p>
              Para fechas especiales, escribinos con{" "}
              <strong>anticipación</strong>. Los pedidos se confirman con una{" "}
              <strong>seña del 50%</strong> del total.
            </p>
          </div>
          <div className="card-3d p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-paprika-brown/60 mb-2">
              3 · Entrega
            </p>
            <p>
              Coordinamos la entrega por WhatsApp. Siempre en{" "}
              <strong>lotes reducidos</strong> para cuidar la calidad y
              frescura de cada tanda.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <PrimaryButton
            label="Escribir por WhatsApp"
            href={getWhatsappUrl(
              "Hola! Quiero hacer un pedido para este viernes/sábado 🙂"
            )}
          />
        </div>
      </div>
    </section>
  );
}