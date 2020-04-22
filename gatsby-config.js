const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/svg/
        }
      }
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `54jjpmdqxiqf`,
        accessToken: 'ePszhyP6anAhxmpZHkk_Rx8ury4IAzHsC3UBNmzxJzg',
        downloadLocal: true
      },
    },

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "600", "800", "900"],
            }
          ]
        }
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: false,
        displayName: false, 
        minify: true,
        pure: true
      }
    },

    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        demos: path.join(__dirname, 'src/demos'),
        utils: path.join(__dirname, 'src/utils'),
        images: path.join(__dirname, 'src/images'),
        layouts: path.join(__dirname, 'src/layouts'),
        sketches: path.join(__dirname, 'src/sketches'),
        constants: path.join(__dirname, 'src/constants'),
        components: path.join(__dirname, 'src/components')
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    }
  ]
}
