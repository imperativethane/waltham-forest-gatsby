import React from 'react'
import styled from 'styled-components'
import Links from './Links/headerLinks'

const NavStyle = styled.div`
    display: grid;
    grid-template-columns: 10% 80% 10%;
    padding-top: 10px;
    margin-bottom: 2rem;
`

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Navbar = () => (
<NavStyle>
    <LinkWrapper />
    <LinkWrapper>
        <Links to="/" type="header">Home</Links>
        <Links to="/about-us" type="header"der>About us</Links>
        <Links to="/results" type="header">Results & Table</Links>
        <Links to="/upcoming-events" type="header">Upcoming Events</Links>
        <Links to="/squad" type="header">Squad</Links>
        <Links to="/contact-us" type="header">Contact Us</Links>
    </LinkWrapper>
    <LinkWrapper>
        <Links to="/manager-login" type="header">Manager LogIn</Links>
    </LinkWrapper>
</NavStyle>
)

export default Navbar;


