import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

import MenuItems from "./playerCarouselItems"
import AddPlayer from "./addPlayer"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import nextArrow from "../../../images/right-arrow.png"
import prevArrow from "../../../images/left-arrow.png"

const StyledSlider = styled(Slider)`
    margin: ${props => props.theme.spacers.extraLarge} 0;

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
    height: 50px;
    width: 50px;

    &::before {
      display: none;
    }
  }

  .slick-slide {
    height: 500px;
    width: 283.33px !important;
    margin: 0 ${props => props.theme.spacers.indent} 0 ${props => props.theme.spacers.indent};
    border-radius: 59px;
  }

  .slick-slide:nth-child(even) {
    border: solid 5px ${props => props.theme.colors.primary};
  }

  .slick-slide:nth-child(odd) {
    border: solid 5px ${props => props.theme.colors.secondary};
  }

  .slick-disabled {
    display: none;
  }

  .slick-prev.hidden,
  .slick-next.hidden {
    opacity: 0;
    pointer-events: none;
  }
`

class PlayerCarousel extends React.Component {
  totalAppearances = player => {
    let totalAppearances = 0;

    if (player.appearances === []) {
        return totalAppearances;
    }

    player.appearances.forEach(appearance => {
        if (appearance.starter) {
            totalAppearances += 1
        } else if (appearance.substitute) {
            totalAppearances +=1
        }
    })
    return totalAppearances
  } 
  
  totalGoalsScored = player => {
    let totalGoalsScored = 0;

    if (player.appearances === []) {
        return totalGoalsScored;
    };

    player.appearances.forEach(appearance => {
        if(appearance.goalsScored) {
            totalGoalsScored += appearance.goalsScored
        }
    })

    return totalGoalsScored
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      arrows: true,
      slidesToScroll: 1,
    }

    return (
      <StyledSlider {...settings}>
        <AddPlayer addPlayer={this.props.addPlayer} />
        {this.props.players.map((player) => {
          return (
            <MenuItems
              key={player._id}
              id={player._id}
              firstName={player.firstName}
              surname={player.surname}
              position={player.position}
              appearances={this.totalAppearances(player)}
              goalsScored={this.totalGoalsScored(player)}
              editPlayer={this.props.editPlayer}
            />
          )
        })}
      </StyledSlider>
    )
  }
}

export default PlayerCarousel