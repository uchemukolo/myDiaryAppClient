import { combineReducers } from 'redux';
import auth from './reducers/auth';
import addEntry from './reducers/addEntry';
import getEntries from './reducers/getEntries';
import getEntryDetailReducer from './reducers/getEntryDetailReducer';

export default combineReducers({
  auth,
  addEntry,
  getEntriesReducer: getEntries,
  getEntryDetailReducer
});
