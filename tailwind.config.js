/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mountain: {
          "primary": "#A5B4CB",
          "secondary": "#A39EC4",
          "accent": "#C49EC4",
          "neutral": "#262626",
          "base-100": "#0f0f0f",
          "info": "#9CD2E3",
          "success": "#8AAC8B",
          "warning": "#C6A679",
          "error": "#CA8A8C",
        },
      },
    ],
  },
}