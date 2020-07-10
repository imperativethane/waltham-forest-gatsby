import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  height: 40px;
  width: 250px;
  padding: 0 ${props => props.theme.spacers.indent};
  margin-top: ${props => props.theme.spacers.indent};
  justify-self: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 50px;
  border: none;
  background-color: ${props => props.theme.colors.action};

  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fontFamily.regular};
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-decoration: none;
`

const ButtonLinks = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>
}

export default ButtonLinks
