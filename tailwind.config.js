/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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

