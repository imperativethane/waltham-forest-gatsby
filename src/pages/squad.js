import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

class SquadPage extends React.Component {
  // state = {
  //   name: "",
  //   position: ""
  // };

  // handleInputChange = event => {
  //   const target = event.target
  //   const value = event.value
  //   const name = event.name

  //   this.setState({ 
  //     [name]: value
  //   });
  // };

  constructor(props) {
    super(props);
    this.nameElRef = React.createRef();
    this.positionElRef = React.createRef();
  }

  handleSubmit = async event => {
    event.preventDefault();
    const name = this.nameElRef.current.value
    const position = this.positionElRef.current.value

    console.log(name, position);

    const requestBody = {
      query: `
        mutation CreatePlayer($name: String!, $position: String!) {
          createPlayer(playerInput: {name: $name, position: $position}) {
            _id
            name
            position
          }
        }
      `,
      variables: {
        name: name,
        position: position
      }
    }
      
    const createPlayer = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(createPlayer);

    if (createPlayer.status !== 201 && createPlayer.status !== 200) {
      throw new Error('Failed')
    }

    const createdPlayer = await createPlayer.json();
    console.log(createdPlayer);
  }

  render() {
    return (
      <Layout>
        <h1>Create Player</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            type="text" 
            ref={this.nameElRef}
          />
          <label htmlFor="position">Position</label>
          <input 
            id="position" 
            type="text" 
            ref={this.positionElRef}
          />
          <button type="submit">Submit</button>
        </form>
      </Layout>

    )
  }
}

// class SquadPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.nameElRef = React.createRef();
//     this.positionElRef = React.createRef();
//   }

//   createPlayerHandler = async () => {
//     const name = this.nameElRef.current.value;
//     const position = this.nameElRef.current.value;

//     const requestBody = {
//       query: `
//         mutation CreatePlayer($name: String!, $position: String!) {
//           createPlayer(playerInput: {name: $name, position: $position}) {
//             _id
//             name
//             position
//           }
//         }
//       `,
//       variables: {
//         name: name,
//         position: position
//       }
//     }

//     const createPlayer = await fetch('http://localhost/4000', {
//       method: 'POST',
//       body: JSON.stringify(requestBody),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     console.log(createPlayer);

//     if (createPlayer.status !== 201 && createPlayer.status !== 200) {
//       throw new Error('Failed')
//     }

//     const createdPlayer = await createPlayer.json();
//     console.log(createdPlayer);


//   }

//   render() {
//     return (
//         <Layout>
//           <SEO title="Squad" />
//           <h1>Squad & Statistics</h1>
//           <form>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" ></input>
//             <label htmlFor="position">Position</label>
//             <input type="text" id="position" ></input>
//             <button onClick={this.createPlayerHandler}>Submit</button>
//           </form>
//         </Layout>
//     )
//   }
// }

// const SquadPage = () => (
//   <Layout>
//     <SEO title="Squad" />
//     <h1>Squad & Statistics</h1>


//   </Layout>
// )

export default SquadPage
