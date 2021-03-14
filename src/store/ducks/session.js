import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  startGetExampleSaga: [''],
  successGetExampleSaga: ['data'],
  errorGetExampleSaga: ['error'],
  cleanErrors: [''],
});

const initialState = {
  someState: {}
};

function successGetExampleSaga(state, { data }) {
  return {
    ...state,
    ...data,
  };
}

function errorGetExampleSaga(state, { error }) {
  const { errorMessage } = error;
  return {
    ...state,
    error: errorMessage,
  };
}

function cleanErrors(state) {
  return {
    ...state,
    error: '',
  };
}

const session = {
  [Types.SUCCESS_GET_EXAMPLE_SAGA]: successGetExampleSaga,
  [Types.ERROR_GET_EXAMPLE_SAGA]: errorGetExampleSaga,
  [Types.CLEAN_ERRORS]: cleanErrors,
};

export default createReducer(initialState, session);
