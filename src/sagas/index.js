import { all, fork } from 'redux-saga/effects';
import loginSagas from './loginSagas';
import mainSagas from './mainSagas';
import moviesSagas from './moviesSagas';

export default function* rootSaga() {
  yield all([
    fork(loginSagas),
    fork(mainSagas),
    fork(moviesSagas),
  ])
}
