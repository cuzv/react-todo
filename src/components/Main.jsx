import React, { Component } from 'react'
import Row from './Row'
import './Main.css'

export default class Main extends Component {
    render() {
        return (
            <ul className="todo-main">
            <Row />
            <Row />
          </ul>
        )
    }
}