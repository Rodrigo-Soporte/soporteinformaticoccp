"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `relative text-xs transition-all duration-300 px-3 py-1
     ${
       pathname === path
         ? "text-white"
         : "text-slate-400 hover:text-white"
     }`;

  const underlineStyle = (path: string) =>
    `absolute left-0 -bottom-1 h-[1px] bg-sky-400 transition-all duration-300
     ${
       pathname === path
         ? "w-full"
         : "w-0 group-hover:w-full"
     }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
      <nav className="flex items-center gap-8 px-8 py-3 
        backdrop-blur-xl bg-black/50 
        border border-white/10 
        rounded-full shadow-lg">

        {/* INICIO */}
        <Link href="/" className={`group ${linkStyle("/")}`}>
          Inicio
          <span className={underlineStyle("/")} />
        </Link>

        {/* SERVICIOS */}
        <Link href="/servicios" className={`group ${linkStyle("/servicios")}`}>
          Servicios
          <span className={underlineStyle("/servicios")} />
        </Link>

        {/* BLOG */}
        <Link href="/blog" className={`group ${linkStyle("/blog")}`}>
          Blog
          <span className={underlineStyle("/blog")} />
        </Link>

        {/* QUIENES SOMOS */}
        <Link href="/quienes-somos" className={`group ${linkStyle("/quienes-somos")}`}>
          Quiénes Somos
          <span className={underlineStyle("/quienes-somos")} />
        </Link>

        {/* CONTACTO */}
        <Link href="/contacto" className={`group ${linkStyle("/contacto")}`}>
          Contacto
          <span className={underlineStyle("/contacto")} />
        </Link>

      </nav>
    </header>
  );
}
