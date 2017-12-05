import React, { Component } from 'react'

const listStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0
}

const itemStyle = {
  padding: '1rem',
  margin: '.2rem 0',
  backgroundColor: '#def'
}

const TodoItem = ({ value, onRemove }) => (
  <li style = { itemStyle }>{ value } <button onClick = { onRemove }>Remove</button></li>
)

class Todos extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const todos = this.props.todos
    return (
      <ul style = { listStyle } className = 'list-of-todos'>
        { todos.map(todoItem => <TodoItem key = { todoItem } value = { todoItem } onRemove = { () => this.props.removeItem(todoItem) } />) }
      </ul>
    )
  }
}

export default Todos

