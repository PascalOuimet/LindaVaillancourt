import PropTypes from 'prop-types'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Header = props =>
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <StaticImage src="../images/PP_YT Logo Accueil.jpg" alt="Logo de Linda Vaillancourt" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Linda Vaillancourt</h1>
        <h2>Travailleuse sociale</h2>
        <q>
          "Ce ne sont pas les événements qui perturbent l'homme mais sa façon de les interpréter" - Épictète
        </q>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#intro">
            Déroulement
          </a>
        </li>
        <li>
          <a href="#work">
            Services
          </a>
        </li>
        <li>
          <a href="#about">
            À propos
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>

Header.propTypes = {
  timeout: PropTypes.bool,
}

export default Header
