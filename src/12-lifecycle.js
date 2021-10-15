import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

class App extends React.Component {
  constructor() {
    super()
    console.warn('life cycle hooks constructor')

    this.state = {
      count: 0,
    }
  }

  // 1. send request
  // 2. DOM operation
  componentDidMount() {
    const title = document.getElementById('title')
    console.log(title)
    console.warn('life cycle hooks componentDidMount')
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    })

    // this.forceUpdate()
  }

  render() {
    console.warn('life cycle hooks render')
    return (
      <div>
        <h1 id='title'>Life cycle</h1>
        {this.state.count > 3 ? (
          'more than 3 '
        ) : (
          <Counter count={this.state.count} />
        )}

        <button onClick={this.handleClick}>Get count</button>
      </div>
    )
  }
}

class Counter extends React.Component {
  // 1. send request
  // 2. DOM operation
  // 3. if use setState , must use if condition
  //    if(prevProps.count !== this.props.count)
  componentDidUpdate(prevProps) {
    // const title = document.getElementById('sontitle')
    // console.log(title.innerHTML)
    console.log('prev props ', prevProps, 'this props ', this.props)
    if (prevProps.count !== this.props.count) {
      this.setState({})
    }
    console.warn('son component life cycle hooks componentDidUpdate')
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      console.log('timer running')
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
    console.warn('son component life cycle hooks componentWillUnmount')
  }
  render() {
    console.warn('son component life cycle hooks render')

    return <h1 id='sontitle'>Count is : {this.props.count} </h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
