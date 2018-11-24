import * as types from '../../redux/actions/types';
import auth from '../../redux/reducers/auth';
// import '../../setupTests';


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
