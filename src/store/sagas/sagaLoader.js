import { takeEvery, takeLeading, put, all, takeLatest } from 'redux-saga/effects';
import { Creators as loader } from '../ducks/loader';
import { Types as sessionTypes } from '../ducks/session';

const getUserData = {
  object: 'user',
  method: 'getData',
};

const getParams = data => {
  return {
    object: data.split('_')[2].toLowerCase(),
    method: data.split('_')[1].toLowerCase(),
  };
};

function* addLoader(params) {
  const { type } = params;
  const result = type === undefined ? params : getParams(type);
  yield put(loader.startLoading(result));
}

function* removeLoader(params) {
  const { type } = params;
  const result = type === undefined ? params : getParams(type);
  yield put(loader.stopLoading(result));
}

// TODO: CORRIGIR
function* SagaLoader() {
  yield all([
    takeLeading('START_GET_PROMOCODES', addLoader, getUserData),
    takeEvery('SUCCESS_GET_PROMOCODES', removeLoader, getUserData),
    takeLeading('START_GET_USER_EXTRACT', addLoader, getUserData),
    takeEvery('SUCCESS_GET_USER_EXTRACT', removeLoader, getUserData),
    takeLeading('START_GET_CATEGORY_EVOLUTION', addLoader, getUserData),
    takeEvery('SUCCESS_GET_CATEGORY_EVOLUTION', removeLoader, getUserData),
    takeLatest(sessionTypes.START_GET_USER_DATA, addLoader, getUserData),
    takeLatest(sessionTypes.SUCCESS_GET_USER_DATA, removeLoader, getUserData),
    takeLatest(sessionTypes.ERROR_GET_USER_DATA, removeLoader, getUserData),
    takeLatest(sessionTypes.START_FINISH_RATING, addLoader, getUserData),
    takeLatest(sessionTypes.SUCCESS_FINISH_RATING, removeLoader, getUserData),
    takeLatest(sessionTypes.ERROR_FINISH_RATING, removeLoader, getUserData),
  ]);
}

export default SagaLoader;
