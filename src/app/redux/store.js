import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { fetchMiddleware } from 'redux-recompose';

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
  compose(
    applyMiddleware(thunk, fetchMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
