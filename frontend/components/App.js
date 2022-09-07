import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Clean Room</li>
          <li>Feed Cat</li>
          <li>Make Dinner</li>
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
