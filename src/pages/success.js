import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'

const successMessage = "J'ai bien reçu votre message";

export const Head = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <html lang="fr" />
      <title>{data.site.siteMetadata.title} - {successMessage}</title>
    </>
  )
};

const Success = () => (
  <Layout>
    <p>{successMessage}.<br />Je vous contacterai d'ici peu.</p>
    <Link to="/">Retour à la page d'accueil</Link>
  </Layout>
)

export default Success

