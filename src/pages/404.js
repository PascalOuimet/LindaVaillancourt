import React from 'react'
import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'

const errorMessage = 'Page introuvable';

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
      <title>{data.site.siteMetadata.title} - {errorMessage}</title>
    </>
  )
};

const NotFoundPage = () => (
  <Layout>
    <h1>{errorMessage}</h1>
  </Layout>
)

export default NotFoundPage
