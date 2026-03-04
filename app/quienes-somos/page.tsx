import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos | Soporte Informático Profesional",
  description:
    "Empresa especializada en soporte informático profesional, diagnóstico computacional, redes de datos y desarrollo web moderno para empresas, pymes y personas.",
  keywords: [
    "empresa soporte informático",
    "soporte técnico profesional",
    "servicios informáticos empresas",
    "infraestructura tecnológica",
    "diagnóstico computacional",
  ],
  openGraph: {
    title: "Quiénes Somos | Soporte Informático Profesional",
    description:
      "Empresa especializada en soporte informático profesional y soluciones tecnológicas para empresas y pymes.",
    url: "https://soporteinformaticoccp.cl/quienes-somos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos | Soporte Informático Profesional",
    description:
      "Empresa especializada en soporte informático profesional y soluciones tecnológicas.",
  },
};

export default function QuienesSomos() {
  return (
    <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-28 text-[0.85rem] leading-relaxed">

      {/* HERO */}
      <section className="text-center space-y-6 fade-in">

        <h1 className="text-3xl md:text-4xl font-bold">
          Quiénes{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Somos
          </span>
        </h1>

        <p className="text-[var(--text-soft)] max-w-3xl mx-auto text-base">
          Somos una empresa especializada en soporte informático
          profesional, comprometida con entregar estabilidad,
          seguridad y continuidad tecnológica a empresas, pymes y personas.
        </p>

      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-10">

          <div className="glass-card floating-card space-y-4">
            <h2 className="section-title-tech">Nuestra Experiencia</h2>
            <p className="text-[var(--text-soft)]">
              Contamos con experiencia en diagnóstico computacional,
              redes de datos, modernización tecnológica y desarrollo
              web profesional utilizando tecnologías actuales.
            </p>
            <p className="text-[var(--text-soft)]">
              Nuestro enfoque técnico nos permite identificar
              oportunidades de mejora y aplicar soluciones
              eficientes alineadas con estándares modernos.
            </p>
          </div>

          <div className="glass-card floating-card space-y-4">
            <h2 className="section-title-tech">Nuestra Filosofía</h2>
            <p className="text-[var(--text-soft)]">
              Creemos que la tecnología debe ser un facilitador del
              crecimiento y no una fuente de problemas.
            </p>
            <p className="text-[var(--text-soft)]">
              Por eso trabajamos de forma preventiva,
              estratégica y cercana con cada cliente.
            </p>
          </div>

        </div>

        <div className="flex justify-center">
          <Image
            src="/quienes-somos.png"
            alt="Equipo de soporte informático"
            width={420}
            height={340}
            className="rounded-xl shadow-2xl transition-all duration-500 hover:scale-105"
          />
        </div>

      </section>

      {/* VALORES */}
      <section className="glass-section floating-card space-y-6">

        <h2 className="section-title-tech text-center">
          Compromiso y Calidad
        </h2>

        <p className="text-[var(--text-soft)] text-center max-w-4xl mx-auto">
          Nuestro compromiso se basa en entregar soluciones tecnológicas
          confiables, escalables y seguras, asegurando continuidad
          operacional y estabilidad en entornos digitales exigentes.
        </p>

        <p className="text-[var(--text-soft)] text-center max-w-4xl mx-auto">
          Trabajamos bajo estándares modernos de calidad, protección
          de datos y optimización de recursos tecnológicos.
        </p>

      </section>

      {/* CTA */}
      <section className="text-center space-y-6 fade-in">

        <h2 className="text-2xl font-bold">
          Construyamos Juntos tu Infraestructura Tecnológica
        </h2>

        <div className="flex justify-center gap-6 pt-4">

          <Link
            href="/servicios"
            className="relative px-6 py-3 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-blue-500 to-cyan-500
                       shadow-xl shadow-blue-500/40
                       hover:scale-110 hover:shadow-cyan-400/70
                       transition-all duration-300
                       before:absolute before:inset-0 before:rounded-xl
                       before:border before:border-cyan-400/40
                       before:animate-pulse"
          >
            Ver Servicios
          </Link>

          <Link
            href="/contacto"
            className="relative px-6 py-3 rounded-xl font-semibold
                       border border-cyan-400/50
                       text-cyan-300
                       hover:bg-cyan-500 hover:text-white
                       hover:scale-110
                       transition-all duration-300
                       shadow-lg shadow-cyan-400/20"
          >
            Contactar
          </Link>

        </div>

        {/* BOTÓN BLOG AGREGADO */}
        <div className="pt-6">
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 text-sm transition underline underline-offset-4"
          >
            Ir al Blog Tecnológico →
          </Link>
        </div>

      </section>

    </main>
  );
}
