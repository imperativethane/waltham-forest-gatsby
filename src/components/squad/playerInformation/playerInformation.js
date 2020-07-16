import React from 'react';

import Button from '../../buttons/buttons';
import addPhoto from "../../../images/add-photo.png";
import divider from "../../../images/divider.png";

import { createPlayerQuery, updatePlayerQuery, createEmergencyContactQuery, updateEmergencyContactQuery } from "./playerQueries";

import {
    Form,
    ContactDetailsWrapper,
    ContactDetailsContainerOne, 
    ContactDetailsContainerTwo,
    InformationWrapper,
    ImageWrapper,
    Label,
    Input,
    Textarea,
    EmergencyContactHeader,
    Divider,
    EmergencyContactsWrapper
} from "./playerInformationStyles";

class PlayerContactDetails extends React.Component {
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

        this.ecfirstNameElRef = React.createRef();
        this.ecsurnameElRef = React.createRef();
        this.ecrelationshipElRef = React.createRef();
        this.ecphoneNumberElRef = React.createRef();
    }

    handleNewPlayer = async event => {
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

        const ecfirstName = this.ecfirstNameElRef.current.value;
        const ecsurname = this.ecsurnameElRef.current.value;
        const ecrelationship = this.ecrelationshipElRef.current.value;
        const ecphoneNumber = this.ecphoneNumberElRef.current.value;

        let playerRequest
        playerRequest = createPlayerQuery(
            firstName, 
            surname,
            position,
            email,
            phoneNumber,
            addressOne,
            addressTwo,
            postcode,
            information
        )
        
        const handlePlayer = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(playerRequest),
            headers: {
            'Content-Type': 'application/json'
            }
        })

        if (handlePlayer.status !== 201 && handlePlayer.status !== 200) {
            throw new Error('Failed')
        }

        const handledPlayer = await handlePlayer.json();
        await this.props.newPlayer(handledPlayer.data.createPlayer);

        let emergencyContactRequest
        if (ecfirstName.trim() !== "" || ecsurname.trim() !== "" || ecrelationship.trim() !== "" || ecphoneNumber.trim() !== "") {
            emergencyContactRequest = createEmergencyContactQuery(
                this.props.selectedPlayer._id,
                ecfirstName,
                ecsurname,
                ecrelationship,
                ecphoneNumber
            )

            const handleEmergencyContact = await fetch('http://localhost:4000/graphql', {
                method: 'POST',
                body: JSON.stringify(emergencyContactRequest),
                headers: {
                'Content-Type': 'application/json'
                }
            })
    
            if (handleEmergencyContact.status !== 201 && handleEmergencyContact.status !== 200) {
                throw new Error('Failed')
            }
    
            const handledEmergencyContact = await handleEmergencyContact.json();
            console.log(handledEmergencyContact)
        } 

        this.props.resetPlayer();
        document.getElementById("contact-form").reset();
    }

    handleEditPlayer = async event => {
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

        const ecfirstName = this.ecfirstNameElRef.current.value;
        const ecsurname = this.ecsurnameElRef.current.value;
        const ecrelationship = this.ecrelationshipElRef.current.value;
        const ecphoneNumber = this.ecphoneNumberElRef.current.value;

        let playerRequest
        playerRequest = updatePlayerQuery(
            this.props.selectedPlayer._id,
            firstName, 
            surname,
            position,
            email,
            phoneNumber,
            addressOne,
            addressTwo,
            postcode,
            information
        )
        
        const handlePlayer = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(playerRequest),
            headers: {
            'Content-Type': 'application/json'
            }
        })

        if (handlePlayer.status !== 201 && handlePlayer.status !== 200) {
            throw new Error('Failed')
        }

        const handledPlayer = await handlePlayer.json();
        await this.props.updatePlayer(handledPlayer.data.updatePlayer);

        let emergencyContactRequest
        if (ecfirstName.trim() !== "" || ecsurname.trim() !== "" || ecrelationship.trim() !== "" || ecphoneNumber.trim() !== "") {
            emergencyContactRequest = updateEmergencyContactQuery(
                this.props.selectedPlayer._id,
                ecfirstName,
                ecsurname,
                ecrelationship,
                ecphoneNumber
            )

            const handleEmergencyContact = await fetch('http://localhost:4000/graphql', {
                method: 'POST',
                body: JSON.stringify(emergencyContactRequest),
                headers: {
                'Content-Type': 'application/json'
                }
            })
    
            if (handleEmergencyContact.status !== 201 && handleEmergencyContact.status !== 200) {
                throw new Error('Failed')
            }
    
            const handledEmergencyContact = await handleEmergencyContact.json();
            await this.props.updatePlayer(handledEmergencyContact.data.updateEmergencyContact);
        } 
    }

    render() {
        return (
            <Form id="contact-form" onSubmit={this.props.editingPlayer ? this.handleEditPlayer : this.handleNewPlayer}>
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
                <EmergencyContactHeader>Emergency Contact</EmergencyContactHeader>
                <Divider src={divider} alt="---------------------------------------------------------------------------------"/>
                <EmergencyContactsWrapper>
                    <Label htmlFor="ecfirstName">First Name</Label>
                    <Input 
                        id="ecfirstName" 
                        type="text" 
                        ref={this.ecfirstNameElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.emergencyContact.firstName : ""}
                    />
                    <Label htmlFor="ecsurname">Surname</Label>
                    <Input 
                        id="ecsurname" 
                        type="text" 
                        ref={this.ecsurnameElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.emergencyContact.surname : ""}
                    />
                    <Label htmlFor="ecrelationship">Relationship</Label>
                    <Input 
                        id="ecrelationship" 
                        type="text" 
                        ref={this.ecrelationshipElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.emergencyContact.relationship: ""}
                    />
                    <Label htmlFor="ecphoneNumber">Telephone Number</Label>
                    <Input 
                        id="ecphoneNumber" 
                        type="text" 
                        ref={this.ecphoneNumberElRef}
                        defaultValue={this.props.editingPlayer ? this.props.selectedPlayer.emergencyContact.phoneNumber : ""}
                    />
                </EmergencyContactsWrapper>
                <Button type="submit">{this.props.editingPlayer ? "Save Edit" : "Submit"}</Button>
            </Form>
        )
    }
}

export default PlayerContactDetails;