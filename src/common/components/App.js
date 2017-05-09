import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../actions/comment.js'

class App extends Component {
  componentDidMount() {
    this.props.onGetComments()
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <ul>
          {this.props.comments.map((comment) => <li key={comment.title}>{comment.title}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
})

export default connect(
  mapStateToProps,
  { onGetComments: getComments }
)(App)