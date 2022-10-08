const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Altone", ...defaultTheme.fontFamily.serif],
        AltoneBold: ["Altone Bold", ...defaultTheme.fontFamily.serif],
        lato: ["Lato", ...defaultTheme.fontFamily.serif],
        heading: ["Sora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        light: "#EDEDED",
        primary: "#ff2036",
        accent: "#04CDEC",
        darkBlue: "#1113C2",
      },
    },
  },
  plugins: [],
};
