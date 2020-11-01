import { createSelector } from 'reselect'

const exampleState = state => state.get('moviesData')

export const movieListSelector = createSelector(
  exampleState,
  state => {
    const data = state.get('movieList');
    return data
  },
)
export const movieSaveSelector = createSelector(
  exampleState,
  state => {
    const data = state.get('movie')
    return {data:data}
  },
)
export const movieDelSelector = createSelector(
  exampleState,
  state => {
    const data = state.get('deltetMoviesId')
    return data
  },
)
export const movieFavoriteSelector = createSelector(
  exampleState,
  state => {
    const data = state.get('favorite')
    return data
  },
)
export default {
  movieDelSelector,
  movieListSelector,
  movieSaveSelector,
  movieFavoriteSelector
}
