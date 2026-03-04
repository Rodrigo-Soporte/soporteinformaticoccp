import { posts } from "@/content/blog";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: `${post.title} | Blog Tecnológico`,
    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://soporteinformaticoccp.cl/blog/${post.slug}`,
      images: post.cover ? [post.cover] : [],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : [],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="relative z-10 max-w-4xl mx-auto px-6 py-24 space-y-12 text-[0.9rem] leading-relaxed">

      {post.cover && (
        <Image
          src={post.cover}
          alt={post.title}
          width={1000}
          height={500}
          className="rounded-xl"
        />
      )}

      <div className="text-xs uppercase tracking-wider text-cyan-400">
        {post.category}
      </div>

      <h1 className="text-3xl font-bold">{post.title}</h1>

      <p className="text-sm text-[var(--text-soft)]">{post.date}</p>

      <article className="glass-section p-8 rounded-2xl space-y-6">
        {post.content}
      </article>

      <div className="glass-card p-6 rounded-2xl text-center space-y-4 mt-12">
        <h3 className="text-xl font-semibold">
          ¿Necesitas ayuda profesional?
        </h3>

        <p className="text-[var(--text-soft)]">
          Si quieres implementar estas soluciones en tu empresa,
          podemos ayudarte con soporte técnico especializado.
        </p>

        <a
          href="/contacto"
          className="inline-block px-6 py-3 rounded-xl font-semibold text-white
                     bg-gradient-to-r from-blue-500 to-cyan-500
                     shadow-xl shadow-blue-500/40
                     hover:scale-105 hover:shadow-cyan-400/70
                     transition-all duration-300"
        >
          Solicitar Soporte Profesional
        </a>
      </div>

    </main>
  );
}
