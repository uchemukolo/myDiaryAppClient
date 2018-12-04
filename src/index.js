import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import store from './redux/store/store';
import './myStyle.scss';
import App from './App';
import setAuthToken from './redux/utils/setAuthToken';
import { loginUser } from './redux/actions/users/login';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(loginUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
