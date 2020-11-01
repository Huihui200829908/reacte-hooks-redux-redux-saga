import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import configureStore from './store';
import rootSaga from './sagas';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { icons } from './asset/icons';
React.icons = icons
const initialState = {}
const history = createBrowserHistory()
const store = configureStore(initialState, history)
store.runSaga(rootSaga)

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <Router history={history}>
        <App />
      </Router >
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
