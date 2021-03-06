import axios from 'axios';
import swal from 'sweetalert';
import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_ERROR,
  LOGOUT_USER
} from '../types';
import setAuthToken from '../../utils/setAuthToken';


export const loginUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export const loginUserFailure = error => ({
  type: SET_CURRENT_USER_ERROR,
  error
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  dispatch({
    type: LOGOUT_USER
  });
};

export const userLoginRequest = userDetails => dispatch => axios.post(
  'https://mydiary-challenge.herokuapp.com/api/v1/auth/login',
  userDetails
)
  .then((response) => {
    const { token } = response.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    dispatch(loginUser(response.data));
  }, (error) => {
    swal('Oops!', 'Please login with a valid email or password', 'error');
    dispatch(loginUserFailure(error.response));
    return error.response;
  });
