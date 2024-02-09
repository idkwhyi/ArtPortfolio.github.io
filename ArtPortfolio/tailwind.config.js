/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#f4f4f4',
      'black': '#464646',
      'custom-black': '#2e2e2e',
      'red': '#ab5b5b',
      'green': '#5bab64',
    },
    extend: {},
  },
  plugins: [],
}

