import React from "react"
import styled from "styled-components"
import Button from "../Links/buttonLinks"

const MenuItem = styled.div`
  display: grid !important;
  text-align: center;
  justify-content: center;
`

const MenuIcon = styled.img`
  margin-top: ${props => props.theme.spacers.extraLarge};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacers.indent};
`

const MenuTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacers.indent};
  color: ${({ titleColor }) =>
    titleColor
      ? props => props.theme.colors.primary
      : props => props.theme.colors.secondary};
`

const MenuBodyWrapper = styled.div`
  width: 350px;
  height: 200px;
`

const MenuBody = styled.p`
  line-height: 2;
`

const MenuItems = ({
  icon,
  title,
  titleColor,
  body,
  buttonUrl,
  buttonText,
}) => {
  return (
    <MenuItem>
      <MenuIcon src={icon} alt="Icon" />
      <MenuTitle titleColor={titleColor}>{title}</MenuTitle>
      <MenuBodyWrapper>
        {body.map(body => {
          return <MenuBody>{body}</MenuBody>
        })}
      </MenuBodyWrapper>
      <Button to={buttonUrl}>{buttonText}</Button>
    </MenuItem>
  )
}

export default MenuItems
