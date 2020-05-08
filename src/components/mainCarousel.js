import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


import AboutUsIcon from '../images/about-us.png';
import ResultsIcon from '../images/results.png';
import UpcomingEventsIcon from '../images/upcoming-events.png';
import SquadIcon from '../images/squad.png';
import ContactUsIcon from '../images/contact-us.png';
import nextArrow from '../images/right-arrow.png';
import prevArrow from '../images/left-arrow.png';


const menuItems = [ 
    {
        title: 'About Us',
        body: ['Waltham Forest United FC are a grassroots football team that play in Division Two of the Hackney & Leyton Football League.', 'Established in 2014 by our founder and current manager Matthew Perreira.'],
        icon: AboutUsIcon,
        buttonText: 'About',
        buttonUrl: '/about',
    }, {
        title: 'Results & Table',
        body: ['Keep up to date with our recent results and current standings in the table.', 'Having gained promotion to Division Two for the 2019/20 campaign we will fight to keep our place, and hope for a little more.'],
        icon: ResultsIcon,
        buttonText: 'Results',
        buttonUrl: '/results',
    }, {
        title: 'Upcoming Events',
        body: ['Interested in the fixture list? Need the address for our training session? Or maybe you want to attend the next big night out?', 'Take a look at our upcoming events.'],
        icon: UpcomingEventsIcon,
        buttonText: 'Upcoming',
        buttonUrl: '/upcoming-events'
    }, {
        title: 'Squad',
        body: ['This is the perfect place to find out more about the squad.', 'Meet the players and more importantly find out who\'s top of the goal scoring charts.'],
        icon: SquadIcon,
        buttonText: 'Squad',
        buttonUrl: '/squad'
    }, {
        title: 'Contact Us',
        body: ['We are always on the lookout for new players so if you\'d like to come down for a trial then get in touch.', 'Feel free to send through a message our give us a call.'],
        icon: ContactUsIcon,
        buttonText: 'Contact',
        buttonUrl: '/contact'
    }
];


const StyledSlider = styled(Slider)`
    .slick-next {
        background: url(${nextArrow}) center center no-repeat !important;
        height: 50px;
        width: 50px;

        &::before {
            display: none;
        }
    }

    .slick-prev {
        background: url(${prevArrow}) center center no-repeat !important;
        height:50px;
        width: 50px;

        &::before {
            display: none;
        }
    }

    .slick-slide {
        height: 600px;
        width: 400px !important;
        border: solid 5px ${props => props.theme.colors.primary};
        margin: 0 ${props => props.theme.spacers.extraLarge};
        border-radius: 59px;
    }
`

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
`

const MenuBodyWrapper = styled.div`
    width: 350px;
    height: 200px;
`

const MenuBody = styled.p`
    line-height: 2;
`

class Carousel extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 750,
            slidesToShow: 2,
            arrows: true, 
            slidesToScroll: 1,
        };

        return(
                <StyledSlider {...settings}>
                        {menuItems.map(menuItem => {
                            return (
                                <MenuItem>
                                    <MenuIcon src={menuItem.icon} alt='Icon' />
                                    <MenuTitle>{menuItem.title}</MenuTitle>
                                    <MenuBodyWrapper>
                                        {menuItem.body.map(body=> {
                                            return (
                                            <MenuBody>
                                                {body}
                                            </MenuBody>
                                            )
                                        })}
                                    </MenuBodyWrapper>
                                    <Link to={menuItem.buttonUrl}>{menuItem.buttonText}</Link>
                                </MenuItem>
                            )
                        })
                        }
                </StyledSlider>
        )
    }
}

export default Carousel;
