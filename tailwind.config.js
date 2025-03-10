/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Dark background
        secondary: '#2d3748', // Darker background for sections
        accent: '#4a5568', // Accent color
      },
    },
  },
  plugins: [],
}
