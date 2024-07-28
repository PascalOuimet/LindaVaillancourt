import React from 'react'
import PropTypes from 'prop-types'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) =>
  <>
    {location && location.pathname === '/' ?
      <div>
        {children}
      </div>
      :
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    }
  </>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
