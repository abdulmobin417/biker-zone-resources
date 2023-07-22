/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "411px",
        sm: "540px",
        smd: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
