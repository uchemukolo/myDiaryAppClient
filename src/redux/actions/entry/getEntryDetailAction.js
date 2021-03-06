import axios from 'axios';
import
{
  GET_ENTRY_DETAILS,
  GET_ENTRY_DETAILS_ERROR,
  IS_LOADING
} from '../types';


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

export const getEntryDetailAction = entryId => (dispatch) => {
  dispatch(Loading());
  axios.get(
    `https://mydiary-challenge.herokuapp.com/api/v1/entries/${entryId}`
  ).then((response) => {
    dispatch(getEntryDetail(response.data));
  }).catch((error) => {
    dispatch(getEntryDetailoFailure(error.response.data));
  });
};
