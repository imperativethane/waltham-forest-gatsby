import React from "react"
import styled from "styled-components"

import { AboutUs, Results, UpcomingEvents, Squad, ContactUs, Login } from "../links/navLinks"

const NavStyle = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  padding-top: ${props => props.theme.spacers.small};
  margin-bottom: ${props => props.theme.spacers.regular};
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Navbar = () => (
  <NavStyle>
    <LinkWrapper />
    <LinkWrapper>
      <AboutUs type="header"/>
      <Results type="header"/>
      <UpcomingEvents type="header"/>
      <Squad type="header"/>
      <ContactUs type="header"/>
    </LinkWrapper>
    <LinkWrapper>
      <Login type="header"/>
    </LinkWrapper>
  </NavStyle>
)

export default Navbar
