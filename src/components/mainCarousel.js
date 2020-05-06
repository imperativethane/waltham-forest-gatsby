import React from 'react'
import { Link } from 'gatsby'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


import AboutUsIcon from '../images/about-us.png';
import ResultsIcon from '../images/results.png';
import UpcomingEventsIcon from '../images/upcoming-events.png';
import SquadIcon from '../images/squad.png';
import ContactUsIcon from '../images/contact-us.png';


const cards = [ 
    {
        title: 'About Us',
        body: 'Waltham Forest United FC are a grassroots football team that play in Division Two of the Hackney & Leyton Football League. \n Established in 2014 by our founder and current manager Matthew Perreira.',
        icon: AboutUsIcon,
        buttonText: 'About',
        buttonUrl: '/about'
    }, {
        title: 'Results & Table',
        body: 'Keep up to date with our recent results and current standings in the table. \n Having gained promotion to Division Two for the 2019/20 campaign we will fight to keep our place, and hope for a little more.',
        icon: ResultsIcon,
        buttonText: 'Results',
        buttonUrl: '/results'
    }, {
        title: 'Upcoming Events',
        body: 'Interested in the fixture list? Need the address for our training session? Or maybe you want to attend the next big night out? \n Take a look at our upcoming events.',
        icon: UpcomingEventsIcon,
        buttonText: 'Upcoming',
        buttonUrl: '/upcoming-events'
    }, {
        title: 'Squad',
        body: 'This is the perfect place to find out more about the squad. \n Meet the players and more importantly find out who\'s top of the goal scoring charts.',
        icon: SquadIcon,
        buttonText: 'Squad',
        buttonUrl: '/squad'
    }, {
        title: 'Contact Us',
        body: 'We are always on the lookout for new players so if you\'d like to come down for a trial then get in touch. \n Feel free to send through a message our give us a call.',
        icon: ContactUsIcon,
        buttonText: 'Contact',
        buttonUrl: '/contact'
    }
];

const carouselStyle = {
    height: '600px',
    width: '400px',
    border: 'solid 5px #a7b8ef'

}


class Carousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            arrows: true, 
            slidesToScroll: 1,
        };

        return(
            <Slider {...settings}>
                {cards.map(card => {
                    return (
                        <div style={carouselStyle}>
                            <img src={card.icon} alt='Icon' />
                            <h1>{card.title}</h1>
                            <p>{card.body}</p>
                            <Link to={card.buttonUrl}>{card.buttonText}</Link>
                        </div>
                    )
                })
                }
            </Slider>
        )
    }
}

export default Carousel;
