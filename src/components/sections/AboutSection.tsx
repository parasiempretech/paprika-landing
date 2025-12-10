import { SectionHeader } from "../ui/SectionHeader";
import { siteConfig } from "@/lib/siteConfig";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="section bg-[url('/images/texture-brick.jpg')] bg-cover bg-center relative"
    >
      {/* Misma capa que en Cómo hacer tu pedido: ladrillo atrás, crema adelante */}
      <div className="absolute inset-0 bg-paprika-cream/85 backdrop-blur-[2px]" />

      <div className="section-inner relative">
        <SectionHeader
          title="Hecho a mano, pensado para compartir"
          subtitle="Panes, focaccias y conservas artesanales elaboradas en tandas chicas, con tiempo y dedicación."
          align="center"
        />

        {/* Un solo “card-3d” grande con todo tu contenido */}
        <div className="mt-8 grid md:grid-cols-1 gap-6 text-sm md:text-base text-paprika-brown">
          <div className="card-3d p-5 md:p-6 space-y-4">
            <div className="space-y-4 text-paprika-brown/90">
              <p>
                {siteConfig.name} nace con una idea simple: acompañar momentos
                de todos los días con productos que se sientan especiales. Panes
                y focaccias hechos a mano, con recetas cuidadas y una estética
                cálida, ideal para la mesa de casa.
              </p>

              <p>
                Trabajamos en <strong>lotes reducidos</strong> para cuidar la
                frescura y la calidad de cada tanda. Cada focaccia, cada pan
                ciabatta, cada pote de hummus y cada frasco de tomates cherry
                confitados se prepara con atención al detalle, desde los
                ingredientes hasta la presentación final.
              </p>

              <p>
                Nuestros productos funcionan igual de bien en una picada con
                amigos, una comida familiar, un brunch de fin de semana o una
                cena tranquila. La idea es que abrir algo de {siteConfig.name}{" "}
                se convierta en una excusa para compartir y disfrutar.
              </p>
            </div>

            {/* Tus tres bloques finales, pero dentro del mismo card */}
            <div className="pt-4 grid gap-3 md:grid-cols-3 text-xs md:text-sm">
              <div>
                <p className="font-semibold text-paprika-brown">
                  Ingredientes seleccionados
                </p>
                <p className="text-paprika-brown/80">
                  Preferimos materias primas de calidad y combinaciones simples
                  que siempre funcionan.
                </p>
              </div>
              <div>
                <p className="font-semibold text-paprika-brown">
                  Elaboración artesanal
                </p>
                <p className="text-paprika-brown/80">
                  Procesos cuidados, tiempos de levado y recetas pensadas para
                  lograr buen sabor y textura.
                </p>
              </div>
              <div>
                <p className="font-semibold text-paprika-brown">
                  Pensado para la mesa
                </p>
                <p className="text-paprika-brown/80">
                  Productos listos para sumar a la picada, al plato principal o
                  al mate de la tarde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
