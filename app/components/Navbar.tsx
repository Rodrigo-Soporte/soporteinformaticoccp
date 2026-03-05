"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkStyle = (path: string) =>
    `relative transition-all duration-300 px-3 py-2 text-sm ${
      pathname === path
        ? "text-white"
        : "text-slate-400 hover:text-white"
    }`;

  const underlineStyle = (path: string) =>
    `absolute left-0 -bottom-1 h-[1px] bg-sky-400 transition-all duration-300 ${
      pathname === path ? "w-full" : "w-0 group-hover:w-full"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">

      {/* NAV DESKTOP */}
      <nav
        className="
        hidden md:flex
        items-center gap-8 px-8 py-3
        backdrop-blur-xl bg-black/50
        border border-white/10
        rounded-full shadow-lg
      "
      >
        <Link href="/" className={`group ${linkStyle("/")}`}>
          Inicio
          <span className={underlineStyle("/")} />
        </Link>

        <Link href="/servicios" className={`group ${linkStyle("/servicios")}`}>
          Servicios
          <span className={underlineStyle("/servicios")} />
        </Link>

        <Link href="/blog" className={`group ${linkStyle("/blog")}`}>
          Blog
          <span className={underlineStyle("/blog")} />
        </Link>

        <Link href="/quienes-somos" className={`group ${linkStyle("/quienes-somos")}`}>
          Quiénes Somos
          <span className={underlineStyle("/quienes-somos")} />
        </Link>

        <Link href="/contacto" className={`group ${linkStyle("/contacto")}`}>
          Contacto
          <span className={underlineStyle("/contacto")} />
        </Link>
      </nav>

      {/* NAV MOBILE */}
      <div className="md:hidden w-full flex justify-between items-center px-6">

        {/* LOGO TEXTO */}
        <span className="text-white font-semibold text-sm">
          Soporte TI
        </span>

        {/* BOTON HAMBURGUESA */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* MENU MOBILE */}
      {open && (
        <div
          className="
          absolute top-16 w-[90%]
          backdrop-blur-xl bg-black/80
          border border-white/10
          rounded-xl shadow-xl
          md:hidden
          flex flex-col
          text-center
          py-4
        "
        >
          <Link href="/" className="py-2 text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
            Inicio
          </Link>

          <Link href="/servicios" className="py-2 text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
            Servicios
          </Link>

          <Link href="/blog" className="py-2 text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
            Blog
          </Link>

          <Link href="/quienes-somos" className="py-2 text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
            Quiénes Somos
          </Link>

          <Link href="/contacto" className="py-2 text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
            Contacto
          </Link>
        </div>
      )}

    </header>
  );
}
