import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

const App = (props) => {
  console.log(props)
  return (
    <div value='a string here'>
      <h1>children in props is: </h1>
      {props.children}
    </div>
  )
}

const BTN = () => {
  return <button>+1</button>
}

ReactDOM.render(
  <App>
    <p>P tag children</p>
    <BTN />
  </App>,
  document.getElementById('root')
)
