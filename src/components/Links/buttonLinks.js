import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  height: 40px;
  width: 250px;
  background-color: ${props => props.theme.colors.action};
  color: ${props => props.theme.colors.dark};
  padding: 0 ${props => props.theme.spacers.indent};
  border: none;
  font-family: ${props => props.theme.fontFamily.regular};
  border-radius: 50px;
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  margin-top: ${props => props.theme.spacers.indent};
`

const ButtonLinks = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>
}

export default ButtonLinks
