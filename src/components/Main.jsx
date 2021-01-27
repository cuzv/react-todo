import React, { Component } from 'react'
import Row from './Row'
import './Main.css'

export default class Main extends Component {
    render() {
      const {todos, handleToggleAccomplish, handleDelete} = this.props

        return (
            <ul className="todo-main">
              {
                todos.map(todo => <Row key={todo.id} 
                  {...todo}
                  handleToggleAccomplish={handleToggleAccomplish}
                  handleDelete={handleDelete} />)
              }
          </ul>
        )
    }
}