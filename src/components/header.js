import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: '40px',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: '20px',
        display: 'flex',
      }}
    >
      <h1 style={{ margin: 0, flex: 1 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            fontSize: '20px',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h1 style={{ margin: 0, flex: 1, textAlign: 'right'}}>
        <Link
          to="/about"
          style={{
            color: `black`,
            fontSize: '14px',
            textDecoration: `none`,
            marginRight: '10px',
          }}
        >
          About
        </Link>
        <Link
          to="/gift-cards"
          style={{
            color: `black`,
            fontSize: '14px',
            textDecoration: `none`,
          }}
        >
          Gift cards
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
