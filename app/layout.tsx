import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./theme-toggle";
import ScrollReveal from "./ScrollReveal";
import BackgroundEffects from "./BackgroundEffects";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

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

        {/* GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PVJN68YDT6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PVJN68YDT6');
          `}
        </Script>

        <BackgroundEffects />

        <Navbar />
        <ThemeToggle />
        <ScrollReveal />

        <main className="pt-24 relative z-10">
          {children}
        </main>

        <Footer />

        {/* VERCEL ANALYTICS */}
        <Analytics />

      </body>
    </html>
  );
}
