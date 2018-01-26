import { combineReducers } from 'redux';
import toggle from './ToggleMessage/reducer';
import movies from './Movies/reducer';

const rootReducer = combineReducers({
  toggle,
  movies,
});

export default rootReducer;
