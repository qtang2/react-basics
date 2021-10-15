import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      txt: '',
      content: '',
      city: 'bj',
      isChecked: false,
    }
  }

  // use one handler for all elements
  handleForm = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  /* handleChange = (e) => {
    this.setState({
      txt: e.target.value,
    })
  }
  handleContent = (e) => {
    this.setState({
      content: e.target.value,
    })
  }
  handleCity = (e) => {
    this.setState({
      city: e.target.value,
    })
  }
  handleCheck = (e) => {
    this.setState({
      isChecked: e.target.checked,
    })
  } */
  render() {
    return (
      <div>
        {/* input */}
        <input name='txt' value={this.state.txt} onChange={this.handleForm} />
        {/* content */}
        <textarea
          name='content'
          value={this.state.content}
          onChange={this.handleForm}
        ></textarea>
        {/* select */}
        <select name='city' value={this.state.city} onChange={this.handleForm}>
          <option value='sh'>shanghai</option>
          <option value='bj'>beijing</option>
          <option value='gz'>Gguanzhou</option>
        </select>
        <input
          name='isChecked'
          type='checkbox'
          value={this.state.isChecked}
          onChange={this.handleForm}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
