import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

const songs = [
  { id: 1, name: 'aaa' },
  { id: 2, name: 'bbbb' },
]
const list = (
  <div>
    <h1 className='title' style={{ color: 'skyblue' }}>
      JSX styles
    </h1>
    <ul>
      {songs.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
)

ReactDOM.render(list, document.getElementById('root'))
