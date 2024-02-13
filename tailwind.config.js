/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primery:'#0694A2',
        primery_opacity:'#69BEC7',
        secondery:'#535353',
        bacg:'#EBF6F8'
      },
      fontFamily:{
        'vazir':'vazir'
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3.5rem',
      }
    },
  },
  plugins: [],
}