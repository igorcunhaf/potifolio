/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  // (opcional) escolha ou crie temas
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        mytheme: {
          "primary": "#4f46e5",
          "secondary": "#9333ea",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
