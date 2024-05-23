/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      fontFamily: {

      },
      extend: {
        listStyleImage:{
            checkmark: 'url("/img/fundo.png")',

        },
      },
    },
    plugins: [],
  }