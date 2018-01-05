export const actionTypes = {
  SET_TITLE_QUERY: 'SET_TITLE_QUERY',
  SUBMIT_SEARCH_QUERY: 'SUBMIT_SEARCH_QUERY',
  SEARCH_QUERY_IN_PROGRESS: 'SEARCH_QUERY_IN_PROGRESS',
  SEARCH_QUERY_FAILED: 'SEARCH_QUERY_FAILED',
  SEARCH_QUERY_SUCCEEDED: 'SEARCH_QUERY_SUCCEEDED',
  INCOMING_MOVIE_DETAILS: 'INCOMING_MOVIE_DETAILS',
};

export function setTitleQuery(payload) {
  return {
    payload,
    type: actionTypes.SET_TITLE_QUERY,
  };
}

export function submitSearchQuery() {
  return {
    type: actionTypes.SUBMIT_SEARCH_QUERY,
  };
}

export function searchQueryInProgress() {
  return {
    type: actionTypes.SEARCH_QUERY_IN_PROGRESS,
  };
}

export function searchQueryFailed() {
  return {
    type: actionTypes.SEARCH_QUERY_FAILED,
  };
}

export function searchQuerySucceeded(payload) {
  return {
    payload,
    type: actionTypes.SEARCH_QUERY_SUCCEEDED,
  };
}
