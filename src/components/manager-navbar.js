import React from 'react'
import styled from 'styled-components'
import Links from './Links/headerLinks'
import { logout } from '../utils/auth'

const NavStyle = styled.div`
    display: grid;
    grid-template-columns: 10% 80% 10%;
    padding-top: ${props => props.theme.spacers.small};
    margin-bottom: ${props => props.theme.spacers.regular};
`

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Navbar = () => (
<NavStyle>
    <LinkWrapper />
    <LinkWrapper>
        <Links to="/manager/results" type="header">Results</Links>
        <Links to="/manager/upcoming-events" type="header">Upcoming Events</Links>
        <Links to="/manager/squad" type="header">Squad</Links>
    </LinkWrapper>
    <LinkWrapper>
    <a
        href="#logout"
        onClick={e => {
        logout()
        e.preventDefault()
        }}
    >
    Log Out
    </a>
    </LinkWrapper>
</NavStyle>
)

export default Navbar;


