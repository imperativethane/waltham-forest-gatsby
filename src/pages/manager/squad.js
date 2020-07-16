import React from "react";
import { useStaticQuery, graphql} from "gatsby";
import PlayerCarousel from "../../components/squad/playerCarousel/playerCarousel";
import PlayerInformation from "../../components/squad/playerInformation/playerInformation";


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
        this.resetPlayer = this.resetPlayer.bind(this);
        this.newPlayer = this.newPlayer.bind(this);
        this.updatePlayer = this.updatePlayer.bind(this);
    }

    async resetPlayer() {
        await this.setState({
            selectedPlayer: {},
            editingPlayer: false
        })
        document.getElementById("contact-form").reset();
    }

    async updatePlayer(updatedPlayer) {
        await this.setState(prevState => {
            const playerIndex = prevState.players.findIndex(player => player._id === updatedPlayer._id);
            const players = prevState.players;
            players.splice(playerIndex, 1, updatedPlayer);
            return {
                players: players,
                selectedPlayer: updatedPlayer
            }  
        })
    }

    // async updateEmergencyContact(updatedPlayer) {
    //     await this.setState(prevState => {
    //         const playerIndex = prevState.players.findIndex(player => player._id === updatedPlayer._id);
    //         const players = prevState.players;
    //         players[playerIndex].emergencyContact = updatedEmergencyContact;
    //         const player = players[playerIndex];
    //         return {
    //             players: players,
    //             selectedPlayer: player
    //         }
    //     })
    // }

    async newPlayer(player) {
        await this.setState(prevState => {
            const players = prevState.players.concat(player);
            return {
                players: players,
                selectedPlayer: player
            }
        })
    }

    async selectPlayer(playerId) {
        await document.getElementById("contact-form").reset();
        const player = this.state.players.find(player => player._id === playerId);
        await this.setState({
            selectedPlayer: player,
            editingPlayer: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <PlayerCarousel 
                    players={this.state.players}
                    editPlayer={this.selectPlayer}
                    addPlayer={this.resetPlayer}
                />
                {this.state.isLoading === true && <p>Loading...</p>}
                {this.state.isLoading === false && <PlayerInformation 
                    players={this.state.players}
                    editingPlayer={this.state.editingPlayer} 
                    selectedPlayer={this.state.selectedPlayer}
                    newPlayer={this.newPlayer}
                    resetPlayer={this.resetPlayer}
                    updatePlayer={this.updatePlayer}
                />}
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
                    emergencyContact {
                        firstName
                        surname
                        relationship
                        phoneNumber
                    }
                }
            }
        }
    `)

    return (
        <Squad players={data.walthamforest.players}></Squad>
    )
}
