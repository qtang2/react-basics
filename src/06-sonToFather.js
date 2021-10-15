import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

class Parent extends React.Component {
  state = {
    lastName: 'Green',
    msg: '',
  }

  getChildMsg = (m) => {
    this.setState({
      msgc: m,
    })
  }
  render() {
    return (
      <div>
        father: message from child: {this.state.msg}
        <Child name={this.state.lastName} getMsg={this.getChildMsg} />
      </div>
    )
  }
}

// const Child = (props) => {
//   return <div>child : lastName form fater: {props.name}</div>
// }
class Child extends React.Component {
  state = {
    msg: 'message for father',
  }

  handleClick = () => {
    this.props.getMsg(this.state.msg)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Pass msg to father</button>
      </div>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'))
