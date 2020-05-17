import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import GlobalStyle from "./theme/globalStyles"
import Theme from "./theme/themes"

import Header from "./manager-header"
import Footer from "./manager-footer"

const MainWrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  padding: 0;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
