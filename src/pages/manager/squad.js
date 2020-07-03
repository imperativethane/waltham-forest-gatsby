import React from "react"
import styled from "styled-components"
// import React.Fragment from '../../components/layout';

import addPhoto from "../../images/add-photo.png";

const Form = styled.form`
    margin: 0;
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

const ContactDetails = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ContactDetailsTwo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
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

const Button = styled.button`
  height: 40px;
  width: 250px;
  background-color: ${props => props.theme.colors.action};
  color: ${props => props.theme.colors.dark};
  padding: 0 ${props => props.theme.spacers.indent};
  border: none;
  font-family: ${props => props.theme.fontFamily.regular};
  border-radius: 50px;
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  margin-top: ${props => props.theme.spacers.indent};
  cursor: pointer;
`


class Squad extends React.Component {
    constructor(props) {
        super(props);
        this.nameElRef = React.createRef();
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
        const name = this.nameElRef.current.value
        const position = this.positionElRef.current.value
        const email = this.emailElRef.current.value
        const phoneNumber = this.phoneNumberElRef.current.value
        const addressOne = this.addressOneElRef.current.value
        const addressTwo = this.addressTwoElRef.current.value
        const postcode = this.postcodeElRef.current.value
        const information = this.informationElRef.current.value

        const requestBody = {
            query: `
                mutation CreatePlayer(
                    $name: String!, 
                    $position: String!, 
                    $email: String, 
                    $phoneNumber: String, 
                    $addressOne: String, 
                    $addressTwo: String, 
                    $postcode: String,
                    $information: String,
                ) {
                    createPlayer(playerInput: {
                        name: $name, 
                        position: $position,
                        email: $email,
                        phoneNumber: $phoneNumber,
                        addressOne: $addressOne,
                        addressTwo: $addressTwo,
                        postcode: $postcode,
                        information: $information,
                    }) {
                        _id
                        name
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
                name: name,
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
        //Once the carousel has been added it will need to add the player to the carousel as well.
    }

    render() {
    return (
        <React.Fragment>
        <h1>Create Player</h1>
        <Form onSubmit={this.handleSubmit} id="contact-form">
                <ContactDetailsWrapper>
                <ContactDetails>
                    <Label htmlFor="name">Name*</Label>
                    <Input 
                        id="name" 
                        type="text" 
                        ref={this.nameElRef}
                    />
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                        id="email" 
                        type="text" 
                        ref={this.emailElRef}
                    />
                    <Label htmlFor="phoneNumber">Telephone Number</Label>
                    <Input 
                        id="phoneNumber" 
                        type="text" 
                        ref={this.phoneNumberElRef}
                    />
                    <Label htmlFor="addressOne">Address 1</Label>
                    <Input 
                        id="addressOne" 
                        type="text" 
                        ref={this.addressOneElRef}
                    />
                    <Label htmlFor="addressTwo">Address 2</Label>
                    <Input 
                        id="addressTwo" 
                        type="text" 
                        ref={this.addressTwoElRef}
                    />
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input 
                        id="postcode" 
                        type="text" 
                        ref={this.postcodeElRef}
                    />
                    <Label htmlFor="position">Position*</Label>
                    <Input 
                        id="position" 
                        type="text" 
                        ref={this.positionElRef}
                    />
                </ContactDetails>
                <ContactDetailsTwo>
                    <ImageWrapper>
                        <img 
                            src={addPhoto} 
                            alt="This is where to upload from"
                            width="200"
                            height="200"
                        />
                    </ImageWrapper>
                    <InformationWrapper>
                        <Label htmlFor="information">Information</Label>
                        <Textarea
                            id="information" 
                            ref={this.informationElRef} 
                        />
                    </InformationWrapper>
                </ContactDetailsTwo>
            </ContactDetailsWrapper>
            <Button type="submit">Submit</Button>
        </Form>
        </React.Fragment>

    )
    }
}

export default Squad