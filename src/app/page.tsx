"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { HowToOrderSection } from "@/components/sections/HowToOrderSection";
import { InfoUtilSection } from "@/components/sections/InfoUtilSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import type { CartItem } from "@/lib/whatsapp";
import { CartBar } from "@/components/CartBar";

export default function Page() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <div className="min-h-screen flex flex-col bg-paprika-creamSoft">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProductsSection onCartChange={setCartItems} />
        <HowToOrderSection />
        <InfoUtilSection />
        <ContactSection />
      </main>
      <Footer />
      <CartBar items={cartItems} />
    </div>
  );
}