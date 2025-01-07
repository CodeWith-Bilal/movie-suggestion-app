/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caros: ["Caros-Bold", "sans-serif"],
      },
    },
    screens: {
      input: "360px",
      sm: "640px",
      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
  
      "3xl": "1736px",
      "4xl": "1922px",
    },
  },
  plugins: [],
};
