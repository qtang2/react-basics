import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import img from './images/cat.png'
import PropTypes from 'prop-types'

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

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }

  render() {
    // return null
    // return this.props.render(this.state)
    return this.props.children(this.state)
  }
}

Mouse.propTypes = {
  children: PropTypes.func.isRequired,
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Props render </h1>
        {/* <Mouse
          render={(mouse) => (
            <p>
              {mouse.x} , {mouse.y}
            </p>
          )}
        /> */}
        <Mouse>
          {(mouse) => (
            <p>
              {mouse.x} , {mouse.y}
            </p>
          )}
        </Mouse>

        <Mouse>
          {(mouse) => (
            <img
              src={img}
              alt='cat'
              style={{
                position: 'absolute',
                top: mouse.x - 64,
                left: mouse.y - 64,
              }}
            />
          )}
        </Mouse>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
