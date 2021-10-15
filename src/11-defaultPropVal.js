import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

const App = (props) => {
  return <div value='a string here'>Default Props: {props.pageSize}</div>
}

App.defaultProps = {
  pageSize: 10,
}

ReactDOM.render(<App />, document.getElementById('root'))
