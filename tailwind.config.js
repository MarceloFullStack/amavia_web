module.exports = {
  prefix: 'tw-',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      amavia: {
        100: '#99FFF8',
        200: '#47FFF3',
        300: '#33FFF1',
        400: '#1FFFF0',
        500: '#',
        600: '#00F5E4',
        700: '#c53030',
        800: '#00B8AB',
        900: '#00665F',
      },

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
