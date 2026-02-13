import Image from "next/image";
import Link from "next/link";

export default function QuienesSomos() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-32">

      {/* HERO */}
      <section className="text-center space-y-6 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold">
          Quiénes <span className="text-sky-600 underline decoration-sky-600">Somos</span>
        </h1>

        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
          Somos una empresa especializada en soporte informático
          profesional, comprometida con entregar estabilidad,
          seguridad y continuidad tecnológica a empresas, pymes y personas.
        </p>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <div className="card floating-card space-y-4">
            <h2 className="section-title">Nuestra Experiencia</h2>
            <p className="text-slate-600 leading-relaxed">
              Contamos con experiencia en diagnóstico computacional,
              redes de datos, modernización tecnológica y desarrollo
              web profesional utilizando tecnologías actuales.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nuestro enfoque técnico nos permite identificar
              oportunidades de mejora y aplicar soluciones
              eficientes alineadas con estándares modernos.
            </p>
          </div>

          <div className="card floating-card space-y-4">
            <h2 className="section-title">Nuestra Filosofía</h2>
            <p className="text-slate-600 leading-relaxed">
              Creemos que la tecnología debe ser un facilitador del
              crecimiento y no una fuente de problemas.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Por eso trabajamos de forma preventiva,
              estratégica y cercana con cada cliente.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/quienes-somos.png"
            alt="Equipo de soporte informático"
            width={500}
            height={400}
            className="rounded-xl shadow-2xl transition-all duration-500 hover:scale-105"
          />
        </div>

      </section>

      {/* VALORES */}
      <section className="card floating-card space-y-6">
        <h2 className="section-title text-center">Compromiso y Calidad</h2>

        <p className="text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
          Nuestro compromiso se basa en entregar soluciones tecnológicas
          confiables, escalables y seguras, asegurando continuidad
          operacional y estabilidad en entornos digitales exigentes.
        </p>

        <p className="text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
          Trabajamos bajo estándares modernos de calidad, protección
          de datos y optimización de recursos tecnológicos.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center space-y-6 fade-in">
        <h2 className="text-3xl font-bold">
          Construyamos Juntos tu Infraestructura Tecnológica
        </h2>

        <div className="flex justify-center gap-4">
          <Link href="/servicios" className="btn-primary">
            Ver Servicios
          </Link>
          <Link href="/contacto" className="btn-outline">
            Contactar
          </Link>
        </div>
      </section>

    </main>
  );
}

