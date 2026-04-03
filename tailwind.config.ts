import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B6D11",
          50: "#f0f7e6",
          100: "#ddefc8",
          200: "#bddf97",
          300: "#96cb5c",
          400: "#74b430",
          500: "#3B6D11",
          600: "#30580d",
          700: "#26440a",
          800: "#1c3208",
          900: "#122005",
        },
        accent: {
          DEFAULT: "#BA7517",
          50: "#fdf5e8",
          100: "#fae8c8",
          200: "#f5cf8e",
          300: "#eeb150",
          400: "#d99425",
          500: "#BA7517",
          600: "#9a5d12",
          700: "#7a470f",
          800: "#5a330b",
          900: "#3a2007",
        },
        background: "#f9f6f0",
        footer: "#4A1B0C",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
