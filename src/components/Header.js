import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = props => {
  const images = useStaticQuery(graphql`
  query {
    picLinda: file(relativePath: { eq: "Linda.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 158, quality:90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`)

  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <Img fluid={images.picLinda.childImageSharp.fluid} alt="Linda Vaillancourt" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>Linda Vaillancourt</h1>
          <h2>Travailleuse sociale</h2>
          <q>
            "Ce ne sont pas les événements qui perturbent l'homme mais sa façon de les interpréter" - Epictète
        </q>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Déroulement
          </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('work')
              }}
            >
              Services
          </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              À propos
          </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('contact')
              }}
            >
              Contact
          </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
