import { all, call } from 'redux-saga/effects';

import searchWatcher from './search';
import websocketSagas from './websocket';

export function* rootSaga() {
  yield all([
    call(searchWatcher),
    call(websocketSagas)
  ]);
}
