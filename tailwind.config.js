/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Odibee': ['Odibee Sans', 'cursive'],
        'baloo': ['"Baloo 2"', 'cursive'],
      }
    },
  },
  plugins: [],
}
