export const ADD_ITEM = 'ADD_ITEM'
export const ADD_ITEM_ASYNC = 'ADD_ITEM_ASYNC'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export function addItemAsync (itemName) {
  return {
    type: ADD_ITEM_ASYNC,
    itemName
  }
}

export function addItem (itemName) {
  return {
    type: ADD_ITEM,
    itemName
  }
}

export function removeItem (itemName) {
  return {
    type: REMOVE_ITEM,
    itemName
  }
}

