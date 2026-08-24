import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3F5EE", // pale green-cast ivory background
        surface: "#FFFFFF",
        ink: "#33342E", // deep mossy charcoal text
        sage: {
          DEFAULT: "#7C8F6C",
          light: "#A9BBA0",
          dark: "#5B6B4E",
        },
        blush: {
          DEFAULT: "#D98E96",
          light: "#F0C6CA",
        },
        gold: "#E8B95D",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
        tag: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
