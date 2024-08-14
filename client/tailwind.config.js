/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Jost', 'sans']
      },
      colors: {
        primary: '#3452FF',
        secondary: '#2A2A2A',
        text: '#A6A4A6'
      },
      fontWeight: {
        'extra-light': '20',
      }
    },
  },
  plugins: [
  ],
}

