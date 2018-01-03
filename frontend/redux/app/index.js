import * as Immutable from 'seamless-immutable';

import { actionTypes } from './actions';

export const initialState = Immutable.from({
  loading: false,
  error: null,
  titleQuery: '',
  movies: [],
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SET_TITLE_QUERY:
      return state
        .set('titleQuery', action.payload);

    case actionTypes.SEARCH_QUERY_IN_PROGRESS:
      return state
        .set('loading', true);

    case actionTypes.SEARCH_QUERY_FAILED:
      return state
        .set('loading', false)
        .set('error', actionTypes.SEARCH_QUERY_FAILED);

    case actionTypes.SEARCH_QUERY_SUCCEEDED:
      return state
        .set('loading', false)
        .set('movies', action.payload);

    default:
      return state;
  }
};

export default appReducer;
