import axios from 'axios';
import
{
  GET_PROFILE,
  GET_PROFILE_ERROR,
  IS_LOADING
} from '../types';


export const getProfile = payload => ({
  type: GET_PROFILE,
  payload
});

export const getProfileFailure = payload => ({
  type: GET_PROFILE_ERROR,
  payload
});

export const Loading = () => ({
  type: IS_LOADING
});

export const getProfileAction = () => (dispatch) => {
  dispatch(Loading());
  axios.get(
    'https://mydiary-challenge.herokuapp.com/api/v1/auth/profile'
  ).then((response) => {
    console.log(response);
    dispatch(getProfile(response.data.profile));
  }).catch((error) => {
    dispatch(getProfileFailure(error.response));
  });
};
