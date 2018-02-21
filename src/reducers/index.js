//Property of state is going to be
//produced by my redux form reducer

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer
});

export default rootReducer;
