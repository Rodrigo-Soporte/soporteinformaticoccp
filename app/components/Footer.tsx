import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* EMPRESA */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white underline decoration-sky-600">
            Soporte Informático Profesional
          </h3>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
            Empresa especializada en soluciones tecnológicas integrales
            para empresas, pymes y personas. Brindamos soporte
            informático confiable, diagnóstico técnico avanzado,
            continuidad operacional y desarrollo web moderno.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
            Nuestro compromiso es garantizar estabilidad, seguridad y
            rendimiento en cada implementación tecnológica.
          </p>
        </div>

        {/* SERVICIOS */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white underline decoration-sky-600">
            Servicios
          </h3>

          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>• Implementación de nuevas tecnologías</li>
            <li>• Diagnóstico computacional y redes</li>
            <li>• Continuidad operacional</li>
            <li>• Renovación tecnológica</li>
            <li>• Formateo y respaldo de información</li>
            <li>• Desarrollo web en Next.js + Tailwind CSS</li>
          </ul>
        </div>

        {/* NAVEGACIÓN */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white underline decoration-sky-600">
            Navegación
          </h3>

          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <Link href="/" className="hover:text-sky-600 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-sky-600 transition-colors">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/quienes-somos" className="hover:text-sky-600 transition-colors">
                Quiénes Somos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-sky-600 transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACTO + CTA */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white underline decoration-sky-600">
            Información de Contacto
          </h3>

          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>📞 +56 9 4939 8922</li>
            <li>📧 soporte2024ti@gmail.com</li>
            <li>📍 Atención remota y presencial</li>
          </ul>

          <div className="pt-4">
            <Link
              href="/contacto"
              className="btn-primary w-full text-center block"
            >
              Solicitar Soporte
            </Link>
          </div>
        </div>

      </div>

      {/* SECCIÓN INFERIOR */}
      <div className="border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Soporte Informático Profesional. 
            Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-xs text-slate-500 dark:text-slate-400">
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Política de Privacidad
            </span>
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Términos y Condiciones
            </span>
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Protección de Datos
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
}

