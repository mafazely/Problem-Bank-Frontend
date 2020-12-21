import { combineReducers } from 'redux';
import account from './account';
import notifications from './notifications';
import redirect from './redirect';

const allReducers = combineReducers({
  account,
  notifications,
  redirect,
});
export default allReducers;
