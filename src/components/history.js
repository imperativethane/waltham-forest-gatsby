import React from "react"
import styled from "styled-components"

import teamShot from "../images/team-shot.png"

const HistoryWrapper = styled.div`
  margin: 0 auto;
  width: 900px;
  padding: 0;
  margin-bottom: ${props => props.theme.spacers.extraLarge};
`

const HistoryTitle = styled.h1`
  margin-top: ${props => props.theme.spacers.extraLarge};
`
const HistoryImage = styled.img`
  margin-top: 25px;
`

const History = () => (
  <HistoryWrapper>
    <HistoryTitle>History</HistoryTitle>
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
    <HistoryImage src={teamShot} alt="Team Photo" />
  </HistoryWrapper>
)

export default History
