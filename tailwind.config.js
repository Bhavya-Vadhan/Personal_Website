/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightgrey: "#f3f6f6",
        main: "#134B70"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans - serif'],
      }
    },
  },
  plugins: [],
}

