import React from 'react';
import styled from 'styled-components';

import playerOne from '../images/player-one.png'
import playerTwo from '../images/player-two.png'

const HallWrapper = styled.div`
    margin: 0 auto;
    width: 900px;
    padding: 0;
    margin-bottom: ${props => props.theme.spacers.extraLarge};
`

const PlayerWrapper = styled.div`
    display: flex;
    margin-bottom: 50px;
`

const ContentWrapper = styled.div`
    width: 650px;
`

const Title = styled.h1`
    margin-top: ${props => props.theme.spacers.extraLarge};
`

const PlayerPhoto = styled.img`
    width: 200px;
    height: 200px;
    margin-left: 50px;
`

const HallOfFame = () => (
    <HallWrapper>
        <Title>Hall of Fame</Title>
        <PlayerWrapper>
            <ContentWrapper>
                <h3>Matt Perreira</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
            </ContentWrapper>
            <PlayerPhoto src={playerOne} alt="Player One" />
        </PlayerWrapper>
        <PlayerWrapper>
            <ContentWrapper>
                <h3>Rich Hunter</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
            </ContentWrapper>
            <PlayerPhoto src={playerTwo} alt="Player Two" />
        </PlayerWrapper>
        <PlayerWrapper>
            <ContentWrapper>
                <h3>Ryan Leavens</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
            </ContentWrapper>
            <PlayerPhoto src={playerOne} alt="Player One" />
        </PlayerWrapper>
    </HallWrapper>
)

export default HallOfFame;