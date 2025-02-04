/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vilaka: ['Vilaka', 'serif'],
        vietnam: ['Be Vietnam', 'sans-serif'],
      },
    },
  },
  plugins: [],
}