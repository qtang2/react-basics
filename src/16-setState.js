import { checkPropTypes } from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

class App extends React.Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    // 1. setState is async method
    // 2. dont let later setState depends on previous setState
    // 3. render will only run one time even setState is called multiple times
    /* this.setState({
      count: this.state.count + 1,
    })
    console.log('1 count ', this.state.count) ===> 1
    this.setState({
      count: this.state.count + 1,
    })
    console.log('2 scount ', this.state.count) ===>1 */

    // 1. also an async func
    // 2. state, and props is latest
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      }
    })
    this.setState(
      (state, props) => {
        console.log('latest state count ', state.count)
        return {
          count: state.count + 1,
        }
      },
      // second param is a callback func
      // it will run after state updated and page rerendered
      () => {
        console.log('latest count in callback ', this.state.count)
        console.log(
          'h1 inner Text ',
          document.getElementById('title').innerHTML
        )
      }
    )

    console.log('count ', this.state.count)
  }
  render() {
    console.log('render run')
    return (
      <div>
        <h1 id='title'>Count is : {this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
