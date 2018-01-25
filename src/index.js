import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// redux test
// reducer
// const greeting = (
//   state = {
//     welcome: 'Hi',
//     otherStuff: 'some stuff',
//   },
//   action,
// ) => {
//   switch (action.type) {
//     case 'GREET_ME':
//       return {
//         ...state,
//         welcome: 'Hello Vassil',
//       };
//     case 'GREET_WORLD':
//       return {
//         ...state,
//         welcome: 'Hello World',
//       };
//     case 'GREET_NAME':
//       return {
//         ...state,
//         welcome: `Hello ${action.payload}`,
//       };
//     default:
//       return state;
//   }
// };

// // creating the store with the reducer
// const store = createStore(greeting);
// console.log(store.getState());

// store.dispatch({ type: 'GREET_ME' });
// console.log(store.getState());

// store.dispatch({ type: 'GREET_WORLD' });
// console.log(store.getState());

// // adding option payload
// store.dispatch({
//   type: 'GREET_NAME',
//   payload: 'Scott',
// });
// console.log(store.getState());

// store.dispatch({
//   type: 'GREET_NAME',
//   payload: 'Courtney',
// });
// console.log(store.getState());
