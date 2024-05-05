/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    daisyui
  ],
}

