import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Success = () => (
  <Layout>
    <p>J'ai bien reçu votre message.<br/>Je vous contacterai d'ici peu.</p>
    <Link to="/">Retour à la page d'accueil</Link>
  </Layout>
)

export default Success

