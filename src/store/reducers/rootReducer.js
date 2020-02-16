import { combineReducers } from 'redux';
import authReducer from './auth';
import quizReducer from './quiz';
import createReducer from './create';

export default combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  create: createReducer
});