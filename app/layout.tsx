import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./theme-toggle";
import ScrollReveal from "./ScrollReveal";
import BackgroundEffects from "./BackgroundEffects";

export const metadata: Metadata = {
  metadataBase: new URL("https://soporteinformaticoccp.cl"),

  title: {
    default: "Soporte Informático Profesional",
    template: "%s | Soporte Informático",
  },

  description:
    "Servicios profesionales de soporte informático, redes, continuidad operacional y desarrollo web moderno.",

  keywords: [
    "soporte informático",
    "soporte técnico empresas",
    "continuidad operacional TI",
    "servicios informáticos",
    "redes empresariales",
    "seguridad informática",
    "desarrollo web Next.js",
    "servicio técnico computacional",
  ],

  authors: [{ name: "Soporte Informático Profesional" }],

  creator: "Soporte Informático Profesional",
  publisher: "Soporte Informático Profesional",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://soporteinformaticoccp.cl",
    title: "Soporte Informático Profesional",
    description:
      "Servicios profesionales de soporte informático, redes, continuidad operacional y desarrollo web moderno.",
    siteName: "Soporte Informático Profesional",
  },

  twitter: {
    card: "summary_large_image",
    title: "Soporte Informático Profesional",
    description:
      "Servicios profesionales de soporte informático, redes, continuidad operacional y desarrollo web moderno.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen relative overflow-x-hidden">

        <BackgroundEffects />

        <Navbar />
        <ThemeToggle />
        <ScrollReveal />

        <main className="pt-24 relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
