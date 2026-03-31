import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Soporte Informático",
  description:
    "Servicios profesionales de soporte informático, diagnóstico de redes, continuidad operacional, renovación tecnológica y desarrollo web moderno.",
  keywords: [
    "soporte informático",
    "servicio técnico computacional",
    "diagnóstico redes",
    "continuidad operacional TI",
    "servicios informáticos empresas",
    "desarrollo web profesional",
  ],
  openGraph: {
    title: "Servicios de Soporte Informático",
    description:
      "Servicios profesionales de soporte informático, diagnóstico de redes y continuidad operacional.",
    url: "https://soporteinformaticoccp.cl/servicios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Soporte Informático",
    description:
      "Servicios profesionales de soporte informático, diagnóstico de redes y continuidad operacional.",
  },
};

export default function Servicios() {
  return (
    <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-28 text-[0.85rem] leading-relaxed">

      {/* HERO SERVICIOS */}
      <section className="text-center space-y-6 fade-in">

        <h1 className="text-3xl md:text-4xl font-bold">
          Nuestros{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Servicios
          </span>
        </h1>

        <p className="text-[var(--text-soft)] max-w-3xl mx-auto text-base">
          Ofrecemos soluciones tecnológicas integrales orientadas a garantizar
          continuidad operacional, estabilidad informática y modernización
          digital para empresas, pymes y personas.
        </p>

        <p className="text-[var(--text-soft)] max-w-3xl mx-auto">
          Nuestro enfoque combina experiencia técnica, diagnóstico
          especializado y planificación estratégica para asegurar que
          cada infraestructura tecnológica funcione con eficiencia,
          seguridad y escalabilidad.
        </p>

      </section>

      {/* SERVICIOS GRID */}
      <section className="grid md:grid-cols-2 gap-10">

        <div className="glass-card floating-card space-y-4">
          <h2 className="section-title-tech text-center block w-full">
            Implementación de Nuevas Tecnologías
          </h2>
          <p className="text-[var(--text-soft)]">
            Evaluamos, planificamos e implementamos soluciones tecnológicas
            modernas adaptadas a las necesidades específicas de cada cliente.
          </p>
          <p className="text-[var(--text-soft)]">
            Integramos herramientas actuales, optimizamos infraestructura
            y garantizamos compatibilidad entre sistemas para asegurar
            una transición eficiente y segura.
          </p>
        </div>

        <div className="glass-card floating-card space-y-4">
          <h2 className="section-title-tech text-center block w-full">
            Diagnóstico Computacional y Redes
          </h2>
          <p className="text-[var(--text-soft)]">
            Realizamos análisis técnico profundo de equipos,
            servidores y redes de datos para detectar fallas,
            vulnerabilidades o problemas de rendimiento.
          </p>
          <p className="text-[var(--text-soft)]">
            Implementamos planes de mejora orientados a prevenir
            interrupciones y optimizar recursos tecnológicos.
          </p>
        </div>

        <div className="glass-card floating-card space-y-4">
          <h2 className="section-title-tech text-center block w-full">
            Continuidad Operacional y Renovación Tecnológica
          </h2>
          <p className="text-[var(--text-soft)]">
            Diseñamos estrategias que permiten mantener la operación
            tecnológica activa incluso ante contingencias.
          </p>
          <p className="text-[var(--text-soft)]">
            Gestionamos renovaciones tecnológicas planificadas para
            evitar obsolescencia y mantener competitividad digital.
          </p>
        </div>

        <div className="glass-card floating-card space-y-4">
          <h2 className="section-title-tech text-center block w-full">
            Formateo y Respaldo de Información
          </h2>
          <p className="text-[var(--text-soft)]">
            Realizamos formateo profesional de equipos asegurando
            reinstalación limpia y configuración optimizada.
          </p>
          <p className="text-[var(--text-soft)]">
            Implementamos respaldos seguros para proteger información
            crítica y garantizar recuperación ante incidentes.
          </p>
        </div>

      </section>

      {/* CTA SUBIDO DE POSICIÓN */}
      <section className="text-center space-y-6 fade-in">

        <h2 className="text-2xl font-bold">
          ¿Necesitas Soporte Informático Profesional?
        </h2>

        <p className="text-[var(--text-soft)] max-w-2xl mx-auto">
          Estamos preparados para ayudarte a optimizar, proteger y
          modernizar tu infraestructura tecnológica.
        </p>

        <div className="flex justify-center gap-6 pt-4">

          <Link
            href="/contacto"
            className="relative px-7 py-3 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-blue-500 to-cyan-500
                       shadow-xl shadow-blue-500/40
                       hover:scale-110 hover:shadow-cyan-400/70
                       transition-all duration-300
                       before:absolute before:inset-0 before:rounded-xl
                       before:border before:border-cyan-400/40
                       before:animate-pulse"
          >
            Contactar Ahora
          </Link>

          <Link
            href="/"
            className="relative px-7 py-3 rounded-xl font-semibold
                       border border-cyan-400/50
                       text-cyan-300
                       hover:bg-cyan-500 hover:text-white
                       hover:scale-110
                       transition-all duration-300
                       shadow-lg shadow-cyan-400/20"
          >
            Volver al Inicio
          </Link>

        </div>

        <div className="pt-6">
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 text-sm transition underline underline-offset-4"
          >
            Ir al Blog Tecnológico →
          </Link>
        </div>

      </section>

      {/* DESARROLLO WEB */}
      <section className="glass-section floating-card space-y-6">

        <h2 className="section-title-tech text-center block w-full">
          Desarrollo Web Profesional
        </h2>

        <p className="text-[var(--text-soft)] text-center max-w-4xl mx-auto">
          Creamos páginas web modernas utilizando Next.js y Tailwind CSS,
          aplicando principios de rendimiento, arquitectura de componentes
          y generación estática optimizada.
        </p>

        <p className="text-[var(--text-soft)] text-center max-w-4xl mx-auto">
          Implementamos Server-Side Rendering (SSR), Static Site Generation (SSG)
          y optimización avanzada para motores de búsqueda, asegurando
          velocidad, seguridad y escalabilidad.
        </p>

        <div className="flex justify-center pt-6">
          <Link
            href="/contacto"
            className="relative px-6 py-3 rounded-lg font-semibold text-white 
                       bg-gradient-to-r from-blue-500 to-cyan-500
                       shadow-lg shadow-cyan-500/30
                       hover:scale-105 hover:shadow-cyan-400/60
                       transition-all duration-300
                       before:absolute before:inset-0 before:rounded-lg
                       before:border before:border-cyan-400/40
                       before:animate-pulse"
          >
            Solicitar Desarrollo Web
          </Link>
        </div>

      </section>

      {/* IMAGEN */}
      <section className="glass-section floating-card text-center space-y-6">

        <h2 className="section-title-tech text-center block w-full">
          Infraestructura y Soporte TI
        </h2>

        <p className="text-[var(--text-soft)] max-w-3xl mx-auto">
          La infraestructura y el soporte de TI abarcan el hardware, software, redes y servicios (nube o físicos)
          que permiten el funcionamiento tecnológico de una organización. Incluye la gestión de servidores, almacenamiento,
          seguridad y el soporte técnico para resolver problemas, optimizando el rendimiento y garantizando la continuidad operativa del negocio.
        </p>

        <div className="flex justify-center">
          <Image
            src="/servicios-soporte.png"
            alt="Servicios de soporte informático"
            width={500}
            height={350}
            className="rounded-xl shadow-2xl transition-all duration-500 hover:scale-105"
          />
        </div>

      </section>

    </main>
  );
}
