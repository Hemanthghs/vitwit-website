/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'tablet': '900px',
      'lg': '1300px',
      'xl': '1500px',
      '2xl': '1700px',
      'mobile': '450px',
      'custom-1': '1400px',
      'custom-2': '1000px',
      'custom-3': '1300px'
    }
  },
  plugins: [],
};
