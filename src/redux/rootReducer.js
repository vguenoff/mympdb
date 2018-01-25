import { combineReducers } from 'redux';
import message from './reducerMessage';

const rootReducer = combineReducers({
  message,
});

export default rootReducer;
