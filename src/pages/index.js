import React from "react"
import Carousel from '../components/mainCarousel'
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const pageStyle = {
  paddingTop: '50px',
  paddingBottom: '100px'

}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={pageStyle}>
      <Carousel />
    </div>
  </Layout>
)

export default IndexPage
