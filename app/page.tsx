import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative z-10 text-[0.85rem]">

      {/* HERO */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          <div className="space-y-6">

            <p className="text-xs tracking-widest text-green-600 dark:text-cyan-400 font-semibold">
              SOLUCIONES TECNOLÓGICAS PROFESIONALES
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Soporte Informático <br />
              <span className="text-green-700 dark:text-blue-400">
                Profesional y Confiable
              </span>
            </h1>

            <p className="opacity-80 leading-relaxed">
              Somos una empresa especializada en soporte informático integral, orientada a empresas, pymes y personas que necesitan estabilidad tecnológica, continuidad operacional y crecimiento digital seguro.
            </p>

            <p className="opacity-80 leading-relaxed">
              Entendemos que la tecnología es el núcleo operativo de cualquier organización moderna. Por ello, ofrecemos soluciones técnicas personalizadas que permiten mantener la infraestructura informática optimizada, protegida y alineada con los objetivos estratégicos del negocio.
            </p>

            <p className="opacity-80 leading-relaxed">
              Nuestro enfoque combina diagnóstico preventivo, implementación de mejoras continuas y asesoría tecnológica especializada para reducir riesgos, aumentar productividad y garantizar un funcionamiento eficiente de los sistemas.
            </p>

            <ul className="space-y-2 pt-2 opacity-90">
              <li>✔ Continuidad operacional garantizada</li>
              <li>✔ Diagnóstico técnico especializado</li>
              <li>✔ Soporte remoto y presencial</li>
              <li>✔ Desarrollo web moderno y escalable</li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-4">

              <Link
                href="/servicios"
                className="bg-green-600 dark:bg-blue-500 hover:bg-green-700 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition"
              >
                Ver Servicios
              </Link>

              <Link
                href="/contacto"
                className="border border-green-600 text-green-700 dark:border-blue-400 dark:text-blue-400 hover:bg-green-600 hover:text-white dark:hover:bg-blue-500 transition px-4 py-2 rounded-md text-sm"
              >
                Contáctanos
              </Link>

              <Link
                href="/quienes-somos"
                className="opacity-70 hover:opacity-100 transition px-4 py-2 text-sm"
              >
                Quiénes Somos
              </Link>

            </div>

            <div className="pt-4">
              <Link
                href="/blog"
                className="text-green-700 dark:text-blue-400 hover:text-green-600 dark:hover:text-blue-300 text-sm transition underline underline-offset-4"
              >
                Ir al Blog Tecnológico →
              </Link>
            </div>

          </div>

          <div className="flex justify-center items-start">
            <Image
              src="/soporte-informatico.png"
              alt="Soporte informático profesional"
              width={520}
              height={620}
              priority
              className="rounded-lg shadow-xl transition duration-500 hover:scale-105 object-cover"
            />
          </div>

        </div>
      </section>

      {/* BLOQUES */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        <article className="glass-card">
          <h2 className="section-title-tech">Nuestra Misión</h2>
          <p className="opacity-80 leading-relaxed">
            Asegurar que la tecnología funcione como un pilar estratégico para nuestros clientes, entregando soporte confiable, preventivo y alineado con los objetivos operacionales.
          </p>
          <p className="opacity-80 mt-4 leading-relaxed">
            Trabajamos para minimizar tiempos de inactividad, mejorar el rendimiento de los sistemas y proporcionar estabilidad continua en entornos tecnológicos cada vez más exigentes.
          </p>
        </article>

        <article className="glass-card">
          <h2 className="section-title-tech">Experiencia Técnica</h2>
          <p className="opacity-80 leading-relaxed">
            Contamos con experiencia en diagnóstico de equipamiento computacional, redes de datos, renovación tecnológica, respaldo de información y desarrollo web profesional.
          </p>
          <p className="opacity-80 mt-4 leading-relaxed">
            Implementamos soluciones modernas utilizando tecnologías actuales como Next.js, Tailwind CSS y arquitecturas optimizadas para rendimiento y escalabilidad.
          </p>
        </article>

        <article className="glass-card">
          <h2 className="section-title-tech">Enfoque Profesional</h2>
          <p className="opacity-80 leading-relaxed">
            Nuestra metodología se basa en análisis técnico detallado, planificación estratégica y ejecución eficiente de cada proyecto.
          </p>
          <p className="opacity-80 mt-4 leading-relaxed">
            Nos posicionamos como un socio tecnológico de confianza, brindando soporte cercano, comunicación clara y soluciones adaptadas a cada tipo de cliente.
          </p>
        </article>

      </section>

      {/* BLOQUE AUTORIDAD */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="glass-section space-y-4">

          <h2 className="section-title-tech">
            Soporte Informático Integral para un Entorno Digital Exigente
          </h2>

          <p className="opacity-80 leading-relaxed">
            En un entorno empresarial donde la tecnología es clave para la productividad, contar con un servicio de soporte informático profesional permite anticipar problemas, optimizar recursos y proteger la información crítica.
          </p>

          <p className="opacity-80 leading-relaxed">
            Ofrecemos soluciones que abarcan desde la implementación de nuevas tecnologías hasta la modernización de sistemas existentes, garantizando compatibilidad, seguridad y rendimiento óptimo en todos los dispositivos: computadores, tablets, dispositivos móviles y navegadores modernos.
          </p>

          <p className="opacity-80 leading-relaxed">
            Nuestro compromiso es proporcionar soporte técnico confiable, soluciones escalables y una infraestructura tecnológica preparada para los desafíos actuales y futuros.
          </p>

        </div>
      </section>

    </main>
  );
}
