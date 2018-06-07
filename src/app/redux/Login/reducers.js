import Immutable from 'seamless-immutable';

import api from '../../../config/api';

import { actions } from './actions';

const initialState = {
  token: ''
};

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.USER_LOGIN_SUCCESS: {
      api.setHeaders({ Token: action.payload.token });
      return state.merge({
        token: action.payload.token
      });
    }
    case actions.USER_LOGIN_FAILURE:
      return state;
    default:
      return state;
  }
}

export default reducer;
