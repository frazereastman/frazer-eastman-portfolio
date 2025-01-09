/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'vuetify-sm': '600px',
        'vuetify-md': '960px',
        'vuetify-lg': '1264px',
      },
    }
  },
  plugins: [],
}

