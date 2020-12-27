import { IntlReducer as Intl } from 'react-redux-multilingual';
import { combineReducers } from 'redux';

import account from './account';
import problem from './problem';
import properties from './properties';
import notification from './notification';
import redirect from './redirect';

const allReducers = combineReducers({
  account,
  problem,
  properties,
  notification,
  redirect,
  Intl,
});
export default allReducers;

