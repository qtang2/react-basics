import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Login extends React.Component {
  handleLogin = () => {
    // history is passed by Route
    this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        <p>Login: </p>
        <button onClick={this.handleLogin}>Login</button>
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
        <Link to='/login'>login page</Link>
        {/*  path is the route rule, React route(by default) is not exact match rule  */}
        <Route path='/login' component={Login}></Route>
        {/* <Route path='/home' component={Home}></Route> */}

        {/* Default route */}
        <Route path='/' component={Home}></Route>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
