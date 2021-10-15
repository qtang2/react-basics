import React from 'react'

class IndividualHello extends React.Component {
  handleClick(e) {
    e.preventDefault()
    console.log('Clicked in class component')
  }
  render() {
    return (
      <div>
        <h1>IndividualHello Component</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default IndividualHello
