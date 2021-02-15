// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'Strom. Sauber. Speichern.',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss]
      }
    }
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },
  templates: {
    News: '/news/:title'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'news/**/*.md',
        typeName: 'News'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'jobs/**/*.md',
        typeName: 'Jobs'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'homepages/**/*.md',
        typeName: 'Homepages'
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin'
      }
    }
  ]
}
