import React from 'react'
import styled from 'styled-components';
import Button from '../../buttons/buttons';
import addPhoto from "../../../images/add-photo.png";

const Form = styled.form`
    margin-top: 100px;
    padding: 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContactDetailsWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 451.73px;
`

const ContactDetailsContainerOne = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ContactDetailsContainerTwo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    justify-content: flex-end;
`

const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`

const Label = styled.label`
    color: ${props => props.theme.colors.dark};
    font-size: ${props => props.theme.fontSize.p};
    font-family: ${props => props.theme.fontFamily.regular};
    font-weight: ${props => props.theme.fontWeight.bold};
`

const Input = styled.input`
    width: 250px;
    font-size: ${props => props.theme.fontSize.p};
    font-family: ${props => props.theme.fontFamily.regular};
    margin-bottom: 1rem;
`

const Textarea = styled.textarea`
    width: 600px;
    height: 200px;
    font-size: ${props => props.theme.fontSize.p};
    font-family: ${props => props.theme.fontFamily.regular};
`

class PlayerInformation extends React.Component {
    constructor(props) {
        super(props);
        this.firstNameElRef = React.createRef();
        this.surnameElRef = React.createRef();
        this.positionElRef = React.createRef();
        this.emailElRef = React.createRef();
        this.phoneNumberElRef = React.createRef();
        this.addressOneElRef = React.createRef();
        this.addressTwoElRef = React.createRef();
        this.postcodeElRef = React.createRef();
        this.informationElRef = React.createRef();
    }

    handleSubmit = async event => {
        event.preventDefault();
        const firstName = this.firstNameElRef.current.value;
        const surname = this.surnameElRef.current.value;
        const position = this.positionElRef.current.value;
        const email = this.emailElRef.current.value;
        const phoneNumber = this.phoneNumberElRef.current.value;
        const addressOne = this.addressOneElRef.current.value;
        const addressTwo = this.addressTwoElRef.current.value;
        const postcode = this.postcodeElRef.current.value;
        const information = this.informationElRef.current.value;

        const requestBody = {
            query: `
                mutation CreatePlayer(
                    $firstName: String!, 
                    $surname: String!
                    $position: String!, 
                    $email: String, 
                    $phoneNumber: String, 
                    $addressOne: String, 
                    $addressTwo: String, 
                    $postcode: String,
                    $information: String,
                ) {
                    createPlayer(playerInput: {
                        firstName: $firstName, 
                        surname: $surname,
                        position: $position,
                        email: $email,
                        phoneNumber: $phoneNumber,
                        addressOne: $addressOne,
                        addressTwo: $addressTwo,
                        postcode: $postcode,
                        information: $information,
                    }) {
                        _id
                        firstName
                        surname
                        position
                        email
                        phoneNumber
                        addressOne
                        addressTwo
                        postcode
                        information
                    }
                }
            `,
            variables: {
                firstName: firstName,
                surname: surname,
                position: position,
                email: email,
                phoneNumber: phoneNumber,
                addressOne: addressOne,
                addressTwo: addressTwo,
                postcode: postcode,
                information: information,
            }
        }
        
        const createPlayer = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
            'Content-Type': 'application/json'
            }
        })

        if (createPlayer.status !== 201 && createPlayer.status !== 200) {
            throw new Error('Failed')
        }

        const createdPlayer = await createPlayer.json();
        console.log(createdPlayer)
        document.getElementById("contact-form").reset();
    }

    handleUpdate = async event => {
        event.preventDefault();
        const firstName = this.firstNameElRef.current.value;
        const surname = this.surnameElRef.current.value;
        const position = this.positionElRef.current.value;
        const email = this.emailElRef.current.value;
        const phoneNumber = this.phoneNumberElRef.current.value;
        const addressOne = this.addressOneElRef.current.value;
        const addressTwo = this.addressTwoElRef.current.value;
        const postcode = this.postcodeElRef.current.value;
        const information = this.informationElRef.current.value;
        const id = this.props.selectedPlayer._id;

        const requestBody = {
            query: `
                mutation UpdatePlayer(
                    $_id: ID!
                    $firstName: String!, 
                    $surname: String!
                    $position: String!, 
                    $email: String, 
                    $phoneNumber: String, 
                    $addressOne: String, 
                    $addressTwo: String, 
                    $postcode: String,
                    $information: String,
                ) {
                    updatePlayer(playerId: $_id, playerInput: {
                        firstName: $firstName, 
                        surname: $surname,
                        position: $position,
                        email: $email,
                        phoneNumber: $phoneNumber,
                        addressOne: $addressOne,
                        addressTwo: $addressTwo,
                        postcode: $postcode,
                        information: $information,
                    }) {
                        _id
                        firstName
                        surname
                        position
                        email
                        phoneNumber
                        addressOne
                        addressTwo
                        postcode
                        information
                    }
                }
            `,
            variables: {
                _id: id,
                firstName: firstName,
                surname: surname,
                position: position,
                email: email,
                phoneNumber: phoneNumber,
                addressOne: addressOne,
                addressTwo: addressTwo,
                postcode: postcode,
                information: information,
            }
        }

        const updatePlayer = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
            'Content-Type': 'application/json'
            }
        })

        if (updatePlayer.status !== 201 && updatePlayer.status !== 200) {
            throw new Error('Failed')
        }

        const updatedPlayer = await updatePlayer.json();
        console.log(updatedPlayer)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} id="contact-form">
            <ContactDetailsWrapper>
                <ContactDetailsContainerOne>
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input 
                        id="firstName" 
                        type="text" 
                        ref={this.firstNameElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.firstName : ""}
                    />
                    <Label htmlFor="name">Surname*</Label>
                    <Input 
                        id="surname" 
                        type="text" 
                        ref={this.surnameElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.surname : ""}
                    />
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                        id="email" 
                        type="text" 
                        ref={this.emailElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.email : ""}
                    />
                    <Label htmlFor="phoneNumber">Telephone Number</Label>
                    <Input 
                        id="phoneNumber" 
                        type="text" 
                        ref={this.phoneNumberElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.phoneNumber : ""}
                    />
                    <Label htmlFor="addressOne">Address 1</Label>
                    <Input 
                        id="addressOne" 
                        type="text" 
                        ref={this.addressOneElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.addressOne : ""}
                    />
                    <Label htmlFor="addressTwo">Address 2</Label>
                    <Input 
                        id="addressTwo" 
                        type="text" 
                        ref={this.addressTwoElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.addressTwo : ""}
                    />
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input 
                        id="postcode" 
                        type="text" 
                        ref={this.postcodeElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.postcode : ""}
                    />
                    <Label htmlFor="position">Position*</Label>
                    <Input 
                        id="position" 
                        type="text" 
                        ref={this.positionElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.position : ""}
                    />
                </ContactDetailsContainerOne>
                <ContactDetailsContainerTwo>
                    <ImageWrapper>
                        <img 
                            src={addPhoto} 
                            alt="This is where to upload from"
                            width="250"
                            height="250"
                        />
                    </ImageWrapper>
                    <InformationWrapper>
                        <Label htmlFor="information">Information</Label>
                        <Textarea
                            id="information" 
                            ref={this.informationElRef} 
                            defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.information : ""}
                        />
                    </InformationWrapper>
                </ContactDetailsContainerTwo>
            </ContactDetailsWrapper>
            <Button type="submit">{this.props.editingPlayer ? "Save Edit" : "Submit"}</Button>
        </Form>
        )
    }
}

export default PlayerInformation;


