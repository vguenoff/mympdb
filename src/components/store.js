import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { load, save } from 'redux-localstorage-simple';


import rootReducer from './rootReducer';

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(
    applyMiddleware(...middleware, save()),
  ),
);

export default store;
