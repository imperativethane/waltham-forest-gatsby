import React from "react"
import styled from "styled-components"

import managerOne from "../../images/manager-one.png"
import managerTwo from "../../images/manager-two.png"

const CoachWrapper = styled.div`
  margin: 0 auto;
  width: 900px;
  padding: 0;
  margin-bottom: ${props => props.theme.spacers.extraLarge};
`

const CoachTitle = styled.h1`
  margin-top: ${props => props.theme.spacers.extraLarge};
`

const PhotosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.theme.spacers.extraLarge} 0;
`
const CoachPhoto = styled.img`
  margin: 0 75px;
`

const CoachingTeam = () => (
  <CoachWrapper>
    <CoachTitle>Coaching Team</CoachTitle>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua.{" "}
    </p>
    <p>
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
      ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus.{" "}
    </p>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus.
    </p>
    <PhotosWrapper>
      <CoachPhoto src={managerOne} alt="Manager One" />
      <CoachPhoto src={managerTwo} alt="Manager Two" />
    </PhotosWrapper>
  </CoachWrapper>
)

export default CoachingTeam
