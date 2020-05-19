import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.regular};
  margin-left: ${props => props.theme.spacers.indent};
  height: 26px;

  &:hover {
    border-bottom: ${props => props.theme.colors.light + " 3px solid"};
  }
`

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.regular};
  margin-left: ${props => props.theme.spacers.indent};
  height: 26px;
`

const FooterWrapper = styled.div`
  padding-bottom: ${props => props.theme.spacers.regular};
`

const Links = ({ to, children, type }) => {
  return type === "header" ? (
    <HeaderLink to={to}>{children}</HeaderLink>
  ) : (
    <FooterWrapper>
      <FooterLink to={to}>{children}</FooterLink>
    </FooterWrapper>
  )
}
export default Links
