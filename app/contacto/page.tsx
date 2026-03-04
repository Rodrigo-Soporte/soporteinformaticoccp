import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Soporte Informático Profesional",
  description:
    "Contáctanos para soporte técnico informático, diagnóstico computacional o desarrollo web profesional. Atención remota y presencial.",
  keywords: [
    "contacto soporte informático",
    "soporte técnico empresas",
    "servicio técnico computacional",
    "diagnóstico redes",
    "contacto servicio informático",
  ],
  openGraph: {
    title: "Contacto | Soporte Informático Profesional",
    description:
      "Contáctanos para recibir soporte técnico especializado y soluciones tecnológicas profesionales.",
    url: "https://soporteinformaticoccp.cl/contacto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Soporte Informático Profesional",
    description:
      "Contáctanos para soporte técnico especializado y desarrollo web profesional.",
  },
};

export default function Contacto() {
  return (
    <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-28 text-[0.85rem] leading-relaxed">

      {/* HERO */}
      <section className="text-center space-y-6 fade-in">

        <h1 className="text-3xl md:text-4xl font-bold">
          Página de{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Contacto
          </span>
        </h1>

        <p className="text-[var(--text-soft)] max-w-3xl mx-auto text-base">
          Estamos disponibles para ayudarte con soporte técnico,
          diagnóstico informático o desarrollo web profesional.
        </p>

      </section>

      {/* GRID CONTACTO */}
      <section className="grid md:grid-cols-3 gap-10">

        {/* WHATSAPP */}
        <div className="glass-card floating-card text-center space-y-4">
          <h2 className="section-title-tech">WhatsApp</h2>

          <p className="text-[var(--text-soft)]">
            Atención directa y rápida para resolver tus necesidades tecnológicas.
          </p>

          <a
            href="https://wa.me/56949398922"
            target="_blank"
            className="relative block text-center px-6 py-3 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-green-500 to-emerald-500
                       shadow-xl shadow-green-500/40
                       hover:scale-105 hover:shadow-green-400/70
                       transition-all duration-300
                       before:absolute before:inset-0 before:rounded-xl
                       before:border before:border-green-400/40
                       before:animate-pulse"
          >
            Enviar Mensaje
          </a>
        </div>

        {/* REDES */}
        <div className="glass-card floating-card text-center space-y-4">
          <h2 className="section-title-tech">Redes Sociales</h2>

          <div className="flex flex-col gap-3">

            <a
              href="https://www.facebook.com/profile.php?id=61555016653115"
              target="_blank"
              className="px-5 py-2 rounded-lg font-medium
                         bg-gradient-to-r from-blue-600 to-blue-500
                         text-white
                         shadow-lg shadow-blue-500/30
                         hover:scale-105 transition-all duration-300"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/soporteinformatico2024/"
              target="_blank"
              className="px-5 py-2 rounded-lg font-medium
                         bg-gradient-to-r from-pink-500 to-purple-500
                         text-white
                         shadow-lg shadow-pink-500/30
                         hover:scale-105 transition-all duration-300"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@soporteinformatico2024"
              target="_blank"
              className="px-5 py-2 rounded-lg font-medium
                         bg-gradient-to-r from-gray-700 to-black
                         text-white
                         shadow-lg shadow-gray-600/30
                         hover:scale-105 transition-all duration-300"
            >
              TikTok
            </a>

            <a
              href="mailto:soporte2024ti@gmail.com"
              className="px-5 py-2 rounded-lg font-medium
                         border border-cyan-400/50
                         text-cyan-300
                         hover:bg-cyan-500 hover:text-white
                         hover:scale-105
                         transition-all duration-300"
            >
              Correo Electrónico
            </a>

          </div>
        </div>

        {/* FORMULARIO */}
        <div className="glass-section floating-card space-y-6">
          <h2 className="section-title-tech text-center">
            Formulario de Contacto
          </h2>

          <form
            action="https://formspree.io/f/TU_ID_AQUI"
            method="POST"
            className="space-y-4"
          >

            <input
              type="text"
              name="name"
              required
              placeholder="Nombre"
              className="w-full bg-white/5 border border-cyan-400/30
                         rounded-lg px-4 py-2.5
                         text-[var(--text-main)]
                         focus:outline-none
                         focus:ring-2 focus:ring-cyan-400
                         transition"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Correo electrónico"
              className="w-full bg-white/5 border border-cyan-400/30
                         rounded-lg px-4 py-2.5
                         text-[var(--text-main)]
                         focus:outline-none
                         focus:ring-2 focus:ring-cyan-400
                         transition"
            />

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Escribe tu mensaje"
              className="w-full bg-white/5 border border-cyan-400/30
                         rounded-lg px-4 py-2.5
                         text-[var(--text-main)]
                         focus:outline-none
                         focus:ring-2 focus:ring-cyan-400
                         transition"
            />

            <button
              type="submit"
              className="relative w-full px-6 py-3 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-blue-500 to-cyan-500
                         shadow-xl shadow-blue-500/40
                         hover:scale-105 hover:shadow-cyan-400/70
                         transition-all duration-300
                         before:absolute before:inset-0 before:rounded-xl
                         before:border before:border-cyan-400/40
                         before:animate-pulse"
            >
              Enviar Mensaje
            </button>

          </form>
        </div>

      </section>

    </main>
  );
}
