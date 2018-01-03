import { call, put, select } from 'redux-saga/effects';

import {
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


export default search;
