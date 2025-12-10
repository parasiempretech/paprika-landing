"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import type { CartItem } from "@/lib/whatsapp";
import { getWhatsappUrlForProduct } from "@/lib/whatsapp";
import { SectionHeader } from "../ui/SectionHeader";
import { PrimaryButton } from "../ui/Button";

type Props = {
  onCartChange: (items: CartItem[]) => void;
};

export function ProductsSection({ onCartChange }: Props) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAdd = (id: string, name: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      let next: CartItem[];
      if (existing) {
        next = prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        next = [...prev, { id, name, quantity: 1 }];
      }
      onCartChange(next);
      return next;
    });
  };

  return (
    <section id="productos" className="section bg-paprika-creamSoft">
      <div className="section-inner">
        <SectionHeader
          title="Productos de la semana"
          subtitle="Focaccias, panes y conservas listas para sumar a la picada, al mate o a una cena especial."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="card-3d overflow-hidden group relative"
            >
              <div className="grid md:grid-cols-[1.1fr_1fr] gap-4 md:gap-0 items-stretch">
                <div className="relative overflow-hidden">
                  <div className="relative h-56 md:h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-paprika-brown">
                      {product.name}
                    </h3>
                    <p className="text-sm md:text-base text-paprika-brown/80">
                      {product.description}
                    </p>
                    {product.highlight && (
                      <p className="text-xs md:text-sm text-paprika-caramel font-medium">
                        {product.highlight}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <PrimaryButton
                      label="Sumar al pedido"
                      onClick={() => handleAdd(product.id, product.name)}
                    />
                    <PrimaryButton
                      label="Pedir por WhatsApp"
                      href={getWhatsappUrlForProduct(product.name, 1)}
                      variant="outline"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs md:text-sm text-paprika-brown/60 text-center">
          * Los sabores, combinaciones y toppings pueden variar según la tanda.
          Escribinos para conocer las opciones disponibles esta semana.
        </p>
      </div>
    </section>
  );
}
