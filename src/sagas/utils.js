import { take, fork, cancel } from 'redux-saga/effects'

export function* customTakeLatest (patternOrChannel, saga, ...args) {
  let lastTask
  while (true) {
    const action = yield take(patternOrChannel)
    if (lastTask) {
      yield cancel(lastTask)
    }
    lastTask = yield fork(saga, ...args.concat(action))
  }
}

