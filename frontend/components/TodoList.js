import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map(todo => {
              return (<Todo toggleTodo={this.props.toggleTodo} key={todo.id} todo={todo}/>)
            })
          }
        </ul>
      </div>
    )
  }
}
