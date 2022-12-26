/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bl-100':'#202024',
        'bl-50':'#29292E',
        'gr-100': '#00875F'
      }
    },
  },
  plugins: [],
}