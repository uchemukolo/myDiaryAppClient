import { combineReducers } from 'redux';
import simpleReducer from './reducers/simpleReducer';
import auth from './reducers/auth';

export default combineReducers({
  simpleReducer, auth
});
