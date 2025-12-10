"use client";

import { CartItem, getWhatsappUrlForCart } from "@/lib/whatsapp";
import { PrimaryButton } from "./ui/Button";

type Props = {
  items: CartItem[];
};

export function CartBar({ items }: Props) {
  if (!items.length) return null;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const preview = items
    .map((item) => `${item.quantity}x ${item.name}`)
    .join(" · ");

  const url = getWhatsappUrlForCart(items);

  return (
    <div className="fixed bottom-4 inset-x-0 z-40 px-4 md:px-0">
      <div className="max-w-3xl mx-auto card-3d border border-paprika-caramel/30 bg-paprika-cream/95 flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 py-3 md:px-5 md:py-3">
        <div className="text-xs md:text-sm text-paprika-brown">
          <p className="font-semibold">
            Tu pedido: <span>{totalItems} producto(s)</span>
          </p>
          <p className="mt-1 line-clamp-1">{preview}</p>
        </div>
        <PrimaryButton
          label="Enviar pedido por WhatsApp"
          href={url}
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
}
