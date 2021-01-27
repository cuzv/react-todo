import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      {id: '1', name: '上班', accomplish: true},
      {id: '2', name: '睡觉', accomplish: true},
      {id: '3', name: '干饭', accomplish: false}
    ]
  }

  handleToggleAccomplish = (id, accomplish) => {
    const {todos} = this.state
    const candidates = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, accomplish}
      }
      return todo
    })
    this.setState({todos: candidates})
  }

  handleDelete = (id) => {
    const {todos} = this.state
    const candidates = todos.filter(todo => todo.id !== id)
    this.setState({todos: candidates})
  }

  handleCreateTodo = (todo) => {
    const {todos} = this.state
    const candidates = [todo, ...todos]
    this.setState({todos: candidates})
  }

  handleToggleAccomplishAll = (accomplish) => {
    const {todos} = this.state
    const candidates = todos.map(todo => { return {...todo, accomplish} })
    this.setState({todos: candidates})
  }

  handleClearAllAccomplished = () => {
    const {todos} = this.state
    const candidates = todos.filter(todo => !todo.accomplish)
    this.setState({todos: candidates})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header handleCreateTodo={this.handleCreateTodo} />
          <Main todos={todos} handleToggleAccomplish={this.handleToggleAccomplish} handleDelete={this.handleDelete} />
          <Footer todos={todos} handleToggleAccomplishAll={this.handleToggleAccomplishAll} handleClearAllAccomplished={this.handleClearAllAccomplished} />
        </div>
      </div>
    )
  }
}
