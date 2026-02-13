import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "./theme-toggle";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Soporte Informático Profesional",
    template: "%s | Soporte Informático",
  },
  description:
    "Servicios profesionales de soporte informático, redes, continuidad operacional y desarrollo web moderno.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased transition-colors duration-300 flex flex-col min-h-screen">

        <Navbar />
        <ThemeToggle />

        <main className="flex-grow pt-24">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}

