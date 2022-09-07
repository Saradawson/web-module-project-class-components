import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <ul>
        <li key={this.props.todo.id}>{this.props.todo.name} {this.props.todo.completed? <span>-Complete</span> : <span></span>}</li>
      </ul>
    )
  }
}
