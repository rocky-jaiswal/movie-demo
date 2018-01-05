import { call, put, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import Nes from 'nes/client';

import { actionTypes } from '../redux/app/actions';

function connect(ws) {
  ws.connect();
}

function createWS() {
  return new Nes.Client('ws://localhost:3001');
}

const initWebsocket = (ws) => {
  return eventChannel((emitter) => {
    if (typeof window === 'undefined') {
      emitter(END);
    }

    ws.subscribe('/movieDetails', (update) => emitter(update));

    // unsubscribe function
    return () => {
      console.log('Socket off');
    };
  });
};

function* websocketSagas() {
  const ws = createWS();
  yield call(connect, ws);

  const channel = yield call(initWebsocket, ws);
  while (true) {
    const payload = yield take(channel);
    yield put({ type: actionTypes.INCOMING_MOVIE_DETAILS, payload });
  }
}

export default websocketSagas;
