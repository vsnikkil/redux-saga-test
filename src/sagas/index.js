import * as actions from '../actions'
import { put, all, fork, take, takeLatest, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'

export function* addItem (...args) {
  const action = args.pop()
  yield delay(500)
  yield put(actions.addItem(action.itemName))
}

export default function* rootSaga () {
  yield takeLatest(actions.ADD_ITEM_ASYNC, addItem)
}

