import { SectionHeader } from "../ui/SectionHeader";

export function InfoUtilSection() {
  return (
    <section id="info-util" className="section bg-paprika-creamSoft">
      <div className="section-inner">
        <SectionHeader
          title="Info útil para que disfrutes al máximo"
          subtitle="Tips para conservar y recalentar tu focaccia y panes."
          align="center"
        />
        <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base text-paprika-brown">
          <div className="card-3d p-5 md:p-6 space-y-3">
            <h3 className="text-lg font-semibold text-paprika-brown">
              Focaccia
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Conservá tu focaccia en la heladera, bien envuelta o en un
                recipiente hermético.
              </li>
              <li>
                Para consumirla, calentala en el horno unos minutos para que
                recupere textura y aroma.
              </li>
              <li>
                Si querés freezarla, podés hacerlo. Luego descongelá a
                temperatura ambiente y terminá unos minutos al horno.
              </li>
            </ul>
          </div>
          <div className="card-3d p-5 md:p-6 space-y-3">
            <h3 className="text-lg font-semibold text-paprika-brown">
              Hummus, ciabatta y cherrys
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Mantené el hummus siempre refrigerado y consumilo dentro de los
                días recomendados en la etiqueta.
              </li>
              <li>
                El pan ciabatta se disfruta mejor levemente tostado o
                calentado.
              </li>
              <li>
                Los tomates cherry confitados son ideales para pastas, panes,
                pizzas y tablas de picada.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}