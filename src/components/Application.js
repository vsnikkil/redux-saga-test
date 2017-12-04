import React, { Component } from 'react'

const Item = ({ children }) => (
  <li>{ children }</li>
)

class Application extends Component {
  render () {
    return (
      <div className = 'application'>
        <header>Redux saga test</header>
        <ul>
          { this.props.items.map((itemName, idx) => (<Item key = { idx }>{ itemName }</Item>)) }
        </ul>
      </div>
    )
  }
}

export default Application

