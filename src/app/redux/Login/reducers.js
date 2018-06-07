import * as Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {};

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.LOGIN:
      return state;
    default:
      return state;
  }
}

export default reducer;
