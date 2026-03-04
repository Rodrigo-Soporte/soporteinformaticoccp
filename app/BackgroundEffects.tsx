"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  top: number;
  left: number;
  duration: number;
  type: "blue" | "cyan";
}

export default function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {

    const generated: Particle[] = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 6 + Math.random() * 6,
      type: i % 2 === 0 ? "blue" : "cyan",
    }));

    setParticles(generated);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const particles = document.querySelectorAll(".particle");

      particles.forEach((p, index) => {
        const speed = (index % 5) * 0.3;
        (p as HTMLElement).style.transform =
          `translateY(${scrollY * speed}px)`;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const squares = document.querySelectorAll(".square");

      squares.forEach((square, index) => {
        const speed = (index + 1) * 0.05;
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;
        (square as HTMLElement).style.transform =
          `translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
    <>
      {/* RADAR */}
      <div className="radar" />

      {/* ONDA */}
      <div className="wave" />

      {/* CIRCUITO */}
      <div className="circuit" />

      {/* CUADRADOS */}
      <div className="square" style={{ top: "15%", left: "10%" }} />
      <div className="square" style={{ top: "60%", left: "80%" }} />
      <div className="square" style={{ top: "40%", left: "50%" }} />

      {/* PARTÍCULAS */}
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.type}`}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </>
  );
}
