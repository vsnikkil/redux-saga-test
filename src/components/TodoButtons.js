import React, { Component } from 'react'

const navStyle = {
  display: 'flex'
}

const inputStyle = {
  flex: '1 1 70%',
  outline: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  backgroundColor: '#fed',
  border: 'none',
  padding: '1rem'
}

const buttonStyle = {
  flex: '1 1 30%',
  outline: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  padding: '1rem',
  backgroundColor: '#a98',
  color: 'white',
  border: 'none'
}

const NEW_ITEM_NAME = 'newItemName'
class TodoButtons extends Component {
  constructor (props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.addNewItem = this.addNewItem.bind(this)
    this.onEnter = this.onEnter.bind(this)

    this.state = {
      [NEW_ITEM_NAME]: ''
    }
  }

  onEnter (event, fc) {
    if (event.key === 'Enter') fc()
  }

  onInputChange (event) {
    this.setState({ [NEW_ITEM_NAME]: event.target.value })
  }

  addNewItem () {
    this.props.addItem(this.state[NEW_ITEM_NAME])
  }

  render () {
    return (
      <nav style = { navStyle }>
        <input
          style = { inputStyle }
          onKeyPress = { event => this.onEnter(event, this.addNewItem) }
          onChange = { this.onInputChange }
          value = { this.state.newItemName } />
        <button style = { buttonStyle } onClick = { this.addNewItem }>Add more</button>
      </nav>
    )
  }
}

export default TodoButtons

