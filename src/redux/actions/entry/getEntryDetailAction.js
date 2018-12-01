import axios from 'axios';
import
{
  GET_ENTRY_DETAILS,
  GET_ENTRY_DETAILS_ERROR,
  IS_LOADING
} from '../types';

const token = localStorage.getItem('jwtToken');
const entryId = window.location.search.split('?')[1];

export const getEntryDetail = payload => ({
  type: GET_ENTRY_DETAILS,
  payload
});

export const getEntryDetailoFailure = payload => ({
  type: GET_ENTRY_DETAILS_ERROR,
  payload
});

export const Loading = () => ({
  type: IS_LOADING
});

export const getEntryDetailAction = () => (dispatch) => {
  dispatch(Loading());
  axios.get(
    `https://mydiary-challenge.herokuapp.com/api/v1/entries/${entryId}`, {
      headers: {
        'Content-Type': 'application/json',
        token: `${token}`,
      }
    }
  ).then((response) => {
    dispatch(getEntryDetail(response.data));
    console.log(response.data);
  }).catch((error) => {
    dispatch(getEntryDetailoFailure(error.response.data));
  });
};
