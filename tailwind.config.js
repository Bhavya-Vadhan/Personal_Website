/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgrey: "#f3f6f6",
        main: "#1b74e4"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans - serif'],
      }
    },
  },
  plugins: [],
}

