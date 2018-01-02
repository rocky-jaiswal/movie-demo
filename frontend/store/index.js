import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';

import { createReducer, reduxInitialState } from './../redux';
import { rootSaga } from './../sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(state = reduxInitialState) {
  const store = createStore(
    createReducer(),
    state,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent));
}
