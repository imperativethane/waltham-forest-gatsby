import React from 'react'
import styled from 'styled-components'


const BackgroundWrapper = styled.div`
    margin: 0 auto;
    width: 1000px;
    padding-top: ${props => props.theme.spacers.extraLarge};
    background-color: ${props => props.theme.colors.primary};
    border-radius: 50px;
`
const ContentWrapper = styled.div`
    margin: 0 auto;
    width: 900px;
    text-align: center;
`

const HonoursWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;    
    justify-content: space-around;
`

const Honour = styled.div`
    width: 300px;
    margin-bottom: ${props => props.theme.spacers.extraLarge};
`

const WhiteText = styled.p`
    color: ${props => props.theme.colors.light};
    margin-bottom: 0.5rem;
`

const BoldText = styled(WhiteText)`
    font-weight: ${props => props.theme.fontWeight.bold};
`

const Honours = () => (
    <BackgroundWrapper>
        <ContentWrapper>
            <h2>Honours</h2>
            <HonoursWrapper>
                <Honour>
                    <WhiteText>2018/19</WhiteText>
                    <BoldText>Division 3 Runners-up</BoldText>
                </Honour>
                <Honour>
                    <WhiteText>2015/16</WhiteText>
                    <BoldText>Division 2 Runners-up</BoldText>
                </Honour>
            </ HonoursWrapper>
            <h2>Awards</h2>
            <HonoursWrapper>
                <Honour>
                    <WhiteText>Player's player</WhiteText>
                    <BoldText>Rich Hunter</BoldText>
                </Honour>
                <Honour>
                    <WhiteText>Manager's Player</WhiteText>
                    <BoldText>Matt Perreira</BoldText>
                </Honour>
                <Honour>
                    <WhiteText>Golden Boot</WhiteText>
                    <BoldText>Ryan Leavens</BoldText>
                </Honour>
                <Honour>
                    <WhiteText>Most Improved</WhiteText>
                    <BoldText>Rich Hunter</BoldText>
                </Honour>
                <Honour>
                    <WhiteText>Clubman of the year</WhiteText>
                    <BoldText>Matt Perreira</BoldText>
                </Honour>
            </ HonoursWrapper>
        </ContentWrapper>
    </BackgroundWrapper>
)

export default Honours;