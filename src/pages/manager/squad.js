import React from "react";
import { useStaticQuery, graphql} from "gatsby";
import PlayerCarousel from "../../components/squad/playerCarousel/playerCarousel";
import PlayerInformation from "../../components/squad/playerInformation/playerInformation";
import EmergencyContact from "../../components/squad/emergencyContact/emergencyContact";

class Squad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: this.props.players,
            isLoading: false,
            selectedPlayer: {},
            editingPlayer: false,
            emergencyContact: {} 
        }
        this.selectPlayer = this.selectPlayer.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer() {
        this.setState({
            selectedPlayer: {},
            editingPlayer: false
        })
    }

    selectPlayer(playerId) {
        const player = this.state.players.find(player => player._id === playerId);
        this.setState({
            selectedPlayer: player,
            editingPlayer: true
        })
    }

    async componentDidMount() {
        if (this.state.editingPlayer) {
            const requestBody = {
                query: `
                    query EmergencyContact($playerId: ID!) {
                        playerEmergencyContact(playerId: $playerId) {
                            _id
                            firstName
                            surname
                            phoneNumber
                            relationship
                        }
                    }
                `,
                variables: {
                    playerId: this.state.selectedPlayer._id
                }
            }

            const emergencyContact = await fetch('http://localhost:4000/graphql', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                'Content-Type': 'application/json'
                }
            })

            if (emergencyContact.status !== 201 && emergencyContact.status !== 200) {
                throw new Error('Failed')
            }
    
            const emergencyContactData = await emergencyContact.json();
            console.log(emergencyContactData);
        }
    }

    render() {
        return (
            <React.Fragment>
                <PlayerCarousel 
                    players={this.state.players}
                    editPlayer={this.selectPlayer}
                    addPlayer={this.addPlayer}
                />
                {this.state.isLoading === true && <p>Loading...</p>}
                {this.state.isLoading === false && <PlayerInformation 
                    editingPlayer={this.state.editingPlayer} 
                    selectedPlayer={this.state.selectedPlayer}
                />}
                {/* {this.state.isLoading === false && 
                    this.state.editingPlayer === true && 
                    <EmergencyContact />
                } */}

            </React.Fragment>
        )
    }
}

export default () => {
    const data = useStaticQuery(graphql`
        {
            walthamforest {
                players {
                    _id
                    firstName
                    surname
                    position
                    phoneNumber
                    email
                    addressOne
                    addressTwo
                    postcode
                    information
                    appearances {
                        starter
                        substitute
                        goalsScored
                    }
                }
            }
        }
    `)

    return (
        <Squad players={data.walthamforest.players}></Squad>
    )
}
