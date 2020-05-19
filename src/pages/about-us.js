import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import History from "../components/aboutUs/history"
import Season from "../components/aboutUs/season"
import CoachingTeam from "../components/aboutUs/coachingTeam"
import Honours from "../components/aboutUs/honours"
import HallOfFame from "../components/aboutUs/hallOfFame"

const AboutUsPage = () => (
  <Layout>
    <SEO title="About Us" />
    <History />
    <Season />
    <CoachingTeam />
    <Honours />
    <HallOfFame />
  </Layout>
)

export default AboutUsPage
