"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else if (stored === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setDark(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
    >
      {dark ? "☀️ Claro" : "🌙 Oscuro"}
    </button>
  );
}

