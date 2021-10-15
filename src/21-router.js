import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const First = () => <p>Page 11111</p>

const App = () => {
  // router:
  // Link to attri will change pathname in url
  // React Router listen to the change of url
  // then loop through all Route
  // find the match one, and render the component
  return (
    <Router>
      <div>
        <h1>React Router</h1>
        {/* to attribute is location.pathname, which is in url 
            Link is finally render as a tag in page
       */}
        <Link to='/first'>Page1 entry</Link>
        {/*  path is the route rule  */}
        <Route path='/first' component={First}></Route>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
