/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],  // DaisyUI plugin must be here
  daisyui: {
    themes: ["dark", "light"],    // or your custom themes
  },
};