"use client";

import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20">
      <Image
        src="/images/hero2.jpeg"
        alt="Finca Guadalupana"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-transparent" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl mb-4 tracking-widest uppercase font-body font-light">
          Finca Vacacional
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Tu escape perfecto en la naturaleza
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 font-body font-light max-w-2xl mx-auto">
          Disfruta de tranquilidad, aire puro y momentos inolvidables con tu familia y amigos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#reservar"
            className="bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Reservar Ahora
          </a>
          <a
            href="#galeria"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border border-white/40"
          >
            Ver Galería
          </a>
        </div>
      </div>

      <div className="absolute bottom-20 left-0 right-0 z-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "15", label: "Personas" },
            { value: "4", label: "Habitaciones" },
            { value: "1h", label: "De Medellín" },
            { value: "4.9", label: "Calificación", icon: <Star size={16} className="inline text-yellow-400 fill-yellow-400" /> },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center text-white"
            >
              <div className="text-2xl sm:text-3xl font-bold font-heading">
                {stat.value} {stat.icon}
              </div>
              <div className="text-sm font-body font-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#amenidades"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
