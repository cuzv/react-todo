import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Row from './Row'
import './Main.css'

export default class Main extends Component {
  static propType = {
    todos: PropTypes.array.isRequired,
    handleToggleAccomplish: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  }

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