import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import game from './Game/reducers';
import login from './Login/reducers';

/* eslint-disable no-underscore-dangle */

const reducers = {
  form: formReducer,
  game,
  login
};

const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
