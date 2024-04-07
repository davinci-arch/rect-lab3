/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      dropShadow: {
        text: '2px 1px #000',
        code_text: '1px 1px #000'
      },
    },
  },
  plugins: [],
}

