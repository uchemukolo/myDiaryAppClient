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

export const addEntryAction = (newEntry, history) => dispatch => axios.post(
  'https://mydiary-challenge.herokuapp.com/api/v1/entries', newEntry
)
  .then((response) => {
    dispatch(addEntrySuccess(response.data));
    const entryId = response.data.newEntry.id;
    history.replace(`/entry-detail/${entryId}`);
    return response.data;
  }, (error) => {
    dispatch(addEntryFailure(error.response.data.message));
    return error.response.data.message;
  });
