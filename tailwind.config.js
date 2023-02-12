/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js,ts,jsx,tsx",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [
    require("flowbite/plugin")
  ]
}
