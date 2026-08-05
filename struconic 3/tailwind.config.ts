import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f6",
          100: "#d7dde8",
          200: "#a9b6cc",
          300: "#7a8daf",
          400: "#455876",
          500: "#233450",
          600: "#182742",
          700: "#14213D",
          800: "#0F1A31",
          900: "#0B1626",
          950: "#070E1A"
        },
        gold: {
          50: "#fbf6ed",
          100: "#f3e6cc",
          200: "#e6cd9d",
          300: "#d9b56f",
          400: "#D4AF7A",
          500: "#B08D57",
          600: "#8C6D3F",
          700: "#6c5330",
          800: "#4c3a22",
          900: "#2f2415"
        },
        paper: {
          DEFAULT: "#F7F6F3",
          dark: "#0B1626"
        }
      },
      fontFamily: {
        heading: ["var(--font-cairo)", "sans-serif"],
        body: ["var(--font-tajawal)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 22, 38, 0.18)",
        card: "0 4px 24px -8px rgba(11, 22, 38, 0.12)"
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, #B08D57, transparent)"
      }
    }
  },
  plugins: []
};

export default config;
