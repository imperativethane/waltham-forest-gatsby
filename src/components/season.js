import React from 'react'
import styled from 'styled-components'


const BackgroundWrapper = styled.div`
    margin: 0 auto;
    width: 1000px;
    padding-top: ${props => props.theme.spacers.extraLarge};
    padding-bottom: ${props => props.theme.spacers.indent};
    background-color: ${props => props.theme.colors.primary};
    border-radius: 50px;
`
const SeasonWrapper = styled.div`
    margin: 0 auto;
    width: 900px;
`

const WhiteText = styled.p`
    color: ${props => props.theme.colors.light};
`

const Season = () => (
    <BackgroundWrapper>
        <SeasonWrapper>
            <h2>Season 2020/21</h2>
            <WhiteText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </WhiteText>
            <WhiteText>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus. </WhiteText>
            <WhiteText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</WhiteText>
        </SeasonWrapper>
    </BackgroundWrapper>
)

export default Season;