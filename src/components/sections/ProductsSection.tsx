"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { products } from "@/lib/products";
import type { CartItem } from "@/lib/whatsapp";
import { getWhatsappUrlForProduct } from "@/lib/whatsapp";
import { SectionHeader } from "../ui/SectionHeader";
import { PrimaryButton } from "../ui/Button";

// --- Constantes de Estilos para una UI consistente y código limpio ---
const QTY_BUTTON_BASE =
  "h-7 w-7 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200";
const QTY_BUTTON_REMOVE = `${QTY_BUTTON_BASE} border border-paprika-brown/20 text-paprika-brown hover:bg-paprika-brown/10`;
const QTY_BUTTON_ADD = `${QTY_BUTTON_BASE} bg-paprika-caramel text-paprika-cream hover:brightness-110 shadow-md`;
const QTY_CONTROL_CONTAINER =
  "inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-lg border border-paprika-cream";

type Props = {
  onCartChange: (items: CartItem[]) => void;
};

export function ProductsSection({ onCartChange }: Props) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAdd = useCallback(
    (id: string, name: string) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === id);
        let next: CartItem[];

        next = existing
          ? prev.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
          : [...prev, { id, name, quantity: 1 }];

        onCartChange(next);
        return next;
      });
    },
    [onCartChange]
  );

  const handleRemove = useCallback(
    (id: string) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === id);
        if (!existing) return prev;

        const next =
          existing.quantity <= 1
            ? prev.filter((item) => item.id !== id)
            : prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              );

        onCartChange(next);
        return next;
      });
    },
    [onCartChange]
  );

  return (
    <section
      id="productos"
      className="section bg-paprika-creamSoft py-12 md:py-20"
    >
      <div className="section-inner max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Nuestros Productos de la Semana"
          subtitle="Focaccias, panes y conservas listas para sumar a la picada, al mate o a una cena especial. ¡Todo hecho a mano!"
          align="center"
        />

        <div className="grid gap-10 md:grid-cols-2 mt-10">
          {products.map((product) => {
            const currentQty =
              cart.find((item) => item.id === product.id)?.quantity ?? 0;

            return (
              <article
                key={product.id}
                className="card-3d overflow-hidden group relative transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
              >
                <div className="grid md:grid-cols-[1.1fr_1fr] gap-4 md:gap-0 items-stretch h-full">
                  <div className="relative overflow-hidden">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={product.id === products[0].id}
                      />
                    </div>
                  </div>

                  <div className="p-5 md:p-6 flex flex-col justify-between gap-4">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-paprika-brown border-b border-paprika-brown/10 pb-1">
                        {product.name}
                      </h3>
                      <p className="text-base text-paprika-brown/90 leading-relaxed">
                        {product.description}
                      </p>
                      {product.highlight && (
                        <p className="text-sm text-paprika-caramel font-semibold bg-paprika-caramel/10 p-1 rounded-sm inline-block">
                          {product.highlight}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        {currentQty > 0 ? (
                          <div className={QTY_CONTROL_CONTAINER}>
                            <button
                              type="button"
                              onClick={() => handleRemove(product.id)}
                              className={QTY_BUTTON_REMOVE}
                              aria-label={`Restar una unidad de ${product.name}`}
                            >
                              −
                            </button>
                            <span className="min-w-[1.5rem] text-center text-base font-bold text-paprika-brown">
                              {currentQty}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                handleAdd(product.id, product.name)
                              }
                              className={QTY_BUTTON_ADD}
                              aria-label={`Sumar una unidad de ${product.name}`}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <PrimaryButton
                            label="Sumar al pedido"
                            onClick={() => handleAdd(product.id, product.name)}
                          />
                        )}

                        <PrimaryButton
                          label={
                            currentQty > 0
                              ? "Consultar este producto"
                              : "Pedir por WhatsApp"
                          }
                          href={getWhatsappUrlForProduct(product.name, 1)}
                          variant="outline"
                          // SE ELIMINAN 'target="_blank"' y 'rel="noopener noreferrer"'
                          // para resolver el error de TypeScript (TS2322)
                          className="text-sm hover:ring-2 ring-paprika-caramel"
                        />
                      </div>

                      {currentQty > 0 && (
                        <p className="text-[11px] md:text-xs text-paprika-brown/70 bg-paprika-cream/50 p-2 rounded">
                          En tu pedido:{" "}
                          <span className="font-semibold text-paprika-brown">
                            {currentQty} unidad{currentQty > 1 ? "es" : ""}
                          </span>
                          . Podés ajustar la cantidad arriba.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-xs md:text-sm text-paprika-brown/70 text-center italic max-w-xl mx-auto">
          * Los sabores, combinaciones y toppings pueden variar según la tanda.
          Escribinos para conocer las opciones disponibles esta semana.
        </p>
      </div>
    </section>
  );
}
