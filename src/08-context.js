import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

const { Provider, Consumer } = React.createContext()

class Counter extends React.Component {
  render() {
    return (
      <Provider value='a string here'>
        <div>
          <Node />
        </div>
      </Provider>
    )
  }
}

const Node = () => {
  return (
    <div>
      <SubNode />
    </div>
  )
}
const SubNode = () => {
  return (
    <div>
      <Child />
    </div>
  )
}
const Child = (props) => {
  return (
    <div>
      Data get from ancestor is :
      <Consumer>{(data) => <span>{data}</span>}</Consumer>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById('root'))
