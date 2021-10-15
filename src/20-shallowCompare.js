import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

class App extends React.PureComponent {
  state = {
    obj: { number: 0 },
  }

  handleClick = () => {
    // for obj, array, better create new Obj/ Array to make sure those two point to different address to update the compnent
    const newObj = { ...this.state.obj, number: Math.floor(Math.random() * 3) }
    this.setState((state, props) => {
      return {
        obj: newObj,
      }
    })
  }

  render() {
    console.log('render run')
    return (
      <div>
        <h1 id='title'>Rabdom number is : {this.state.obj.number}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
