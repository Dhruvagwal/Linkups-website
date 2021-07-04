const { lightBlue, trueGray } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    mode:'layers',
    content:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        blue: colors.lightBlue,
        gray: colors.trueGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
