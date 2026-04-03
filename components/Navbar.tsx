"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#galeria", label: "Galería" },
  { href: "#tarifas", label: "Tarifas" },
  { href: "#disponibilidad", label: "Disponibilidad" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="#inicio" className="font-heading text-xl sm:text-2xl text-primary font-bold">
            Finca Guadalupana
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#reservar"
              className="bg-primary hover:bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Reservar
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#reservar"
              onClick={() => setIsOpen(false)}
              className="block bg-primary text-white text-center px-5 py-3 rounded-full font-semibold"
            >
              Reservar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
