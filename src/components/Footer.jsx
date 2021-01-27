import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Footer.css'

export default class Footer extends Component {
  static propType = {
    todos: PropTypes.array.isRequired,
    handleToggleAccomplishAll: PropTypes.func.isRequired,
    handleClearAllAccomplished: PropTypes.func.isRequired,
  }

  handleToggleAccomplishAll = (event) => {
    this.props.handleToggleAccomplishAll(event.target.checked)
  }

  handleClearAllAccomplished = () => {
    if (window.confirm('Are you confirm to clear all accomplished task?')) {
      this.props.handleClearAllAccomplished()
    }
  }

  render() {
    const {todos} = this.props
    const totalCount = todos.length
    const accomplishedCount = todos.filter(todo => todo.accomplish).length
    const checked = totalCount === accomplishedCount && 0 !== totalCount

    return (
      <div className="todo-footer">
      <label>
        <input type="checkbox" checked={checked} onChange={this.handleToggleAccomplishAll} />
      </label>
      <span>
        <span>已完成{accomplishedCount}</span> / 全部{totalCount}
      </span>
      <button className="btn btn-danger" onClick={this.handleClearAllAccomplished}>清除已完成任务</button>
    </div>
    )
  }
}
