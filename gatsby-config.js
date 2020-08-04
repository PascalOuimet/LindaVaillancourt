module.exports = {
  siteMetadata: {
    title: 'Linda Vaillancourt - Travailleuse sociale',
    author: 'Pascal Ouimet and Hunter Chang',
    description: 'Site web professionnel de Linda Vaillancourt',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Linda Vaillancourt - Travailleuse sociale',
        short_name: 'Linda Vaillancourt',
        start_url: '/',
        background_color: '#1a1f21',
        theme_color: '#1a1f21',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-171570104-1",
        head: true,
        anonymize: true,
        respectDNT: true,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
