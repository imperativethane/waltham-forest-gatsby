import React from "react"
import Carousel from '../components/main-carousel/mainCarousel'
import styled from 'styled-components'

import Layout from "../components/manager-layout"
import SEO from "../components/seo"

import items from '../components/main-carousel/managerCarouselData'

const CarouselWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
`

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <CarouselWrapper>
      <Carousel items={items}/>
    </CarouselWrapper>
  </Layout>
)

export default HomePage
