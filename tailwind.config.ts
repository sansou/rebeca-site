import type { Config } from "tailwindcss";

const config: Config = {
content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
  colors: {
    primary: "#9DAA7E",
    accent: "#E58934",
    text: "#363435",
    neutral: "#E5E7E9",
    background: "#FEFEFE",
  }
}
  },
  plugins: [],
};

export default config;