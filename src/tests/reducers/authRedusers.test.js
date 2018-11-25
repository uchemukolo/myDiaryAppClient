import * as types from '../../redux/actions/types';
import auth from '../../redux/reducers/auth';


const initialState = {
  isAuthenticated: false,
  user: {}
};

describe('Auth Reducer', () => {
  it('it should signup a user', () => {
    const user = {};
    const action = {
      type: types.SIGNUP_USER,
      user
    };
    const newState = auth(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      ...{ user, isAuthenticated: true, redirect: true }
    });
  });
  it('it should not signup a user', () => {
    const user = {};
    const action = {
      type: types.SIGNUP_USER_ERROR,
      user
    };
    const newState = auth(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      ...{ error: undefined, isAuthenticated: false }
    });
  });
});
describe('Login Reducer', () => {
  it('it should log in a User', () => {
    const user = {
      id: 1,
      email: 'muche@mail.com'
    };
    const action = {
      type: types.SET_CURRENT_USER,
      user
    };
    const newState = auth(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      isAuthenticated: true,
      redirect: true,
      user: {
        email: 'muche@mail.com',
        id: 1
      }
    });
  });
  it('it should not log in a User', () => {
    const user = {
      id: 1,
      email: ''
    };
    const action = {
      type: types.SET_CURRENT_USER_ERROR,
      user
    };
    const newState = auth(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      ...{ isAuthenticated: false }
    });
  });
  it('it should log out in a User', () => {
    const action = {
      type: types.LOGOUT_USER,
    };
    const newState = auth(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      ...{ isAuthenticated: false },
      redirect: false,
      user: {},
      error: {},
    });
  });
});
