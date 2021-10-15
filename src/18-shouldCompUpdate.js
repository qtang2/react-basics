import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

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
  // use to reduce unneccessary updates
  // will run before render
  /* shouldComponentUpdate(nextProps, nextState) {
    // return bool to decide if update the component
    // return false

    // nextState is latest state, while this.state is previous state

    // if (this.state.number === nextState.number) {
    //   return false
    // }

    // return true

    return this.state.number !== nextState.number
  } */
  render() {
    console.log('render run')
    return (
      <div>
        <NumberBox number={this.state.number} />
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

class NumberBox extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps, 'this.props', this.props)
    return nextProps.number !== this.props.number
  }
  render() {
    console.log('numberbox render run')
    return <h1 id='title'>Rabdom number is : {this.props.number}</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
