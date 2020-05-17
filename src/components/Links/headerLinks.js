import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.regular};
  margin-left: ${props => props.theme.spacers.indent};
  height: 26px;

  &:hover {
    border-bottom: ${props => props.theme.colors.light + " 3px solid"};
  }
`

const Links = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>
}
export default Links
