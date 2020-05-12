import React from "react"
import Carousel from '../components/main-carousel/mainCarousel'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const CarouselWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CarouselWrapper>
      <Carousel />
    </CarouselWrapper>
  </Layout>
)

export default IndexPage
