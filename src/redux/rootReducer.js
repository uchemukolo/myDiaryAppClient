import { combineReducers } from 'redux';
import simpleReducer from './reducers/simpleReducer';
import auth from './reducers/auth';
import addEntry from './reducers/addEntry';

export default combineReducers({
  simpleReducer,
  auth,
  addEntry
});
