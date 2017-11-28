import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import data from './dataReducer';
const rootReducer = combineReducers({
  data,
  form: formReducer,
});

export default rootReducer;
