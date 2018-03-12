import { combineReducers } from 'redux';
import data from './reducers_first_page';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  Data:data,
  form:formReducer
});

export default rootReducer;
