import { combineReducers } from 'redux';

// Reducers
import leads from './leads';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  leads,
  errors,
  messages
});
