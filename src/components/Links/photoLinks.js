import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  height: ${({ height }) => height};
  padding: 0 ${props => props.theme.spacers.indent};
`

const PhotoLinks = ({ height, src, alt, to }) => {
  return (
    <StyledLink to={to} height={height}>
      <img src={src} alt={alt} />
    </StyledLink>
  )
}

export default PhotoLinks
