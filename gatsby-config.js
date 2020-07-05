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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
