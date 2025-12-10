"use client";

import { useState, useMemo } from "react";
import { CartItem, getWhatsappUrlForCart } from "@/lib/whatsapp";
import { PrimaryButton } from "./ui/Button";

// --- Constantes de Estilos (Mejora de Legibilidad y Mantenimiento) ---
const CART_BAR_CLASS =
  "fixed bottom-0 md:bottom-4 inset-x-0 z-40 px-0 md:px-4 shadow-2xl backdrop-blur-sm"; // Añadido blur para integrar
const CART_INNER_CLASS =
  "max-w-4xl mx-auto card-3d border-t-4 border-paprika-caramel/70 bg-white/95 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:rounded-xl md:p-5";

type Props = {
  items: CartItem[];
  onClear?: () => void;
};

export function CartBar({ items, onClear }: Props) {
  const [showDetails, setShowDetails] = useState(false);

  // --- CORRECCIÓN DE ERRORES DE HOOKS (MOVIDOS ARRIBA) ---
  // Los hooks deben llamarse incondicionalmente al inicio del componente.
  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const preview = useMemo(
    () => items.map((item) => `${item.quantity}x ${item.name}`).join(" · "),
    [items]
  );

  const whatsappUrl = useMemo(() => getWhatsappUrlForCart(items), [items]);
  // -----------------------------------------------------------

  // Ahora la condición de retorno anticipado va DESPUÉS de los hooks
  if (!items.length) return null;

  return (
    <div id="mi-pedido" className={CART_BAR_CLASS}>
      <div className={CART_INNER_CLASS}>
        {/* Texto del pedido y detalle (Mejora UI/UX) */}
        <div className="flex-1 text-sm text-paprika-brown">
          <p className="font-bold text-base md:text-lg flex items-center gap-2">
            <span role="img" aria-label="Emoji de carrito de compras">
              🛒
            </span>
            Tu pedido listo:{" "}
            <span className="text-paprika-caramel">
              {totalItems} {totalItems === 1 ? "producto" : "productos"}
            </span>
          </p>

          {/* Previsualización */}
          {!showDetails && (
            <p className="mt-1 text-paprika-brown/80 line-clamp-1 italic">
              {preview}
            </p>
          )}

          {/* Detalle del pedido */}
          {showDetails && (
            <ul
              id="cart-details-list"
              className="mt-3 space-y-2 max-h-32 overflow-y-auto border-l-2 border-paprika-caramel/30 pl-4 py-1"
            >
              {items.map((item) => (
                <li key={item.id} className="text-xs md:text-sm">
                  <span className="font-bold text-paprika-caramel">
                    {item.quantity}x
                  </span>{" "}
                  {item.name}
                </li>
              ))}
            </ul>
          )}

          {/* Controles de visualización y limpieza */}
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setShowDetails((v) => !v)}
              className="inline-flex items-center text-xs font-semibold text-paprika-caramel hover:text-paprika-brown transition-colors"
              aria-expanded={showDetails}
              aria-controls="cart-details-list"
            >
              <span className="mr-1">{showDetails ? "▲" : "▼"}</span>
              {showDetails ? "Ocultar detalle" : "Ver detalle del pedido"}
            </button>

            {onClear && (
              <button
                type="button"
                onClick={onClear}
                className="inline-flex items-center text-xs text-paprika-brown/60 hover:text-red-600 transition-colors"
              >
                Vaciar pedido
              </button>
            )}
          </div>
        </div>

        {/* Botón principal (CTA destacado) */}
        <div className="w-full md:w-auto md:min-w-[200px] flex-shrink-0">
          <PrimaryButton
            label="Enviar pedido por WhatsApp"
            href={whatsappUrl}
            className="w-full shadow-lg hover:shadow-xl py-3 text-base"
            // CORRECCIÓN: Se eliminan 'target' y 'rel' para resolver el error de TypeScript
          />
        </div>
      </div>
    </div>
  );
}
