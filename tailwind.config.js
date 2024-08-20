/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    screens: {
      'vuetify-sm': '600px',
      'vuetify-md': '960px',
      'vuetify-lg': '1264px',
    },
    extend: {},
  },
  plugins: [],
}

