"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (path: string) =>
    `relative px-4 py-2 font-medium transition-colors duration-300
     ${
       pathname === path
         ? "text-sky-600"
         : "text-slate-800 dark:text-slate-200"
     }
     group`;

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={linkClasses(href)}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-sky-600 transition-all duration-300 ${
          pathname === href
            ? "w-full"
            : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300
      ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 shadow-lg"
          : "bg-white/60 dark:bg-slate-900/60"
      }
      border-b border-slate-200 dark:border-slate-700`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 mx-auto">
          <NavLink href="/" label="Inicio" />
          <NavLink href="/servicios" label="Servicios" />
          <NavLink href="/quienes-somos" label="Quiénes Somos" />
          <NavLink href="/contacto" label="Contacto" />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-800 dark:text-slate-200 focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-current transition-all"></span>
            <span className="block w-6 h-[2px] bg-current transition-all"></span>
            <span className="block w-6 h-[2px] bg-current transition-all"></span>
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg`}
      >
        <div className="flex flex-col items-center py-6 gap-4">
          <NavLink href="/" label="Inicio" />
          <NavLink href="/servicios" label="Servicios" />
          <NavLink href="/quienes-somos" label="Quiénes Somos" />
          <NavLink href="/contacto" label="Contacto" />
        </div>
      </div>
    </header>
  );
}

