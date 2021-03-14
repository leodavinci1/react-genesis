import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createRootSaga from './sagas';
import session from './ducks/session';
import loading from './ducks/loader';

// export const makeStore = (preloadedState, appSagas = e => e) => {
const sagaMiddleware = createSagaMiddleware();
const appReducer = combineReducers({ session, loading });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(createRootSaga);

export default store;
