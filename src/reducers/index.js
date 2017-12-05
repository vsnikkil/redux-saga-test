import { combineReducers } from 'redux'
import * as actions from '../actions/'

function todos (state = [], action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      if (state.indexOf(action.itemName) >= 0) return state
      return [...state, action.itemName]
    case actions.REMOVE_ITEM:
      return state.filter(item => item !== action.itemName)
    default:
      return state
  }
}

export default combineReducers({ todos })

