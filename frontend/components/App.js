import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, 
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({...this.state, todos:[...this.state.todos, newTodo]})
  }
  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        
        <TodoList todos={todos}/>
        <Form addTodo={this.addTodo}/>

        <button>Clear</button>
      </div>
    )
  }
}
