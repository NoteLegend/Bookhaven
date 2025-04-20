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
        primary: {
          light: '#60a5fa',
          dark: '#3b82f6',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
