import { createSelector } from 'reselect'

const exampleState = state => state.get('mainData')

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
    const data = state.get('user')

    return data
  },
)
export const SaveUserDataSelector = createSelector(
  exampleState,
  state => {
    const data = state.get('SaveUserData')

    return data
  },
)

export const fetchingSelector = createSelector(
  exampleState,
  state => state.get('fetching'),
)
export const delUserDataSelector = createSelector(
  exampleState,
  state => state.get('deltetUserId'),
)

export const updateUserDataSelector = createSelector(
  exampleState,
  state => {
    const data = state.get('updateUserData')

    return {data}
  },
)

export const errorSelector = createSelector(
  exampleState,
  state => {
    const error = state.get('error')

    return error
  },
)
export default {
  delUserDataSelector,
  SaveUserDataSelector,
  updateUserDataSelector,
  dataSelector,
  fetchingSelector,
  errorSelector,
}
