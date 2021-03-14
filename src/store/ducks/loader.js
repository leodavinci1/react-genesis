import { createReducer, createActions } from 'reduxsauce';

const initialState = {
  user: { getData: 0 },
};

export const { Types, Creators } = createActions({
  startLoading: ['data'],
  stopLoading: ['data'],
});

function startLoading(state, { data }) {
  return {
    ...state,
    [data.object]: {
      ...state[data.object],
      [data.method]: state[data.object][data.method] + 1,
    },
  };
}

function stopLoading(state, { data }) {
  return {
    ...state,
    [data.object]: {
      ...state[data.object],
      [data.method]: state[data.object][data.method] - 1,
    },
  };
}

const loading = {
  [Types.START_LOADING]: startLoading,
  [Types.STOP_LOADING]: stopLoading,
};

export default createReducer(initialState, loading);
