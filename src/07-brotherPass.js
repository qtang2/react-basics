import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

class Counter extends React.Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div>
        <Child1 count={this.state.count} />
        <Child2 onIncrement={this.onIncrement} />
      </div>
    )
  }
}

const Child1 = (props) => {
  return <p>Count is : {props.count} </p>
}
const Child2 = (props) => {
  return <button onClick={() => props.onIncrement()}>+1</button>
}

ReactDOM.render(<Counter />, document.getElementById('root'))
