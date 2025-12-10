const FALLBACK_PHONE = "5493516967126"; // +54 9 3516 96-7126 sin espacios ni guiones

function getPhone() {
  return process.env.NEXT_PUBLIC_WHATSAPP_PHONE || FALLBACK_PHONE;
}

export function getWhatsappUrl(message?: string) {
  const phone = getPhone();
  const base = `https://wa.me/${phone}`;
  if (!message) return base;
  const encoded = encodeURIComponent(message);
  return `${base}?text=${encoded}`;
}

export function getWhatsappUrlForProduct(name: string, quantity: number = 1) {
  const msg = `Hola! Quiero hacer un pedido de ${quantity} ${name}${
    quantity > 1 ? " (unidades)" : ""
  } 🙂`;
  return getWhatsappUrl(msg);
}

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
};

export function getWhatsappUrlForCart(items: CartItem[]) {
  if (!items.length) {
    return getWhatsappUrl(
      "Hola! Quiero hacer un pedido para esta semana en Paprika 🙂"
    );
  }

  const lines = items.map(
    (item) => `• ${item.quantity} x ${item.name}`
  );

  const message = [
    "Hola! Quiero hacer un pedido para esta semana en Paprika 🙂",
    "",
    "Mi pedido:",
    ...lines,
    "",
    "Entrega: viernes por la tarde o sábado por la mañana (a coordinar).",
  ].join("\n");

  return getWhatsappUrl(message);
}