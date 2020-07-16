export const createPlayerQuery = (firstName, surname, position, email, phoneNumber, addressOne, addressTwo, postcode, information) => {
    return {
        query: `
            mutation CreatePlayer(
                $firstName: String!, 
                $surname: String!,
                $position: String!, 
                $email: String, 
                $phoneNumber: String, 
                $addressOne: String, 
                $addressTwo: String, 
                $postcode: String,
                $information: String
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
                    appearances {
                        starter
                        substitute
                        goalsScored
                    }
                    emergencyContact {
                        firstName
                        surname
                        relationship
                        phoneNumber
                    }
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
} 

export const updatePlayerQuery = (id, firstName, surname, position, email, phoneNumber, addressOne, addressTwo, postcode, information) => {
    return {
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
                    appearances {
                        starter
                        substitute
                        goalsScored
                    }
                    emergencyContact {
                        firstName
                        surname
                        relationship
                        phoneNumber
                    }
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
} 

export const updateEmergencyContactQuery = (playerId, firstName, surname, relationship, phoneNumber) => {
    return {
        query: `
            mutation UpdateEmergencyContact(
                $playerId: ID!,
                $firstName: String, 
                $surname: String,
                $relationship: String, 
                $phoneNumber: String 
            ) {
                updateEmergencyContact(playerId: $playerId, emergencyContactInput: {
                    firstName: $firstName, 
                    surname: $surname,
                    relationship: $relationship,
                    phoneNumber: $phoneNumber
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
                    appearances {
                        starter
                        substitute
                        goalsScored
                    }
                    emergencyContact {
                        firstName
                        surname
                        relationship
                        phoneNumber
                    }
                }
            }
        `,
        variables: {
            playerId: playerId,
            firstName: firstName,
            surname: surname,
            relationship: relationship,
            phoneNumber: phoneNumber
        }
    }
} 

