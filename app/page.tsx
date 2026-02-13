import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-32">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 fade-in">
          <p className="text-sm font-semibold text-sky-600 tracking-wide">
            SOLUCIONES TECNOLÓGICAS PROFESIONALES
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Soporte Informático <br />
            <span className="text-sky-600 underline decoration-sky-600">
              Profesional y Confiable
            </span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Somos una empresa especializada en soporte informático
            integral, orientada a empresas, pymes y personas que
            necesitan estabilidad tecnológica, continuidad operacional
            y crecimiento digital seguro.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Entendemos que la tecnología es el núcleo operativo de
            cualquier organización moderna. Por ello, ofrecemos
            soluciones técnicas personalizadas que permiten mantener
            la infraestructura informática optimizada, protegida y
            alineada con los objetivos estratégicos del negocio.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Nuestro enfoque combina diagnóstico preventivo,
            implementación de mejoras continuas y asesoría tecnológica
            especializada para reducir riesgos, aumentar productividad
            y garantizar un funcionamiento eficiente de los sistemas.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 text-slate-700 pt-2">
            <li>✔ Continuidad operacional garantizada</li>
            <li>✔ Diagnóstico técnico especializado</li>
            <li>✔ Soporte remoto y presencial</li>
            <li>✔ Desarrollo web moderno y escalable</li>
          </ul>

          <div className="flex flex-wrap gap-4 pt-6">
            <Link href="/servicios" className="btn-primary">
              Ver Servicios
            </Link>
            <Link href="/contacto" className="btn-secondary">
              Contáctanos
            </Link>
            <Link href="/quienes-somos" className="btn-outline">
              Quiénes Somos
            </Link>
          </div>
        </div>

        <div className="flex justify-center fade-in">
          <Image
            src="/soporte-informatico.png"
            alt="Soporte informático profesional"
            width={540}
            height={540}
            priority
            sizes="(max-width: 768px) 90vw, 540px"
            className="rounded-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1"
          />
        </div>

      </section>

      {/* BLOQUES PRINCIPALES */}
      <section className="grid md:grid-cols-3 gap-10">

        <article className="card floating-card">
          <h2 className="section-title">Nuestra Misión</h2>
          <p className="text-slate-600 leading-relaxed">
            Asegurar que la tecnología funcione como un pilar estratégico
            para nuestros clientes, entregando soporte confiable,
            preventivo y alineado con los objetivos operacionales.
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Trabajamos para minimizar tiempos de inactividad, mejorar
            el rendimiento de los sistemas y proporcionar estabilidad
            continua en entornos tecnológicos cada vez más exigentes.
          </p>
        </article>

        <article className="card floating-card">
          <h2 className="section-title">Experiencia Técnica</h2>
          <p className="text-slate-600 leading-relaxed">
            Contamos con experiencia en diagnóstico de equipamiento
            computacional, redes de datos, renovación tecnológica,
            respaldo de información y desarrollo web profesional.
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Implementamos soluciones modernas utilizando tecnologías
            actuales como Next.js, Tailwind CSS y arquitecturas
            optimizadas para rendimiento y escalabilidad.
          </p>
        </article>

        <article className="card floating-card">
          <h2 className="section-title">Enfoque Profesional</h2>
          <p className="text-slate-600 leading-relaxed">
            Nuestra metodología se basa en análisis técnico detallado,
            planificación estratégica y ejecución eficiente de cada
            proyecto.
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Nos posicionamos como un socio tecnológico de confianza,
            brindando soporte cercano, comunicación clara y soluciones
            adaptadas a cada tipo de cliente.
          </p>
        </article>

      </section>

      {/* BLOQUE AUTORIDAD Y SEO */}
      <section className="card floating-card">
        <h2 className="section-title">
          Soporte Informático Integral para un Entorno Digital Exigente
        </h2>

        <p className="text-slate-600 leading-relaxed mb-4">
          En un entorno empresarial donde la tecnología es clave para
          la productividad, contar con un servicio de soporte
          informático profesional permite anticipar problemas,
          optimizar recursos y proteger la información crítica.
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Ofrecemos soluciones que abarcan desde la implementación de
          nuevas tecnologías hasta la modernización de sistemas
          existentes, garantizando compatibilidad, seguridad y
          rendimiento óptimo en todos los dispositivos: computadores,
          tablets, dispositivos móviles y navegadores modernos.
        </p>

        <p className="text-slate-600 leading-relaxed">
          Nuestro compromiso es proporcionar soporte técnico confiable,
          soluciones escalables y una infraestructura tecnológica
          preparada para los desafíos actuales y futuros.
        </p>
      </section>

    </main>
  );
}

