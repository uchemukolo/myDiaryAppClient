import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as types from '../../redux/actions/types';
import * as actions from '../../redux/actions/users/signup';
// import '../setupTests';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoidGVzdGluZyIsImlhdCI6MTUxNzc0MjgwOSwiZXhwIjoxNTE3ODI5MjA5fQ.IvHzqut0GUPfhBQXanQhrLjJ3PdZwwrw5OmAdOonMkI';

describe('Signup', () => {
  it('should craete an action to signup a user', () => {
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

    expect(actions.signupUser(user)).toEqual(expectedAction);
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

    return store.dispatch(actions.userSignupRequest(Token))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
