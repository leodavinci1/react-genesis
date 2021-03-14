export const SET_CLIENT_APP_ORDER_INFO = 'SET_CLIENT_APP_ORDER_INFO';

export const setThirdPartyInfo = info => {
  return dispatch => {
    dispatch({
      type: SET_CLIENT_APP_ORDER_INFO,
      info,
    });
  };
};
