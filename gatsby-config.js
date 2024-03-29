module.exports = {
  siteMetadata: {
    title: 'Cool Cats',
    description: "Chris P's Cool Cats, cats with swagger",
    author: '@BlackFenix2'
  },
  plugins: [
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'text-color': 'rgba(0, 0, 0)'
        }
      }
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/lib/img`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'cool-cats',
        short_name: 'coolcats',
        start_url: '/',
        background_color: '#866539',
        theme_color: '#FDBA55',
        display: 'minimal-ui',
        icon: 'static/icon.png' // This path is relative to the root of the site.
      }
    },
    //add support for absolute paths for gatsby loader
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          src: 'src'
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline'
  ]
};
