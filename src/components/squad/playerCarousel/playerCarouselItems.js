import React from "react";
import styled from "styled-components";

import Button from "../../buttons/buttons";

import addPhoto from "../../../images/add-photo.png";

const MenuItem = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

`

const Image = styled.img`
    margin-top: ${props => props.theme.spacers.extraLarge};
    margin-bottom: ${props => props.theme.spacers.regular};
`

const StyledH4 = styled.h4`
    font-weight: ${props => props.theme.fontWeight.bold};
    margin: 0;
`

const Statistics = styled.div`
    margin-top: ${props => props.theme.spacers.indent};
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
`

const Labels = styled.ul`
    list-style: none;
    text-align: left;
    margin-bottom: 0;
    margin-left: 0;
`

const Label = styled.li`
    font-family: ${props => props.theme.fontFamily.regular};
`

const Figures = styled.ul`
    list-style-type: none;
    text-align: right;
    margin-bottom: 0;
`

const Figure = styled(Label)`
    font-weight: ${props => props.theme.fontWeight.bold};
`

class MenuItems extends React.Component {
    constructor(props) {
        super(props);
        this.editPlayer = this.editPlayer.bind(this);
    }
    editPlayer() {
        return this.props.editPlayer(this.props.id)
    }

    render() {
        return (
            <MenuItem>
                <Image src={addPhoto} alt={this.props.firstName} height="150px" ></Image>
                <StyledH4>{this.props.firstName}</StyledH4>
                <StyledH4>{this.props.surname}</StyledH4>
                <Statistics>
                    <Labels>
                        <Label>Position:</Label>
                        <Label>Appearances:</Label>
                        <Label>Goals Scored:</Label>
                    </Labels>
                    <Figures>
                        <Figure>{this.props.position}</Figure>
                        <Figure>{this.props.appearances}</Figure>
                        <Figure>{this.props.goalsScored}</Figure>
                    </Figures>
                </Statistics>
                <Button onClick={this.editPlayer}>Edit Player</Button>
            </MenuItem>
        )       
    }
}

export default MenuItems
