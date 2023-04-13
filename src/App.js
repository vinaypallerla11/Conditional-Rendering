import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

//  ***********************Using an If...Else Statement  ****************************

// class App extends Component {
//   state = {
//     isLoggedIn: true,
//   }

//   renderAuthButton = () => {
//     const {isLoggedIn} = this.state
//     if (isLoggedIn === true) {
//       return <button>Logout</button>
//     }
//     return <button>Login</button>
//   }

//   render() {
//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {this.renderAuthButton()}
//       </div>
//     )
//   }
// }

// export default App

// >>>>>>>>>>>>>>>>>>>>>>>>>>> Using Element Variables <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// class App extends Component {
//   state = {isLoggedIn: true}

//   render() {
//     const {isLoggedIn} = this.state
//     let authButton
//     if (isLoggedIn) {
//       authButton = <button>Logout</button>
//     } else {
//       authButton = <button>Login</button>
//     }
//     return (
//       <div className="container">
//         <h1>React JS</h1>
//         <Welcome greeting="Hello" name="User" />
//         {authButton}
//       </div>
//     )
//   }
// }

// export default App

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Using Ternary Operators <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// class App extends Component {
//   state = {isLoggedIn: false}

//   render() {
//     const {isLoggedIn} = this.state
//     return (
//       <div className="container">
//         <Welcome greeting="hello" name="vinay" />
//         {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
//       </div>
//     )
//   }
// }

// export default App

// >>>>>>>>>>>>>>>>>>>>>>>> Using Logical && Operator <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

class App extends Component {
  state = {isLoggedIn: false}

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome name="Reactjs" greeting="hello" />
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
