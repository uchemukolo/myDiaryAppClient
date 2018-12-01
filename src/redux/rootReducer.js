import { combineReducers } from 'redux';
import simpleReducer from './reducers/simpleReducer';
import auth from './reducers/auth';
import addEntry from './reducers/addEntry';
import getEntries from './reducers/getEntries';

export default combineReducers({
  simpleReducer,
  auth,
  addEntry,
  getEntriesReducer: getEntries
});
