module.exports = {
  theme: {
    extend: {
      variants: {},
      plugins: [],
      colors: {
        'vanevo-blue': '#143988'
      }
    }
  },
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
