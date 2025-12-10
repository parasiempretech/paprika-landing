import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Paprika - Date el gusto",
  description:
    "Focaccia, panes y conservas artesanales premium en Córdoba. Lotes reducidos, entregas los fines de semana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}