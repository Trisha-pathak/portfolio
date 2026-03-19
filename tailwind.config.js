/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* CSS variable driven */
        bg: "rgb(var(--bg))",
        text: "rgb(var(--text))",

        primary: "#222831",
        secondary: "#393E46",
        accent: "#948979",
        soft: "#DFD0B8",
      },
    },
  },
  plugins: [],
};