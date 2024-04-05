/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}",
        'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors : {
        "greenblue" : "rgb(0, 233, 191)",
        "backgroundColor" : "#121212"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin')  
  ],
}

