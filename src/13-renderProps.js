import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0,
  }

  handleMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)
  }

  render() {
    // return null
    return this.props.render(this.state)
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Props render </h1>
        <Mouse
          render={(mouse) => (
            <p>
              {mouse.x} , {mouse.y}
            </p>
          )}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
