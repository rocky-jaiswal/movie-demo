import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* loadInitialData() {
  yield call(delay, 200);
  yield put({});
}


export default loadInitialData;
