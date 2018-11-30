import axios from 'axios';
import { SIGNUP_USER, SIGNUP_USER_ERROR } from '../types';
import setAuthToken from '../../utils/setAuthToken';


export const signupUser = user => ({
  type: SIGNUP_USER,
  user
});


export const signupUserFailure = error => ({
  type: SIGNUP_USER_ERROR,
  error
});

export const userSignupRequest = userData => dispatch => axios.post(
  'https://mydiary-challenge.herokuapp.com/api/v1/auth/signup',
  userData
)
  .then((response) => {
    const { token } = response.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    dispatch(signupUser(response.data));
  }, (error) => {
    dispatch(signupUserFailure(error.response));
  });
