/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        morica: {
          light: '#D9F99D',
          DEFAULT: '#84CC16',
          dark: '#65A30D',
          darker: '#3F6212',
        },
        forest: {
          DEFAULT: '#14532D',
          dark: '#052E16',
        },
        cream: {
          light: '#FEFCE8',
          DEFAULT: '#FDFBF7',
          dark: '#FEF08A',
        },
        coconut: {
          DEFAULT: '#92400E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'leaf-pattern': "url('/images/backgrounds/leaf-pattern.svg')",
      }
    },
  },
  plugins: [],
}