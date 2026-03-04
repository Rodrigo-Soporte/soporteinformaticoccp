import Link from "next/link";
import Image from "next/image";
import { posts } from "@/content/blog";

export default function BlogPage() {
  return (
    <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-16 text-[0.85rem]">

      {/* HERO BLOG */}
      <section className="text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Blog <span className="text-cyan-400">Tecnológico</span>
        </h1>

        <p className="text-[var(--text-soft)] max-w-3xl mx-auto">
          Artículos profesionales sobre seguridad informática,
          continuidad operacional y tecnología empresarial.
        </p>

        <p className="text-[var(--text-soft)] max-w-3xl mx-auto">
          En este espacio compartimos conocimiento técnico orientado a
          empresas, pymes y profesionales que buscan comprender mejor
          cómo la tecnología impacta directamente en la estabilidad
          operativa, la seguridad de la información y el crecimiento
          digital de las organizaciones.
        </p>
      </section>

      {/* INTRODUCCIÓN DEL BLOG */}
      <section className="glass-section space-y-6">

        <h2 className="section-title-tech text-center">
          Conocimiento Tecnológico Aplicado a Entornos Reales
        </h2>

        <p className="text-[var(--text-soft)] max-w-4xl mx-auto text-center">
          La tecnología evoluciona constantemente y las empresas necesitan
          adaptarse a nuevos desafíos relacionados con seguridad informática,
          infraestructura digital, desarrollo web y gestión de información.
        </p>

        <p className="text-[var(--text-soft)] max-w-4xl mx-auto text-center">
          Este blog tiene como objetivo entregar contenido técnico claro,
          confiable y orientado a la realidad empresarial, abordando temas
          que permiten comprender mejor cómo proteger los sistemas,
          optimizar recursos tecnológicos y construir infraestructuras
          digitales modernas.
        </p>

        <p className="text-[var(--text-soft)] max-w-4xl mx-auto text-center">
          Cada artículo está pensado para aportar conocimiento práctico
          que ayude a mejorar la estabilidad tecnológica, fortalecer la
          seguridad de la información y facilitar la toma de decisiones
          estratégicas en entornos digitales cada vez más exigentes.
        </p>

      </section>

      {/* LISTADO DE ARTÍCULOS */}
      <section className="grid md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="glass-card floating-card p-6 space-y-4 hover:scale-[1.02] transition-all duration-300"
          >
            {post.cover && (
              <Image
                src={post.cover}
                alt={post.title}
                width={600}
                height={350}
                className="rounded-xl"
              />
            )}

            <div className="text-xs uppercase tracking-wider text-cyan-400">
              {post.category}
            </div>

            <h2 className="text-xl font-semibold">
              {post.title}
            </h2>

            <p className="text-[var(--text-soft)]">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              Leer artículo →
            </Link>
          </article>
        ))}
      </section>

      {/* BLOQUE FINAL BLOG */}
      <section className="glass-section text-center space-y-6">

        <h2 className="section-title-tech">
          Tecnología, Seguridad y Continuidad Operacional
        </h2>

        <p className="text-[var(--text-soft)] max-w-4xl mx-auto">
          La infraestructura tecnológica de una empresa debe ser estable,
          segura y preparada para adaptarse a los cambios constantes del
          entorno digital. Comprender cómo funcionan los sistemas, cómo
          proteger la información y cómo implementar tecnologías modernas
          permite construir organizaciones más resilientes y eficientes.
        </p>

        <p className="text-[var(--text-soft)] max-w-4xl mx-auto">
          A través de este blog seguiremos publicando contenido orientado
          a buenas prácticas tecnológicas, seguridad informática,
          infraestructura empresarial y desarrollo web moderno.
        </p>

      </section>

    </main>
  );
}
