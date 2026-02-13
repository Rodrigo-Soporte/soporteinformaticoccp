import Link from "next/link";

export default function Contacto() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-32">

      {/* HERO */}
      <section className="text-center space-y-6 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold">
          Página de <span className="text-sky-600 underline decoration-sky-600">Contacto</span>
        </h1>

        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
          Estamos disponibles para ayudarte con soporte técnico,
          diagnóstico informático o desarrollo web profesional.
        </p>
      </section>

      {/* GRID CONTACTO */}
      <section className="grid md:grid-cols-3 gap-10">

        {/* WHATSAPP */}
        <div className="card floating-card text-center space-y-4">
          <h2 className="section-title">WhatsApp</h2>
          <p className="text-slate-600">
            Atención directa y rápida para resolver tus necesidades tecnológicas.
          </p>
          <a
            href="https://wa.me/56949398922"
            target="_blank"
            className="btn-primary block text-center"
          >
            Enviar Mensaje
          </a>
        </div>

        {/* REDES */}
        <div className="card floating-card text-center space-y-4">
          <h2 className="section-title">Redes Sociales</h2>

          <div className="flex flex-col gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61555016653115"
              target="_blank"
              className="btn-secondary"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/soporteinformatico2024/"
              target="_blank"
              className="btn-secondary"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@soporteinformatico2024"
              target="_blank"
              className="btn-secondary"
            >
              TikTok
            </a>

            <a
              href="mailto:soporte2024ti@gmail.com"
              className="btn-outline"
            >
              Correo Electrónico
            </a>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="card floating-card space-y-6">
          <h2 className="section-title text-center">Formulario de Contacto</h2>

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
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Correo electrónico"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Escribe tu mensaje"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <button type="submit" className="btn-primary w-full">
              Enviar Mensaje
            </button>
          </form>
        </div>

      </section>

    </main>
  );
}

