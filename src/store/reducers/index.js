import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import contact from './contact';
import utils from './utils';

export default combineReducers({
  routing,
  auth,
  user,
  contact,
  utils
});
