import { all } from 'redux-saga/effects';
import sagaGetExampleSaga from './sagaGetExampleSaga';
import SagaLoader from './sagaLoader';

const sagas = [sagaGetExampleSaga, SagaLoader];

export { sagas };

/**
 * Call every saga from the saga's array
 */

function* getSagas() {
  yield all(sagas.map(fn => fn()));
}

export default getSagas;
