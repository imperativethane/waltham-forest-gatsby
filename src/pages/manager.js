import React from "react"
import styled from "styled-components"
import { Router } from "@reach/router"

import { login, isAuthenticated, getProfile } from "../utils/auth"

import Carousel from "../components/mainCarousel/mainCarousel"
import Layout from "../components/layout"
import SEO from "../components/seo"

import items from "../components/mainCarousel/managerCarouselData"

const CarouselWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
`

const Home = () => (
  <>
    <SEO title="Home" />
    <CarouselWrapper>
      <Carousel items={items} />
    </CarouselWrapper>
  </>
)

const Results = () => <p>Results</p>
const UpcomingEvents = () => <p>Upcoming Events</p>
const Squad = () => <p>Squad</p>

const Manager = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <Layout>
        <Router>
          <Home path="/manager/" user={user} />
          <Results path="manager/results" />
          <UpcomingEvents path="manager/upcoming-events" />
          <Squad path="manager/squad" />
        </Router>
      </Layout>
    </>
  )
}

export default Manager
