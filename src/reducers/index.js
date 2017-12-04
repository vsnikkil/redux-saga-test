import { combineReducers } from 'redux'
import * as actions from '../actions/'

function items (state = [], action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      return [...state, action.itemName]
    default:
      return state
  }
}

export default combineReducers({ items })

