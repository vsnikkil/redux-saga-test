import * as actions from '../actions'
import { put, all, fork, take, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'

export function* addItem (action) {
  yield delay(4000)
  yield put(actions.addItem(action.itemName))
}

export default function* rootSaga () {
  yield takeEvery(actions.ADD_ITEM_ASYNC, addItem)
}

