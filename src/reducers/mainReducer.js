import { fromJS, List } from 'immutable'
import { ITEM } from '../actions/types'

const initialState = fromJS({
  data: new List([]),
  updateUserData:null,
  fetching: false,
  success: false,
  error: null,
})

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM.SAVEUSER:
    case ITEM.SAVEUSERSUCCESS:
    case ITEM.DELETEUSER:
    case ITEM.DELETEUSERSUCCESS:
    case ITEM.UPDATEUSER:
    case ITEM.UPDATEMOVIESSUCCESS:
    case ITEM.FAILURE:
      return state.merge(action.payload)
    default:
      return state
  }
}
