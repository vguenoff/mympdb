import { combineReducers } from 'redux';
import message from './ToggleMessage/reducer';
import movies from './Movies/reducer';

const rootReducer = combineReducers({
  message,
  movies,
});

export default rootReducer;
