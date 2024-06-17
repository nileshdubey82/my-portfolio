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
      },
      animation: {
        'marquee': 'marquee 5s linear infinite',
      },
      keyframes: {
				marquee: {
					'0%': { transform: 'translate3d(var(--move-initial), 0, 0)' },
          '100%': { transform: 'translate3d(var(--move-final), 0, 0)' }
        }
      }
    },
  },
  darkMode: "class",  
  plugins: [
    daisyui
  ],
}

