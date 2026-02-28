import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9DAA7E",       // Verde institucional
        accent: "#E58934",        // Laranja CTA
        dark: "#363435",          // Texto principal
        light: "#0000FF",         // Branco base
        soft: "#E5E7E9",          // Fundo suave
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;