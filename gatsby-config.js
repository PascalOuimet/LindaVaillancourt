module.exports = {
  siteMetadata: {
    title: 'Linda Vaillancourt - Travailleuse sociale',
    author: 'Pascal Ouimet and Hunter Chang',
    description: 'Site web professionnel de Linda Vaillancourt',
    siteUrl: 'https://www.lindavaillancourtts.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
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
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/success']
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Great Vibes',
          'source sans pro\:300,600'
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-netlify`,
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
