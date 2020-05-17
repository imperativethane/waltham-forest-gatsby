import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import History from "../components/history"
import Season from "../components/season"
import CoachingTeam from "../components/coachingTeam"
import Honours from "../components/honours"
import HallOfFame from "../components/hallOfFame"

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
