import { combineReducers } from 'redux-immutable';
import exampleReducer from './loginReducer';
import mainReducer from './mainReducer';
import moviesReducer from './moviesReducer';
const rootReducer = asyncReducers => combineReducers({
  exampleData: exampleReducer,
  mainData: mainReducer,
  moviesData: moviesReducer,
  ...asyncReducers,
})

export default rootReducer
