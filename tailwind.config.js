/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors : {
        "greenblue" : "rgb(0, 233, 191)",
        "backgroundColor" : "#121212"

      }

    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
}

