// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'Gridsome',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss]
      }
    }
  },
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://localhost:8000', // required
        typeName: 'WordPress' // GraphQL schema name
      }
    }
  ],
  // Setup template routes for any WordPress collection
  templates: {
    WordPressPost: '/:slug',
    WordPressPage: '/:slug'
  }
}
