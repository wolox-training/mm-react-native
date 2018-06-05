import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import game from './Game/reducers';

/* eslint-disable no-underscore-dangle */

const store = createStore(
  game,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
