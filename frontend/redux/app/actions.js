export const actionTypes = {
  SET_TITLE_QUERY: 'SET_TITLE_QUERY',
};

export function setTitleQuery(payload) {
  return {
    payload,
    type: actionTypes.SET_TITLE_QUERY,
  };
}
