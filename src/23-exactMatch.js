import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Login: </p>
      </div>
    )
  }
}
class Home extends React.Component {
  handleBack = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.handleBack}>Back to login</button>
      </div>
    )
  }
}

const App = () => {
  return (
    <Router>
      <div>
        <h1>React Router</h1>

        <Route path='/login' component={Login}></Route>

        {/* Default route, exact set the route need to be exact match */}
        <Route exact path='/' component={Home}></Route>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
