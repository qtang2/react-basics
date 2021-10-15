import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

// programmer write JSX Grammar
const element = <h1 className='greeting'>Hello JSX</h1>

// @babel/preset-react compile as:
// const element = React.createElement('h1', {className: 'greeting'}, 'Hello JSX')

// final transfer to React element, an JS Obj:
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello JSX'
//   }
// }

console.log(element)

ReactDOM.render(element, document.getElementById('root'))
