import * as Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {};

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.CHANGE_SQUARE_STATUS:
      return state;
    default:
      return state;
  }
}

export default reducer;
