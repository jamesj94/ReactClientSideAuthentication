//Property of state is going to be
//produced by my redux form reducer

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form
});

export default rootReducer;
