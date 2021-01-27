import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './Header.css'

export default class Header extends Component {
  static propType = {
    handleCreateTodo: PropTypes.func.isRequired
  }

  handleCreateTodo = (event) => {
    const {keyCode, target} = event
    // Enter key
    if (13 !== keyCode) {
      return
    }
    
    const name = target.value.trim()
    if (name === '') {
      return
    }

    const candidate = {
      id: nanoid(),
      name: name,
      accomplish: false
    }
    this.props.handleCreateTodo(candidate)

    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleCreateTodo} />
      </div>
    )
  }
}
