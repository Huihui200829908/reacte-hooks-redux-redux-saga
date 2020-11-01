import { createActionTypes } from '../utils'

export const ITEM:any = createActionTypes('ITEM', [
  'LOGIN',
  'GETUSER',
  'GET',
  'SAVEUSER',
  'SAVEUSERSUCCESS',
  'DELETEUSER',
  'DELETEUSERSUCCESS',
  'UPDATEUSER',
  'UPDATEUSERSUCCESS',
  'USERSUCCESS',
  'GETMOVIES',
  'GETMOVIESSUCCESS',
  'SAVEMOVIES',
  'SAVEMOVIESSUCCESS',
  'UPDATEMOVIES',
  'UPDATEMOVIESSUCCESS',
  'DELETEMOVIES',
  'DELETEMOVIESSUCCESS',
  'SEARCHMOVIES',
  'SEARCHMOVIESSUCCESS',
  'SUCCESS',
  'FAILURE',
])

export default ITEM
