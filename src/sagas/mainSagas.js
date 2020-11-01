import {
  put, call, takeLatest, all,
} from 'redux-saga/effects'
import axios from 'axios'

import { ITEM } from '../actions/types'

import { item } from '../actions'

function* handleSaveUser(action) {
  try {
    const { userData } = action.payload
    const { data } = yield call(axios.post, '/api/users', { ...userData })
    yield put(item.saveUserSuccess({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* handleUserUpdate(action) {
  try {
    const { updateUserData } = action.payload
    const { data } = yield call(axios.put, `/api/users/${updateUserData.id}`, {
      username: updateUserData.username,
      email: updateUserData.email,
      role: updateUserData.email,
      name: updateUserData.name,
      password: updateUserData.password 
    })
    yield put(item.saveUserSuccess({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* handleUserDelete(action) {
  try {
    const { deltetUserId } = action.payload
    yield call(axios.delete, `/api/users/${deltetUserId}`)
    yield put(item.deleteUserSuccess(deltetUserId))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}

function* mainSagas() {
  yield all([
    takeLatest(ITEM.DELETEUSER, handleUserDelete),
    takeLatest(ITEM.UPDATEUSER, handleUserUpdate),
    takeLatest(ITEM.SAVEUSER, handleSaveUser)
  ])
}

export default mainSagas
