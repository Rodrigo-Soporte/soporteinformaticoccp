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
        : "text-slate-300 hover:text-white"
    }`;

  const underlineStyle = (path: string) =>
    `absolute left-0 -bottom-1 h-[1px] bg-cyan-400 transition-all duration-300 ${
      pathname === path ? "w-full" : "w-0 group-hover:w-full"
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">

        {/* DESKTOP NAV */}
        <nav
          className="
          hidden md:flex
          items-center gap-8 px-8 py-3
          bg-black/60
          border border-white/10
          nav-glow
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

        {/* MOBILE */}
        <div className="md:hidden w-full flex justify-between items-center px-6 py-3 rounded-full
                        bg-gray-300/80 dark:bg-black/60 backdrop-blur-xl border border-gray-400 dark:border-white/10">

          <span className="font-semibold text-sm text-gray-900 dark:text-white">
            Soporte TI
          </span>

          <button
            onClick={() => setOpen(true)}
            className="text-gray-900 dark:text-white text-2xl"
          >
            ☰
          </button>

        </div>

      </header>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      <div
        className={`
        fixed top-0 right-0 h-full w-[260px]
        z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}

        bg-gray-200 dark:bg-[#0b1120]
        border-l border-gray-400 dark:border-slate-700
        shadow-xl
        p-8
        flex flex-col gap-6
      `}
      >

        <button
          onClick={() => setOpen(false)}
          className="self-end text-xl text-gray-900 dark:text-white"
        >
          ✕
        </button>

        <Link href="/" onClick={() => setOpen(false)}
          className="text-gray-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition">
          Inicio
        </Link>

        <Link href="/servicios" onClick={() => setOpen(false)}
          className="text-gray-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition">
          Servicios
        </Link>

        <Link href="/blog" onClick={() => setOpen(false)}
          className="text-gray-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition">
          Blog
        </Link>

        <Link href="/quienes-somos" onClick={() => setOpen(false)}
          className="text-gray-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition">
          Quiénes Somos
        </Link>

        <Link href="/contacto" onClick={() => setOpen(false)}
          className="text-gray-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition">
          Contacto
        </Link>

      </div>
    </>
  );
}
