"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
  {
    src: "/images/hero.jpeg",
    alt: "Vista principal de la finca",
  },
  {
    src: "/images/gallery-1.jpeg",
    alt: "Piscina de la finca",
  },
  {
    src: "/images/gallery-2.jpeg",
    alt: "Habitación cómoda",
  },
  {
    src: "/images/gallery-3.jpeg",
    alt: "Zona social",
  },
  {
    src: "/images/gallery-4.jpeg",
    alt: "Zona BBQ",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="galeria" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-widest mb-3 text-sm">
            Galería
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Conoce nuestro espacio
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          <div
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => { setIndex(0); setOpen(true); }}
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>

          {galleryImages.slice(1).map((img, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => { setIndex(i + 1); setOpen(true); }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={galleryImages.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  );
}
