import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

class App extends React.Component {
  state = {
    comments: [
      { id: 1, name: 'jack', content: '沙发！！！' },
      { id: 2, name: 'rose', content: '板凳~' },
      { id: 3, name: 'tom', content: '楼主好人' },
    ],
    username: '',
    userContent: '',
  }

  handleForm = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  addComment = () => {
    const { username, userContent, comments } = this.state
    if (username.trim() === '' || userContent.trim() === '') {
      alert('Input username and comment')
      return
    }
    const newComments = [
      {
        id: Math.random(),
        name: username,
        content: userContent,
      },
      ...comments,
    ]

    this.setState({
      comments: newComments,
      username: '',
      userContent: '',
    })
  }

  renderList() {
    const { comments } = this.state
    if (comments.length === 0) {
      return <div className='no-comment'>暂无评论，快去评论吧~</div>
    }
    return (
      <ul>
        {this.state.comments.map((item) => (
          <li key={item.id}>
            <h3>评论人：{item.name}</h3>
            <p>评论内容：{item.content}</p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const { username, userContent } = this.state
    return (
      <div className='app'>
        <div>
          <input
            name='username'
            value={username}
            className='user'
            type='text'
            placeholder='请输入评论人'
            onChange={this.handleForm}
          />
          <br />
          <textarea
            name='userContent'
            value={userContent}
            className='content'
            cols='30'
            rows='10'
            placeholder='请输入评论内容'
            onChange={this.handleForm}
          />
          <br />
          <button onClick={this.addComment}>发表评论</button>
        </div>
        {this.renderList()}
        {/* {this.state.comments.length === 0 ? (
          <div className='no-comment'>暂无评论，快去评论吧~</div>
        ) : (
          <ul>
            {this.state.comments.map((item) => (
              <li key={item.id}>
                <h3>评论人：{item.name}</h3>
                <p>评论内容：{item.content}</p>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
