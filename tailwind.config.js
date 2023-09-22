/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'tablet': '900px',
      'lg': '1100px',
      'mobile': '450px'
    }
  },
  plugins: [],
};
