import {
  put, call, takeLatest, all,
} from 'redux-saga/effects'
import axios from 'axios'

import { ITEM } from '../actions/types'

import { item } from '../actions'

function* handleGetMovies() {
  try {
    const { data } = yield call(axios.get, '/api/movies')
    yield put(item.getMoviesSuccess(data))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* handleSaveMovies(action) {
  try {
    const { movie } = action.payload
    const { data } = yield call(axios.post, '/api/movies',movie)
    yield put(item.saveMoviesSuccess(data))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* handleUpdateMovies(action) {
  try {
    const { movie } = action.payload;
    const { data } = yield call(axios.put, `/api/movies/${movie.id}`,movie)
    yield put(item.saveMoviesSuccess(data))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* handleDelMovies(action) {
  try {
    const { deltetMoviesId } = action.payload;
    yield call(axios.delete, `/api/movies/${deltetMoviesId}`)
    yield put(item.deleteMoviesSuccess(deltetMoviesId))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* handleSearchMovies(action) {
  try {
    const { searchMoviesParam } = action.payload;
    const { data } = yield call(axios.post, `/api/movies/search`,searchMoviesParam)
    yield put(item.searchMoviesSuccess(data))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}
function* moviesSagas() {
  yield all([
    takeLatest(ITEM.GETMOVIES, handleGetMovies),
    takeLatest(ITEM.SAVEMOVIES, handleSaveMovies),
    takeLatest(ITEM.UPDATEMOVIES, handleUpdateMovies),
    takeLatest(ITEM.DELETEMOVIES, handleDelMovies),
    takeLatest(ITEM.SEARCHMOVIES, handleSearchMovies)
  ])
}

export default moviesSagas
