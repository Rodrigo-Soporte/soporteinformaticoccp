import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-slate-800 bg-gradient-to-b from-[#0f1c2e] to-[#0b1624] text-slate-300">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-14">

        {/* COLUMNA 1 */}
        <div className="space-y-5">
          <h3 className="text-white font-semibold text-lg underline underline-offset-4">
            Soporte Informático Profesional
          </h3>

          <p className="text-sm leading-relaxed text-slate-400">
            Empresa especializada en soluciones tecnológicas integrales para empresas, pymes y personas. 
            Brindamos soporte informático confiable, diagnóstico técnico avanzado, continuidad operacional y desarrollo web moderno.
          </p>

          <p className="text-sm leading-relaxed text-slate-400">
            Nuestro compromiso es garantizar estabilidad, seguridad y rendimiento en cada implementación tecnológica.
          </p>
        </div>

        {/* COLUMNA 2 */}
        <div className="space-y-5">
          <h3 className="text-white font-semibold text-lg underline underline-offset-4">
            Servicios
          </h3>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>• Implementación de nuevas tecnologías</li>
            <li>• Diagnóstico computacional y redes</li>
            <li>• Continuidad operacional</li>
            <li>• Renovación tecnológica</li>
            <li>• Formateo y respaldo de información</li>
            <li>• Desarrollo web en Next.js + Tailwind CSS</li>
          </ul>
        </div>

        {/* COLUMNA 3 */}
        <div className="space-y-5">
          <h3 className="text-white font-semibold text-lg underline underline-offset-4">
            Navegación
          </h3>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-cyan-400 transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-cyan-400 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/quienes-somos" className="hover:text-cyan-400 transition">
                Quiénes Somos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-cyan-400 transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMNA 4 */}
        <div className="space-y-5">
          <h3 className="text-white font-semibold text-lg underline underline-offset-4">
            Información de Contacto
          </h3>

          <div className="space-y-3 text-sm text-slate-400">
            <p>📞 +56 9 4939 8922</p>
            <p>📧 soporte2024ti@gmail.com</p>
            <p>📍 Atención remota y presencial</p>
          </div>

          <div className="pt-4">
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 rounded-full font-semibold text-white
                         bg-gradient-to-r from-cyan-500 to-blue-500
                         shadow-lg shadow-cyan-500/30
                         hover:scale-105 hover:shadow-cyan-400/60
                         transition-all duration-300"
            >
              Solicitar Soporte
            </Link>
          </div>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div className="border-t border-slate-800 py-6 px-6 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">

        <p>
          © {new Date().getFullYear()} Soporte Informático Profesional. Todos los derechos reservados.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-cyan-400 transition">
            Política de Privacidad
          </Link>
          <Link href="#" className="hover:text-cyan-400 transition">
            Términos y Condiciones
          </Link>
          <Link href="#" className="hover:text-cyan-400 transition">
            Protección de Datos
          </Link>
        </div>

      </div>

    </footer>
  );
}
