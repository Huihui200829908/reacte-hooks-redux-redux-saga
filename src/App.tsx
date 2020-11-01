import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login';
import { Main } from './pages/users/main';
import { UserInfo } from './pages/users/UserInfo';
import { UserCrate } from './pages/users/UserCreate';
import { UserEdit } from './pages/users/UserEdit';
import { MoviesList } from './pages/movies/list';
import { MovieCrate } from './pages/movies/create';
import { MovieUpdate } from './pages/movies/update';
import { FavoriteList } from './pages/Favorite/list';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/users/create" component={UserCrate} />
      <Route exact path="/users/edit/:id" component={UserEdit} />
      <Route exact path="/users/manager" component={Main} />
      <Route exact path="/users/info" component={UserInfo} />
      <Route exact path="/Movies" component={MoviesList} />
      <Route exact path="/Movies/create" component={MovieCrate} />
      <Route exact path="/Movies/edit/:id" component={MovieUpdate} />
      <Route exact path="/Favorite" component={FavoriteList} />
    </Switch>
  );
}

export default App;
