import React from "react"
// import { Link } from "gatsby"
// import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

// export const GATSBY_QUERY = graphql`
//   {
//     walthamforest {
//       players {
//         name
//         _id
//       }
//     }
//   }
// `

class ResultsPage extends React.Component {
  state = {
    isLoading: false,
    players: []
  }

  async componentDidMount () {
    this.setState({isLoading: true})
    const requestBody = {
      query: `
        query {
          players {
            _id
            name
          }
        }
      `
    }
    const fetchPlayers = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (fetchPlayers.status !== 200 && fetchPlayers.status !== 201) {
      throw new Error('Failed');
    }

    const playersToJson = await fetchPlayers.json();

    this.setState({players: playersToJson.data.players, isLoading: false})
  }

  render() {
    return (
      <Layout>
        <SEO title="Results" />
        <h1>Results & Table</h1>
        <h2>Players</h2>
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.players.map(player => (
            <li key={player._id}>
              <p>{player.name}</p>
              <p>{player._id}</p>
            </li>
        ))}
      </Layout>
    )
  }
}

export default ResultsPage
