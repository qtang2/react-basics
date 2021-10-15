import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

// class App extends React.PureComponent {
class App extends React.Component {
  state = {
    number: 0,
  }

  handleClick = () => {
    this.setState((state, props) => {
      return {
        number: Math.floor(Math.random() * 3),
      }
    })
  }

  render() {
    console.log('render run')
    return (
      <div>
        {/* <h1 id='title'>Rabdom number is : {this.state.number}</h1> */}
        <NumberBox number={this.state.number} />
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

class NumberBox extends React.PureComponent {
  render() {
    console.log('numberbox render run')
    return <h1 id='title'>Rabdom number is : {this.props.number}</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
