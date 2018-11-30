import axios from 'axios';
import { ADD_NEW_ENTRY, ADD_NEW_ENTRY_ERROR } from '../types';

export const addEntrySuccess = payload => ({
  type: ADD_NEW_ENTRY,
  payload
});

export const addEntryFailure = payload => ({
  type: ADD_NEW_ENTRY_ERROR,
  payload
});

export const addEntryAction = newEntry => dispatch => axios.post(
  'https://mydiary-challenge.herokuapp.com/api/v1/entries', newEntry
)
  .then((response) => {
    dispatch(addEntrySuccess(response.data));
  }, (error) => {
    dispatch(addEntryFailure(error.response.data));
  });
