/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f48e3', // Matches the bright blue buttons
        secondary: '#0a192f', // Dark navy for sections
        accent: '#0d9488', // Teal accent
        surface: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
