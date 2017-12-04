import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer from './reducers/'
import App from './containers/Application'
import rootSaga from './sagas/'
import { addItemAsync } from './actions/'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

function initialize () {
  const appWrapper = document.querySelector('.application-wrapper')
  if (!appWrapper) return

  render(<Provider store = { store }><App /></Provider>, appWrapper)
}

store.dispatch(addItemAsync('test item'))

initialize()

