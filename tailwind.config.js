/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Coolvetica', 'sans-serif'],
      heavy: ['Coolvetica Heavy', 'sans-serif'],
    },
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
  },
  plugins: [],
}
