import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import { logout, isAuthenticated } from "../../utils/auth"

import Links from "./links"

const Button = styled.a`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.regular};
  margin-left: ${props => props.theme.spacers.indent};
  height: 26px;

  &:hover {
    border-bottom: ${props => props.theme.colors.light + " 3px solid"};
  }
`

export const AboutUs = ({type}) => {
    return isAuthenticated() ? null : (
      <Links to="/about-us" type={type}>
        About us
      </Links>
      )
  }
  
export const Results = ({type}) => (
  <Links 
    to={isAuthenticated() ? "/manager/results" : "/results"}
    type={type}>
    Results
  </Links>
)

export const UpcomingEvents = ({type}) => (
  <Links 
    to={isAuthenticated() ? "/manager/upcoming-events" : "/upcoming-events"}
    type={type}>
    Upcoming Events
  </Links>
)

export const Squad = ({type}) => (
  <Links 
    to={isAuthenticated() ? "/manager/squad" : "/squad"}
    type={type}>
    Squad
  </Links>
)
  
export const ContactUs = ({type}) => {
    return isAuthenticated() ? null : (
      <Links to="/contact-us" type={type}>
        Contact us
      </Links>
      )
  }

export const Login = ({type}) => {
    return isAuthenticated() ? (
      <Button
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/`))
          }}
        >
          Logout
      </Button>
    ) : (
      <Links to="/manager" type={type}>
        Manager Login
      </Links>
      )
  }

  