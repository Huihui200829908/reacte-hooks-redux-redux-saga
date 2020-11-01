import { fromJS } from 'immutable'
import { ITEM } from '../actions/types'

const initialState = fromJS({
  deltetUserId: null,
  movieList: [],
  movie: [],
  favorite: [],
  fetching: false,
  success: false,
  error: null,
})
export default function exampleReducer(state = initialState, action) {

  switch (action.type) {
    case ITEM.GETMOVIES:
    case ITEM.GETMOVIESSUCCESS:
    case ITEM.SAVEMOVIES:
    case ITEM.SAVEMOVIESSUCCESS:
    case ITEM.UPDATEMOVIES:
    case ITEM.UPDATEMOVIESSUCCESS:
    case ITEM.DELETEMOVIES:
    case ITEM.DELETEMOVIESSUCCESS:
    case ITEM.SEARCHMOVIES:
    case ITEM.SEARCHMOVIESSUCCESS:
      return state.merge(action.payload)
    default:
      return state
  }
}
