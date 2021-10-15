import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import img from './images/cat.png'
function withMouse(WrappedComponent) {
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
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }

  function getDisplayName() {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }

  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
  return Mouse
}

const Position = (props) => {
  // console.log('Position ', props)
  return (
    <p>
      current mouse position: (x: {props.x}, y: {props.y})
    </p>
  )
}

const Cat = (props) => {
  return (
    <img
      src={img}
      alt='cat'
      style={{
        position: 'absolute',
        top: props.y - 64,
        left: props.x - 64,
      }}
    />
  )
}

const MousePosition = withMouse(Position)
const MouseCat = withMouse(Cat)

class App extends React.Component {
  render() {
    return (
      <div>
        <MousePosition a='aaaaa' />
        <MouseCat />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
