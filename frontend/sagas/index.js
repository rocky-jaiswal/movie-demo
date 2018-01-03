import { all, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../redux/app/actions';

import search from './search';

export function* rootSaga() {
  yield all([
    takeLatest(actionTypes.SUBMIT_SEARCH_QUERY, search),
  ]);
}
