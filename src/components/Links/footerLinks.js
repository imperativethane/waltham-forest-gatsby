import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.regular};
  margin-left: ${props => props.theme.spacers.indent};
  height: 26px;
`

const LinkWrapper = styled.div`
  padding-bottom: ${props => props.theme.spacers.regular};
`

const Links = ({ to, children }) => {
  return (
    <LinkWrapper>
      <StyledLink to={to}>{children}</StyledLink>
    </LinkWrapper>
  )
}
export default Links
