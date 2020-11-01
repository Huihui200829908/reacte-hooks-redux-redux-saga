import { fromJS, List } from 'immutable'
import { ITEM } from '../actions/types'

const initialState = fromJS({
  data: new List([]),
  fetching: false,
  success: false,
  error: null
})

export default function exampleReducer(state = initialState, action) {

  switch (action.type) {
    case ITEM.LOGIN:
      return state.merge(action.payload)
    case ITEM.GETUSER:
      return state.merge(action.payload)
    case ITEM.USERSUCCESS:
      return state.merge(action.payload)
    case ITEM.SUCCESS:
    case ITEM.FAILURE:
      return state.merge(action.payload)
    default:
      return state
  }
}
