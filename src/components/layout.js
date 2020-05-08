import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"


import GlobalStyle from "./theme/globalStyles"
import Theme from "./theme/themes"

import Header from "./header"
import Footer from "./footer"

const MainWrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  padding: 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Theme} >
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper>
        <main>{children}</main>
      </MainWrapper>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
