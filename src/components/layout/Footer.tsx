import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-paprika-brown/10 mt-16">
      <div className="section-inner py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-paprika-brown/70">
        <p>
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <p className="text-xs">
          Sitio desarrollado por <span className="font-semibold">ParaSiempreTech</span>
        </p>
      </div>
    </footer>
  );
}