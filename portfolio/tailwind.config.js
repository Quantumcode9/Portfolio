/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-base': '1.25rem',
      },
    },
  },
  plugins: [],
};