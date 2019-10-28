
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
        cookieDomain: "vilkrig.co.nz",
      },
    },
  ],
}
