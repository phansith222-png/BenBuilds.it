import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ink": "#1A1A1A",
        "paper": "#F5F5F5",
        "gray-panel": "#D9D9D9",
        "black-panel": "#000000",
        "text-gray-main": "#1A1A1A",
        "text-gray-sub": "#4A4A4A",
        "text-black-main": "#FFFFFF",
        "text-black-sub": "#A3A3A3",
        "orange-accent": "#FD6F00",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
