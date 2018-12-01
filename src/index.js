import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import store from './redux/store/store';
import './myStyle.scss';
import App from './App';
import setAuthToken from './redux/utils/setAuthToken';
import { loginUser } from './redux/actions/users/login';

if (window.localStorage.jwtToken && typeof window !== 'undefined') {
  setAuthToken(window.localStorage.jwtToken);
  store.dispatch(loginUser(jwt.decode(window.localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
