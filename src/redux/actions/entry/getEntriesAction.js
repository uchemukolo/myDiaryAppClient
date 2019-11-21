import axios from 'axios';
import
{
  GET_ENTRIES,
  GET_ENTRIES_ERROR,
  IS_LOADING
} from '../types';


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
    'https://mydiary-challenge.herokuapp.com/api/v1/entries'
  ).then((response) => {
    dispatch(getAllEntries(response.data));
    return response.data;
  }).catch((error) => {
    dispatch(getAllEntriesFailure(error.response.data));
    return error.response.data;
  });
};

export const getEntriesCount = () => (dispatch) => {
  axios.get(
    'https://mydiary-challenge.herokuapp.com/api/v1/entries'
  ).then((response) => {
    dispatch(getAllEntries(response.data.entry.length));
  }).catch((error) => {
    dispatch(getAllEntriesFailure(error.response));
  });
};
