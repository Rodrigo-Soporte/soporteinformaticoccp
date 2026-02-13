import Image from "next/image";
import Link from "next/link";

export default function Servicios() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-32">

      {/* HERO SERVICIOS */}
      <section className="text-center space-y-6 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold">
          Nuestros <span className="text-sky-600 underline decoration-sky-600">Servicios</span>
        </h1>

        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
          Ofrecemos soluciones tecnológicas integrales orientadas a garantizar
          continuidad operacional, estabilidad informática y modernización
          digital para empresas, pymes y personas.
        </p>

        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Nuestro enfoque combina experiencia técnica, diagnóstico
          especializado y planificación estratégica para asegurar que
          cada infraestructura tecnológica funcione con eficiencia,
          seguridad y escalabilidad.
        </p>
      </section>

      {/* SERVICIOS GRID */}
      <section className="grid md:grid-cols-2 gap-12">

        {/* IMPLEMENTACIÓN */}
        <div className="card floating-card space-y-4">
          <h2 className="section-title">
            Implementación de Nuevas Tecnologías
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Evaluamos, planificamos e implementamos soluciones tecnológicas
            modernas adaptadas a las necesidades específicas de cada cliente.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Integramos herramientas actuales, optimizamos infraestructura
            y garantizamos compatibilidad entre sistemas para asegurar
            una transición eficiente y segura.
          </p>
        </div>

        {/* DIAGNÓSTICO */}
        <div className="card floating-card space-y-4">
          <h2 className="section-title">
            Diagnóstico Computacional y Redes
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Realizamos análisis técnico profundo de equipos,
            servidores y redes de datos para detectar fallas,
            vulnerabilidades o problemas de rendimiento.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Implementamos planes de mejora orientados a prevenir
            interrupciones y optimizar recursos tecnológicos.
          </p>
        </div>

        {/* CONTINUIDAD */}
        <div className="card floating-card space-y-4">
          <h2 className="section-title">
            Continuidad Operacional y Renovación Tecnológica
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Diseñamos estrategias que permiten mantener la operación
            tecnológica activa incluso ante contingencias.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Gestionamos renovaciones tecnológicas planificadas para
            evitar obsolescencia y mantener competitividad digital.
          </p>
        </div>

        {/* FORMATEO */}
        <div className="card floating-card space-y-4">
          <h2 className="section-title">
            Formateo y Respaldo de Información
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Realizamos formateo profesional de equipos asegurando
            reinstalación limpia y configuración optimizada.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Implementamos respaldos seguros para proteger información
            crítica y garantizar recuperación ante incidentes.
          </p>
        </div>

      </section>

      {/* DESARROLLO WEB */}
      <section className="card floating-card space-y-6">

        <h2 className="section-title text-center">
          Desarrollo Web Profesional
        </h2>

        <p className="text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
          Creamos páginas web modernas utilizando Next.js y Tailwind CSS,
          aplicando principios de rendimiento, arquitectura de componentes
          y generación estática optimizada.
        </p>

        <p className="text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
          Implementamos Server-Side Rendering (SSR), Static Site Generation (SSG)
          y optimización avanzada para motores de búsqueda, asegurando
          velocidad, seguridad y escalabilidad.
        </p>

        <div className="flex justify-center pt-6">
          <Link href="/contacto" className="btn-primary">
            Solicitar Desarrollo Web
          </Link>
        </div>

      </section>

      {/* CONTENEDOR PARA TU IMAGEN */}
      <section className="card floating-card text-center space-y-6">
        <h2 className="section-title">
          Infraestructura y Soporte en Acción
        </h2>

        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
          A continuación puedes incorporar una imagen representativa
          de tu equipo técnico, infraestructura tecnológica o servicios
          en terreno para reforzar la confianza visual del cliente.
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

      {/* CTA FINAL */}
      <section className="text-center space-y-6 fade-in">
        <h2 className="text-3xl font-bold">
          ¿Necesitas Soporte Informático Profesional?
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Estamos preparados para ayudarte a optimizar, proteger y
          modernizar tu infraestructura tecnológica.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/contacto" className="btn-primary">
            Contactar Ahora
          </Link>
          <Link href="/" className="btn-outline">
            Volver al Inicio
          </Link>
        </div>
      </section>

    </main>
  );
}

