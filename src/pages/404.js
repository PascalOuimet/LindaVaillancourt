import React from 'react'
import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'

const errorMessage = 'Page introuvable'

export const Head = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  const title = `${data.site.siteMetadata.title} - ${errorMessage}`
  const canonicalUrl = `${data.site.siteMetadata.siteUrl}/404/`

  return (
    <>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="robots" content="noindex,nofollow" />
      <link rel="canonical" href={canonicalUrl} />
    </>
  )
}

const NotFoundPage = () => (
  <Layout>
    <h1>{errorMessage}</h1>
  </Layout>
)

export default NotFoundPage
