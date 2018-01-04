import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  actionTypes,
  searchQueryInProgress,
  searchQueryFailed,
  searchQuerySucceeded,
} from '../redux/app/actions';

import API from '../api';

function* search() {
  try {
    yield put(searchQueryInProgress());
    const state = yield select();
    const result = yield call(API.searchByTitle, state.app.titleQuery);
    yield put(searchQuerySucceeded(result.data));
  } catch (err) {
    console.error(err);
    yield put(searchQueryFailed());
  }
}

function* searchWatcher() {
  yield takeLatest(actionTypes.SUBMIT_SEARCH_QUERY, search);
}

export default searchWatcher;
