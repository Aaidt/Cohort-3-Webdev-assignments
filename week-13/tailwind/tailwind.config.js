/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: "selector",
      colors: {
        blue: {
          200: "#7589a0",
          500: "#19385f",
          700: "#00274e" 
        },
        green: {
          200: "#3095a0"
        }
      }
    },
  },
  plugins: [],
}

