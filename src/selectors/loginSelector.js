import { createSelector } from 'reselect'

const exampleState = state => state.get('exampleData')

export const dataSelector = createSelector(
  exampleState,
  state => {
    const data = state.get('data')

    return data
  },
)
export const userSelector = createSelector(
  exampleState,
  state => {
    const data = state.get('users')

    return data
  },
)
export const delUserSelector = createSelector(
  exampleState,
  state => {
    const data = state.get('deltetUserId')

    return data
  },
)

export const fetchingSelector = createSelector(
  exampleState,
  state => state.get('fetching'),
)

export const errorSelector = createSelector(
  exampleState,
  state => {
    const error = state.get('error')

    return error
  },
)
export default {
  dataSelector,
  userSelector,
  delUserSelector,
  fetchingSelector,
  errorSelector,
}
