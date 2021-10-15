import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import IndividualHello from './Hello'

function Hello() {
  function handleClick() {
    console.log('Clicked in function component')
  }
  return (
    <div>
      <h1>function Component</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

const Hello1 = () => <h1>Arrow Function Component</h1>

class Hello2 extends React.Component {
  render() {
    return <h1>Class Component</h1>
  }
}

// ReactDOM.render(<Hello />, document.getElementById('root'))
// ReactDOM.render(<Hello1 />, document.getElementById('root'))
// ReactDOM.render(<Hello2 />, document.getElementById('root'))
// ReactDOM.render(<IndividualHello />, document.getElementById('root'))
ReactDOM.render(<Hello />, document.getElementById('root'))
