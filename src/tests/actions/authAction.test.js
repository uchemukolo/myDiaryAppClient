import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as types from '../../redux/actions/types';
import * as actions from '../../redux/actions/users/login';
import * as action from '../../redux/actions/users/signup';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoidGVzdGluZyIsImlhdCI6MTUxNzc0MjgwOSwiZXhwIjoxNTE3ODI5MjA5fQ.IvHzqut0GUPfhBQXanQhrLjJ3PdZwwrw5OmAdOonMkI';


describe('Signup', () => {
  it('should create an action to signup a user', () => {
    const user = {
      id: 1,
      userName: 'username',
      email: 'email@email.com',
      Token
    };
    const expectedAction = {
      type: types.SIGNUP_USER,
      user
    };

    expect(action.signupUser(user)).toEqual(expectedAction);
  });

  it('should dispatch userSignupRequest action', () => {
    const store = mockStore({});
    axios.post = jest.fn(() => Promise.resolve({
      data: {
        id: 1,
        userName: 'username',
        email: 'email@email.com',
        Token
      }
    }));
    const user = {
      id: 1,
      userName: 'username',
      email: 'email@email.com',
      Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoidGVzdGluZyIsImlhdCI6MTUxNzc0MjgwOSwiZXhwIjoxNTE3ODI5MjA5fQ.IvHzqut0GUPfhBQXanQhrLjJ3PdZwwrw5OmAdOonMkI'

    };
    const expectedAction = [{
      type: types.SIGNUP_USER,
      user,
    }];
    return store.dispatch(action.userSignupRequest(Token))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
describe('signin', () => {
  it('should create an action for login user', () => {
    const user = {
      id: 1,
      email: 'email@email.com',
      password: 'password123',
      Token
    };
    const expectedAction = {
      type: types.SET_CURRENT_USER,
      user
    };

    expect(actions.loginUser(user)).toEqual(expectedAction);
  });

  it('should dispatch SET_CURRENT_USER action', () => {
    const store = mockStore({});
    axios.post = jest.fn(() => Promise.resolve({
      data: {
        id: 1,
        email: 'email@email.com',
        password: 'password123',
        Token
      }
    }));
    const expectedAction = [{
      type: 'SET_CURRENT_USER',
      user: {
        Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoidGVzdGluZyIsImlhdCI6MTUxNzc0MjgwOSwiZXhwIjoxNTE3ODI5MjA5fQ.IvHzqut0GUPfhBQXanQhrLjJ3PdZwwrw5OmAdOonMkI',
        email: 'email@email.com',
        id: 1,
        password: 'password123'
      }
    }];

    return store.dispatch(actions.userLoginRequest(Token))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });

  it('should dispatch logout action', () => {
    const store = mockStore({});

    const expectedAction = [
      {
        type: types.LOGOUT_USER,
        user: undefined
      }
    ];
    store.dispatch(actions.logout());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
