import axios from 'axios';
import
{
  UPDATE_ENTRY,
  UPDATE_ENTRY_ERROR,
  IS_LOADING
} from '../types';

const token = localStorage.getItem('jwtToken');


export const updateEntry = payload => ({
  type: UPDATE_ENTRY,
  payload
});

export const updateEntryFailure = payload => ({
  type: UPDATE_ENTRY_ERROR,
  payload
});

export const Loading = () => ({
  type: IS_LOADING
});

export const updateEntryAction = (entryId, updateObject) => (dispatch) => {
  axios.put(
    `https://mydiary-challenge.herokuapp.com/api/v1/entries/${entryId}`, updateObject, {
      headers: {
        'Content-Type': 'application/json',
        token: `${token}`,
      }
    }
  ).then((response) => {
    dispatch(updateEntry(response.data));
    dispatch(Loading());
  }).catch((error) => {
    dispatch(updateEntryFailure(error.response.data));
  });
};
