import React from "react"
import Carousel from "../components/main-carousel/mainCarousel"
import styled from "styled-components"

import items from "../components/main-carousel/carouselData"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CarouselWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
`

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <CarouselWrapper>
      <Carousel items={items} />
    </CarouselWrapper>
  </Layout>
)

export default Home
