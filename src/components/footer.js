import React from "react"
import styled from "styled-components"
import { AboutUs, Results, UpcomingEvents, Squad, ContactUs } from "./links/navLinks"

import PhotoLinks from "./links/photoLinks"

import teamLogo from "../images/teamlogo150.png"
import twitterLogo from "../images/twitter-logo.png"
import instagramLogo from "../images/instagram-logo.png"
import facebookLogo from "../images/facebook-logo.png"
import { isAuthenticated } from "../utils/auth"

const FooterWrapper = styled.div`
  background-color: #c00c0b;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 7px;
`

const LinkWrapper = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
`

const SocialMediaWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: right;
`

const SocialContent = styled.h6`
  align-self: flex-end;
  text-align: center;
  padding-bottom: ${props => props.theme.spacers.regular};
`

const Footer = () => (
  <FooterWrapper>
    <LinkWrapper>
      <AboutUs />
      <Results />
      <UpcomingEvents />
      <Squad />
      <ContactUs />
    </LinkWrapper>
    <LogoWrapper>
      <PhotoLinks
        to={isAuthenticated() ? "/manager" : "/"}
        height="150px"
        src={teamLogo}
        alt="Waltham Forest Logo"
      />
    </LogoWrapper>
    <SocialMediaWrapper>
      <SocialContent>Check us out on social media</SocialContent>
      <div>
        <PhotoLinks to="/" height="50px" src={twitterLogo} alt="Twitter Logo" />
        <PhotoLinks
          to="/"
          height="50px"
          src={facebookLogo}
          alt="Facebook Logo"
        />
        <PhotoLinks
          to="/"
          height="50px"
          src={instagramLogo}
          alt="Instagram Logo"
        />
      </div>
    </SocialMediaWrapper>
  </FooterWrapper>
)

export default Footer
