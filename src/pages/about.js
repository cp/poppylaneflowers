import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GiftCards = () => (
  <Layout>
    <SEO title="About" />
    <p>
      Contact us by phone: (907) 262-7829
    </p>
    <iframe width="100%" height="450" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=46640%20E%20Poppy%20Ln%20%23%201%2C%20Soldotna%2C%20AK%2099669&key=AIzaSyBnKvg68Y21GepPM_Ng-kH5ij9Kr7bNXwg" allowfullscreen></iframe>
  </Layout>
)

export default GiftCards
