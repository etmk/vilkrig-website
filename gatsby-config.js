const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Vilkrig`,
    siteUrl: `https://www.vilkrig.co.nz`,
    description: `Digital agency from New Zealand 🇳🇿`,
    author: `Vilkrig Limited`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-react-svg",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vilkrig Limited`,
        short_name: `vilkrig`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#004156`,
        display: `standalone`,
        icon: `${__dirname}/src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
        cookieDomain: "vilkrig.co.nz",
      },
    },
  ],
}
