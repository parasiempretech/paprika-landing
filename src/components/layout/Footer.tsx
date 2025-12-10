import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

// --- Enlaces de ejemplo (Solo los que existen) ---
const footerLinks = [
  { href: "#productos", label: "Productos" },
  { href: "#sobre", label: "Nuestra Historia" },
  { href: "#contacto", label: "Contacto" },
];

// Asumiendo que siteConfig tiene al menos: name, instagram, email
type SiteConfigWithSocials = typeof siteConfig & {
  instagram: string;
  email: string;
};

// --- Datos del desarrollador (Solo URL de Instagram) ---
const developerInstagramUrl = "https://www.instagram.com/parasiempretech";

export function Footer() {
  const year = new Date().getFullYear();
  const config = siteConfig as SiteConfigWithSocials;

  return (
    <footer className="bg-paprika-creamSoft border-t-8 border-paprika-caramel/10 mt-16 pt-12 pb-6">
      <div className="section-inner">
        {/* TOP SECTION: Branding, Explorar y Contacto (Grid de 3 columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-10 border-b border-paprika-brown/10">
          {/* Columna 1: Branding y Descripción Corta */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold text-paprika-brown">
              {config.name}
            </h3>
            {/* TEXTO CORREGIDO: "hechos con amor" */}
            <p className="text-sm text-paprika-brown/80 max-w-xs">
              Panes y focaccias artesanales hechos con amor, dedicación y sabor.
            </p>
          </div>

          {/* Columna 2: Navegación Principal ("Explorar") */}
          <div className="space-y-3">
            <h4 className="font-semibold text-paprika-brown uppercase tracking-wider text-xs border-b border-paprika-caramel/20 pb-1">
              Explorar
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paprika-brown/90 hover:text-paprika-caramel transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto y Redes Sociales ("Seguinos") */}
          <div className="space-y-3">
            <h4 className="font-semibold text-paprika-brown uppercase tracking-wider text-xs border-b border-paprika-caramel/20 pb-1">
              Seguinos
            </h4>
            <div className="space-y-2 text-sm text-paprika-brown/90">
              <p>
                {/* Email de Paprika (Se mantiene) */}
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-paprika-caramel transition-colors"
                >
                  {config.email}
                </a>
              </p>
              <p>
                {/* Instagram de Paprika (Se mantiene) */}
                <a
                  href={config.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paprika-caramel transition-colors font-medium underline underline-offset-4"
                >
                  @
                  {config.instagram.split("/").filter(Boolean).pop() ??
                    "Instagram Handle"}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright y Desarrollador */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-paprika-brown/70">
          {/* Bloque del Desarrollador - Solo link a Instagram */}
          <div className="order-2 md:order-1 flex items-center text-xs text-paprika-brown/70">
            <p>
              Sitio desarrollado por{" "}
              <a
                href={developerInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-paprika-brown/80 hover:text-paprika-caramel transition-colors underline underline-offset-2"
              >
                ParaSiempreTech
              </a>
            </p>
          </div>

          {/* Copyright */}
          <p className="order-1 md:order-2 text-sm">
            © {year} {config.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
