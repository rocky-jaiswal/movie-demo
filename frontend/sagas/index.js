import { all, call, put, takeLatest } from 'redux-saga/effects';
import loadInitialData from './loadInitialData';

export function* rootSaga() {
  yield all([
    takeLatest('LOAD_INITIAL_DATA', loadInitialData)
  ]);
}
