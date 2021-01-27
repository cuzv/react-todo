import React, { Component } from 'react'
import './Row.css'

export default class Row extends Component {
  state = {
      highlighted: false
  }

  handleHighlightChanges = (highlighted) => {
    return () => {
      this.setState({highlighted})
    }
  }

  handleToggleAccomplish = (id) => {
    return (event) => {
      this.props.handleToggleAccomplish(id, event.target.checked)
    }
  }

  handleDelete = (id) => {
    return () => {
      if (window.confirm('Are you confirm to delete this todo task?')) {
        this.props.handleDelete(id)
      }
    }
  }

  render() {
      const {id, name, accomplish} = this.props
      const {highlighted} = this.state
      return (
          <li onMouseEnter={this.handleHighlightChanges(true)} onMouseLeave={this.handleHighlightChanges(false)} style={{backgroundColor: highlighted ? '#ddd' : 'white'}}>
            <label>
              <input type="checkbox" checked={accomplish} onChange={this.handleToggleAccomplish(id)}/>
              <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display: highlighted ? 'block' : 'none'}} onClick={this.handleDelete(id)}>删除</button>
          </li>
      )
  }
}
