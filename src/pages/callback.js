import React from "react"
import { navigate } from "gatsby"
import { handleAuthentication } from "../utils/auth"

import Layout from "../components/layout"

export default () => {
  handleAuthentication(() => navigate("/manager/home"))

  return (
    <Layout>
      <p>Logging you in...</p>
    </Layout>
  )
}
