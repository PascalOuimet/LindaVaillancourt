import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const successMessage = "J'ai bien recu votre message"

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

  const title = `${data.site.siteMetadata.title} - ${successMessage}`
  const canonicalUrl = `${data.site.siteMetadata.siteUrl}/success/`

  return (
    <>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="robots" content="noindex,nofollow" />
      <link rel="canonical" href={canonicalUrl} />
    </>
  )
}

const Success = () => (
  <Layout>
    <p>{successMessage}.<br />Je vous contacterai d'ici peu.</p>
    <Link to="/">Retour a la page d'accueil</Link>
  </Layout>
)

export default Success
