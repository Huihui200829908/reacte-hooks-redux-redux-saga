import {
  put, call, takeLatest, all,
} from 'redux-saga/effects'
import axios from 'axios'

import { ITEM } from '../actions/types'

import { item } from '../actions'

function* handleLogIn(action) {
  try {
    const { username,password } = action.payload;
    const { data } = yield call(axios.post, '/api/login', {
       username,
       password
    })
    yield put(item.success({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* getUsers() {
  try {
    const { data } = yield call(axios.get, '/api/users')
    yield put(item.userSuccess({ users:data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* loginSagas() {
  yield all([
    takeLatest(ITEM.LOGIN, handleLogIn),
    takeLatest(ITEM.GETUSER, getUsers),
  ])
}

export default loginSagas
