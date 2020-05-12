import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import MenuItems from './menuItems'
import items from './carouselData'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nextArrow from '../../images/right-arrow.png';
import prevArrow from '../../images/left-arrow.png';

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
        margin: 0 ${props => props.theme.spacers.extraLarge};
        border-radius: 59px;
    }

    .slick-slide:nth-child(even) {
        border: solid 5px ${props => props.theme.colors.secondary};
    }   

    .slick-slide:nth-child(odd) {
        border: solid 5px ${props => props.theme.colors.primary};
    }

    .slick-disabled {
        display: none;
    }

    .slick-prev.hidden,
    .slick-next.hidden {
    opacity: 0;
    pointer-events:none;
}
`



class Carousel extends React.Component {
    componentWillMount() {
        
    }

    render() {
        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            arrows: true, 
            slidesToScroll: 1,
            
        };

        return(
                <StyledSlider {...settings}>
                        {items.map(menuItem => {
                            return <MenuItems 
                                icon={menuItem.icon} 
                                title={menuItem.title} 
                                titleColor={menuItem.titleColor}
                                body={menuItem.body} 
                                buttonUrl={menuItem.buttonUrl}
                                buttonText={menuItem.buttonText}
                                />
                        })}
                </StyledSlider>
        )
    }
}

export default Carousel;
