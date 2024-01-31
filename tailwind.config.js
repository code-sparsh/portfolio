/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'cyberway' : ['Cyberway', 'Inter', 'sans-serif'],  // after your font, add some fonts separated by commas to handle fallback.
      }
  },
  },
  plugins: [],
}

