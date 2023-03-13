/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgLogin' : "url('/src/assets/resort.jpg')",
        'bgSm' : "url('/src/assets/mobile.png')"   
      },
      colors: {
        "dark-alta": "#19345E",
        "orange-alta": "#F47522",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui : {
    base: false,
    darkTheme: "light",
  }
}
