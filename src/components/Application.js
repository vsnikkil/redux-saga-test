import React, { Component } from 'react'
import Todos from '../containers/Todos'
import TodoButtons from '../containers/TodoButtons'

const applicationStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '5rem'
}

const headerStyle = {
  fontSize: '18px'
}

const Item = ({ children }) => (
  <li>{ children }</li>
)

class Application extends Component {
  render () {
    return (
      <div style = { applicationStyle } className = 'application'>
        <header><h1 style = { headerStyle }>Todo list with redux saga</h1></header>
        <p>There's a delay in add item which redux saga handles in its saga</p>
        <Todos />
        <TodoButtons />
      </div>
    )
  }
}

export default Application

