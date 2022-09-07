import React from 'react';
import TodoList from './TodoList';

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
  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        
        <TodoList todos={todos}/>
        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
