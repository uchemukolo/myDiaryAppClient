import axios from 'axios';
import
{
  GET_ENTRIES,
  GET_ENTRIES_ERROR,
  IS_LOADING
} from '../types';

const token = localStorage.getItem('jwtToken');

export const getAllEntries = payload => ({
  type: GET_ENTRIES,
  payload
});

export const getAllEntriesFailure = payload => ({
  type: GET_ENTRIES_ERROR,
  payload
});

export const Loading = () => ({
  type: IS_LOADING
});

export const getEntries = () => (dispatch) => {
  dispatch(Loading());
  axios.get(
    'https://mydiary-challenge.herokuapp.com/api/v1/entries', {
      headers: {
        'Content-Type': 'application/json',
        token: `${token}`,
      }
    }
  ).then((response) => {
    dispatch(getAllEntries(response.data));
  }).catch((error) => {
    dispatch(getAllEntriesFailure(error.response.data));
  });
};
