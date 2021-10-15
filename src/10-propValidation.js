import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import PropTypes from 'prop-types'

const App = (props) => {
  return <div value='a string here'>Props validation</div>
}

App.propTypes = {
  a: PropTypes.number, // .func.isRequired, .object, .bool
  fn: PropTypes.func.isRequired,
  tag: PropTypes.element,
  filter: PropTypes.shape({
    area: PropTypes.string,
    price: PropTypes.number,
  }),
}

ReactDOM.render(
  <App fn={() => console.log('lll')} />,
  document.getElementById('root')
)
