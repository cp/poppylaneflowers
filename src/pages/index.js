import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";
import header from '../images/header.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Poppy Lane Flowers" />

    <div style={{ marginBottom: `20px` }}>
      <img src={header} />
    </div>

    <p>
      Hello there! We're Poppy Lane Flowers. We sell flowers on the Kenai Peninsula in Soldotna, AK.
    </p>
  </Layout>
)

export default IndexPage
