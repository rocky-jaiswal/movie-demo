import * as Immutable from 'seamless-immutable';

import { actionTypes } from './actions';

export const initialState = Immutable.from({
  titleQuery: '',
  movies: [],
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SET_TITLE_QUERY:
      return state
        .set('titleQuery', action.payload);

    default:
      return state;
  }
};

export default appReducer;
