import {
  SIGNUP_USER,
  SIGNUP_USER_ERROR
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {},
  redirect: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        isAuthenticated: true,
        redirect: true,
        user: action.user,
      };
    case SIGNUP_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.error
      };
    default: return state;
  }
};
