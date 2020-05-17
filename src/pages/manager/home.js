import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import { isLoggedIn } from "../../utils/auth"

import Carousel from "../../components/main-carousel/mainCarousel"
import Layout from "../../components/manager-layout"
import SEO from "../../components/seo"

import items from "../../components/main-carousel/managerCarouselData"

const CarouselWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
`

class Home extends React.Component {
  componentDidMount() {
    if (!isLoggedIn()) {
      navigate(`/`)
      return
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <CarouselWrapper>
          <Carousel items={items} />
        </CarouselWrapper>
      </Layout>
    )
  }
}

export default Home
