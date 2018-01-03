import { combineReducers } from 'redux';

import appReducer, { initialState as appInitialState } from './app';

export const reduxInitialState = {
  app: appInitialState,
};

export const createReducer = () => {
  return combineReducers({
    app: appReducer,
  });
};
