import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finca Guadalupana | Finca Vacacional en Colombia",
  description:
    "Escape a la naturaleza en Finca Guadalupana. Finca vacacional con piscina, jardines, BBQ y más. Ideal para familias y grupos hasta 15 personas.",
  keywords: [
    "finca vacacional",
    "arriendo finca",
    "finca piscina",
    "escapada fin de semana",
    "Colombia",
    "Medellín",
  ],
  openGraph: {
    title: "Finca Guadalupana | Finca Vacacional",
    description:
      "Tu escape perfecto en la naturaleza. Piscina, jardines, BBQ y más.",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Finca Guadalupana",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
