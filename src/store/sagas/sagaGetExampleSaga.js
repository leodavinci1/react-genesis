import { takeLeading, put, call } from 'redux-saga/effects';
import { RequestData } from '../../services/requests';
import { Creators as sessionCreators, Types as sessionTypes } from '../ducks/session';

function* GetExampleSaga() {

  try {
    // with param
    // const response = yield call(RequestData, params);
    const response = yield call(RequestData);

    // yield put(sessionCreators.successGetUserData(filteredData));
  } catch (error) {
    // yield put(sessionCreators.errorGetUserData(error));
  }
}

function* sagaGetExampleSaga() {
  yield takeLeading(sessionTypes.START_GET_EXAMPLE_SAGA, GetExampleSaga);
}

export default sagaGetExampleSaga;
