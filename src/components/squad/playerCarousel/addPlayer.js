import React from 'react';
import styled from 'styled-components';

import Button from "../../buttons/buttons";

import addPhoto from "../../../images/add-photo.png";
import addPlayer from "../../../images/add-player.png"

const AddPlayerContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ImageOne = styled.img`
    margin-top: 50px;
    margin-bottom: 50px;
`

const ImageTwo = styled.img`
    margin-bottom: 38px;
`

class AddPlayer extends React.Component {
    render() {
        return (
            <AddPlayerContainer>
                <ImageOne src={addPhoto} alt="Add Player" height="150px" width="150px" />
                <ImageTwo src={addPlayer} alt="Add Player" />
                <Button onClick={this.props.addPlayer}>Add new player</Button>
            </AddPlayerContainer>
        )
    }
}

export default AddPlayer;