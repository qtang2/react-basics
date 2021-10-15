import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor', props)
  }
  render() {
    console.log(this.props)
    return <div className='app'>props: {this.props.name}</div>
  }
}

ReactDOM.render(
  <App name='aaa' fn={() => console.log('fnnnn')} tag={<p>pppp</p>} />,
  document.getElementById('root')
)
