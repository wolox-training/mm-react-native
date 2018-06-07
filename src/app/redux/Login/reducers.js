import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  token: ''
};

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.USER_LOGIN_SUCCESS: {
      return state.merge({
        token: action.payload.token
      });
    }
    default:
      return state;
  }
}

export default reducer;
