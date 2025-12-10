export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  highlight?: string;
};

export const products: Product[] = [
  {
    id: "focaccia",
    name: "Focaccia artesanal",
    description:
      "Masa esponjosa de fermentación lenta, aceite de oliva, hierbas y toppings que cambian según la tanda.",
    image: "/images/focaccia.jpg",
    highlight: "Ideal para compartir o armar tus sándwiches premium.",
  },
  {
    id: "hummus",
    name: "Hummus de garbanzos",
    description:
      "Crema suave de garbanzos, tahini y limón. Perfecto para untar, picar y acompañar todo.",
    image: "/images/hummus.jpg",
    highlight: "Textura sedosa, sabor balanceado.",
  },
  {
    id: "ciabatta",
    name: "Pan ciabatta",
    description:
      "Pan de miga aireada y corteza crocante, pensado para sándwiches bien cargados.",
    image: "/images/ciabatta.jpg",
    highlight: "El aliado perfecto de tus rellenos favoritos.",
  },
  {
    id: "cherrys",
    name: "Tomates cherry confitados",
    description:
      "Tomates cherry cocinados lento en aceite de oliva y especias. Dulces, intensos y adictivos.",
    image: "/images/cherrys.jpg",
    highlight: "Un toque de sabor para pastas, bruschettas y tablas.",
  },
];