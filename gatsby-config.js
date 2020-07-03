const { withAssetPrefix } = require("gatsby");

module.exports = {
  siteMetadata: {
    title: `Waltham Forest Utd FC`,
    description: `The official home of Waltham Forest Utd FC`,
    author: `@imperativethane`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Waltham Forest Utd FC`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/teamlogo150.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `600`, `700`]
          },
        ],
      }
    }, 
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WFAPI',
        fieldName: 'walthamforest',
        url: 'http://localhost:4000/graphql'
      }
    }
  ],
}
