import React from "react"
import styled from "styled-components"

import NavBar from "./manager-navbar"
import logo from "../images/teamlogo200.png"
import PhotoLink from "./Links/photoLinks"

const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
`

const LogoStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: ${props => props.theme.spacers.regular};
`

const Header = () => (
  <HeaderWrapper>
    <NavBar />
    <LogoStyle>
      <PhotoLink
        to="/manager-home"
        height="200px"
        src={logo}
        alt="Waltham Forest Logo"
      />
    </LogoStyle>
  </HeaderWrapper>
)

export default Header
